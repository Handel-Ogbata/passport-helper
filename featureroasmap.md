# Passport Application Helper - MVP Roadmap

This document outlines the **feature roadmap** and **tech stack** for a basic MVP of the web app.

---

## 🔢 Tech Stack

- **Frontend:** React + Bootstrap (for fast UI development)
- **Backend:** Node.js (Express framework)
- **Database:** PostgreSQL
- **Hosting/Deployment:**
  - Vercel / Netlify (Frontend)
  - Render / Railway / DigitalOcean (Backend + DB)


---

## 🚀 MVP Core Features

### 1. Guided Application Tracker
- Step-by-step checklist based on official NIS application process.
- Each step includes instructions, deep links to NIS portal, and success checkmarks.

### 2. Document Validator
- Simple form to pre-validate uploaded documents (format, size, type).
- NIN and Passport Photo validator (basic format checks).

### 3. Appointment Reminder System
- Users input appointment date & location.
- Receive email and in-app reminders 2 days and 1 day before appointment.

### 4. Corruption Incident Reporter
- Report form with fields:
  - Incident description
  - Optional photo/audio evidence upload
  - Office location (dropdown list)
- Anonymity toggle
- Submissions stored in database (for future aggregation)

### 5. Office Reviews
- Users can rate passport offices after their appointment:
  - 1-5 star rating
  - Short comment
- Basic display of average ratings per office.


---

## 📊 Database Tables (PostgreSQL)

- **Users**
  - id
  - email
  - password (hashed)
  - name (optional)

- **Applications**
  - id
  - user_id
  - current_step
  - appointment_date
  - office_location

- **Incidents**
  - id
  - user_id (nullable if anonymous)
  - office_location
  - description
  - evidence_url (optional)
  - created_at

- **OfficeReviews**
  - id
  - user_id
  - office_location
  - rating (1-5)
  - comment
  - created_at

---

## 📕 Suggested User Flow

1. User signs up / logs in.
2. User sees application checklist and guidance.
3. User fills and validates documents.
4. User sets appointment reminder.
5. After appointment, user reports any issues or submits a review.


---

## 🛋️ Stretch Goals (Post-MVP)

- SMS appointment reminders.
- Office heatmap (corruption and service rating).
- Progress sync via browser extension.
- Public corruption reports dashboard.


---

# End of MVP Roadmap

---

*Document created: April 26, 2025*
