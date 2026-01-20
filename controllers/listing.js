const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.newListingForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createNewListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;
  let query = `${req.body.listing.location},${req.body.listing.country}`;
  // const baseUrl = process.env.MAP_URL;
  // const mapUrl = `${baseUrl}&q=${encodeURIComponent(query)}`;
  const result = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
    {
      headers: {
        "User-Agent": "StayScape/1.0 (contact: agamarora@example.com)",
      },
    },
  );
  const data = await result.json();
  if (!result.ok) {
    console.error("Geocoding failed:", result.status, result.statusText);
  }

  let lat = 31.634;
  let lng = 74.8723;
  if (data.length > 0) {
    lat = Number(data[0].lat);
    lng = Number(data[0].lon);
  }

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry = { lat, lng };
  await newListing.save();
  req.flash("success", "New listing is created!");
  res.redirect("/listings");
};

module.exports.listingEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  let orignalImageUrl = listing.image.url;
  orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/w_200");
  res.render("listings/edit.ejs", { listing, orignalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  let query = `${req.body.listing.location},${req.body.listing.country}`;
  // const baseUrl = process.env.MAP_URL;
  // const mapUrl = `${baseUrl}&q=${encodeURIComponent(query)}`;
  const result = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(query)}`,
    {
      headers: {
        "User-Agent": "StayScape/1.0 (contact: agamarora@example.com)",
      },
    },
  );
  const data = await result.json();
  if (data.length > 0) {
    let lat = Number(data[0].lat);
    let lng = Number(data[0].lon);
    listing.geometry = { lat, lng };
    await listing.save();
  }

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "listing is updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  req.flash("success", "listing Deleted!");
  console.log(deletedListing);
  res.redirect("/listings");
};
