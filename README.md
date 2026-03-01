# 🏡 StayScape

**StayScape** is a full-stack web application that allows users to explore property listings, host their own properties, request visits, and leave reviews securely.

It provides a smooth experience for both property owners and visitors.

---

## 🚀 Features

### 🔐 Authentication
- **User Signup**
- **User Login**
- Secure password hashing
- Session-based authentication
- Flash messages for alerts

### 🏠 Listings
- View all property listings
- View detailed listing page
- Create a new listing
- Edit your own listing
- Delete your own listing
- Upload listing images

### 📅 Visit Requests
- Request a visit to a property
- Prevent duplicate visit requests


### ⭐ Reviews
- Add reviews to listings
- Delete your own reviews
- Rating system
- Review validation

### 🔒 Authorization
- Only logged-in users can create listings
- Only listing owners can edit/delete listings
- Only review authors can delete reviews

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, EJS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **ODM:** Mongoose  
- **Authentication:** Passport.js  
- **Session Management:** Express-session  
- **Flash Messages:** Connect-flash  

---

## 📂 Project Structure

```
StayScape/
│
├── models/
├── routes/
├── controllers/
├── views/
├── public/
├── middleware.js
├── app.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/stayscape.git
cd stayscape
```

### 2️⃣ Install dependencies

```bash
npm install
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

MAP_URL=https://nominatim.openstreetmap.org/search?format=json&limit=1
MAP_API=your_map_api_key
```

⚠️ Do not share your real API keys or secrets publicly.

### 4️⃣ Run the application

```bash
nodemon app.js
```

Server runs at:

```
http://localhost:8080
```

---

## 🚀 Future Improvements (Phase 2 – Rental & Move-in Platform)

StayScape will evolve into a complete **Rental Listings & Move-in Management Platform** with structured workflows and dashboards.

---

### 🏠 Tenant Side Features

#### 🔎 Property Discovery
- Browse listings with advanced filters:
  - Location (text search)
  - Budget range
  - Move-in date
- Detailed property page:
  - Image gallery
  - Amenities
  - House rules
  - Availability timeline

#### 📅 Visit Workflow
- Request property visit
- Track visit status:
  - **Requested → Scheduled → Visited → Decision**

#### ❤️ Shortlisting & Comparison
- Shortlist properties
- Compare 2–3 properties side-by-side

---

### 📋 Move-in Operations

#### ✅ Move-in Checklist
- Document uploads
- Rental agreement confirmation
- Inventory checklist
- Structured move-in workflow

#### 🎫 Support Ticket System
- Raise support tickets
- Threaded messaging system
- Track ticket status

#### ⏳ Stay Management
- Request stay extension
- Approval workflow for extension

---

### 🛠️ Admin Dashboard

#### 📑 Listing Management
- Review new listings
- Approve and publish listings
- Change listing status:
  - **Draft → Review → Published**

#### 🎟️ Support Management
- View and manage support tickets
- Respond via threaded conversation

---

### 🧠 Engineering Focus

- Dashboard-driven UI
- Proper schema relationships
- Workflow-based state management
- Role-based authorization (Tenant / Host / Admin)
- Clean REST API structure
- Scalable database design

---

StayScape aims to become a **complete rental lifecycle management system**, not just a listing platform.

---

## 📌 Author

Developed by **Agam**
