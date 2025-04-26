# Nigerian Passport Application Helper

A web application to help Nigerians apply for passports independently by providing step-by-step guidance, document validation, and appointment management.

## Project Structure

```
passport-helper/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── pages/        # Page components
│       ├── services/     # API services
│       ├── utils/        # Helper functions
│       ├── context/      # React context
│       ├── hooks/        # Custom hooks
│       ├── styles/       # CSS/SCSS files
│       └── assets/       # Images, fonts, etc.
│
├── server/                # Node.js/Express backend
│   ├── src/
│       ├── config/       # Configuration files
│       ├── controllers/  # Route controllers
│       ├── middleware/   # Custom middleware
│       ├── models/       # Database models
│       ├── routes/       # API routes
│       ├── services/     # Business logic
│       ├── utils/        # Helper functions
│       └── validators/   # Input validation
│   ├── tests/           # Backend tests
│   └── uploads/         # File upload directory
│
└── docs/                 # Documentation
```

## Tech Stack

- **Frontend:** React + Bootstrap
- **Backend:** Node.js (Express)
- **Database:** PostgreSQL
- **Authentication:** JWT
- **File Storage:** Local storage (can be upgraded to cloud storage)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Backend Setup

1. Navigate to server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   DATABASE_URL=postgresql://username:password@localhost:5432/passport_helper
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Features

- Step-by-step passport application guidance
- Document validation
- Appointment reminders
- Corruption incident reporting
- Office reviews and ratings

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT 