# 🎓 College Event Hub

> A full-stack web application that helps students discover, explore, and participate in college events while providing administrators with powerful event management tools.

## 🌐 Live Demo

🔗 **Live Application:** https://college-event-hub-jgjf.onrender.com/

---

## 📖 Overview

College Event Hub serves as a centralized platform for managing and exploring college events. Students can browse upcoming events, view detailed information, and share feedback, while administrators can efficiently create, update, and manage event listings.

---

## ✨ Features

### 👨‍🎓 Student Features

* User Registration & Login
* Browse Available Events
* View Detailed Event Information
* Submit Reviews and Feedback
* Responsive User Experience Across Devices

### 👨‍💼 Admin Features

* Create New Events
* Edit Existing Events
* Delete Events
* Manage Event Details
* Monitor User Reviews

### 🔐 Security & Access Control

* Secure Authentication using Passport.js
* Session-Based Login Management
* Protected Routes
* Role-Based Authorization (Admin & User)
* Input Validation & Error Handling

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js (Local Strategy)
* Express Session

### Additional Tools & Libraries

* Cloudinary (Image Storage)
* Multer (File Uploads)
* Joi (Validation)
* Method-Override
* Connect-Flash

---

## 🔒 Security Features

* Password Authentication with Passport.js
* Protected Application Routes
* Role-Based Authorization
* Server-Side Input Validation
* Centralized Error Handling Middleware
* Secure Session Management

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

* Desktop Devices
* Tablets
* Mobile Phones

---

## 🚀 Future Enhancements

* 🔔 Real-Time Event Notifications
* 🎟️ Event Registration System

---
## ⚙️ Local Setup

Follow the steps below to run College Event Hub locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Ashra-Ansari/college-event-hub.git
cd college-event-hub
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

ATLASDB_URL=your_mongodb_atlas_connection_string

SECRET=your_session_secret
```

> ⚠️ Never commit the `.env` file or expose your MongoDB, Cloudinary, or session credentials publicly.

### 4. Start the Application

Run the application using:

```bash
node app.js
```

The application will start on the port configured in `app.js`.
