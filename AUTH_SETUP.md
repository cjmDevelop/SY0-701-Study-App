# Authentication Setup Guide

## Overview

This quiz app now has full authentication integrated with your Spring Boot auth-microservice backend. Users can sign up, login, and access all 800+ questions across all domains.

## Features Implemented

### Freemium Model
- **Free Users:** Can access Domain 1.0 random quizzes only
- **Authenticated Users:** Full access to all 5 domains (800+ questions)

### Authentication Pages
- `/login.html` - User login
- `/signup.html` - User registration
- `/verify-email.html` - Email verification with 6-digit code
- `/forgot-password.html` - Request password reset
- `/reset-password.html` - Reset password with code
- `/profile.html` - User profile and account management

### Protected Features
- Quiz Menu shows locks on domains 2-5 for non-authenticated users
- Sub-menu pages (domains 2-5) redirect non-authenticated users to signup
- Navigation dynamically shows Login/Signup OR user profile based on auth status

## Backend Setup (REQUIRED)

Your auth-microservice backend is already configured, but you need to:

### 1. Start the Backend Server

```bash
cd /Users/uncledoey/Desktop/auth-microservice
./mvnw spring-boot:run
```

The backend runs on `http://localhost:8080`

### 2. Verify CORS Configuration

Your backend already has CORS configured for:
- `http://localhost:3000`
- `http://localhost:5173`

**File:** `/Users/uncledoey/Desktop/auth-microservice/src/main/java/com/authservice/config/CorsConfig.java`

If you're running Vite on a different port, add it to the allowed origins:

```java
@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**")
            .allowedOrigins(
                "http://localhost:3000",
                "http://localhost:5173",
                "http://localhost:YOUR_PORT" // Add your Vite port here
            )
            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true);
}
```

### 3. Environment Variables

Ensure your backend's `.env` file has:
```
JWT_SECRET=your-secret-key
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password
RESEND_API_KEY=your-resend-api-key
RESEND_FROM_EMAIL=your-email
```

## Frontend Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Vite will start on `http://localhost:5173` (or another available port)

### 3. API Configuration

The frontend is configured to connect to the backend at:
```javascript
const API_BASE_URL = 'http://localhost:8080/api/auth';
```

**File:** `/src/scripts/auth.js` (line 7)

If your backend runs on a different port, update this URL.

## How It Works

### Authentication Flow

1. **Sign Up**
   - User fills out signup form
   - Backend creates user account
   - Backend sends 6-digit verification code via email
   - User redirected to verification page

2. **Email Verification**
   - User enters 6-digit code
   - Backend verifies code and activates account
   - User receives JWT access token (24hr) and refresh token (7 days)
   - Tokens stored in localStorage

3. **Login**
   - User enters email and password
   - Backend validates credentials
   - Returns JWT tokens if email is verified
   - User redirected to quiz menu

4. **Accessing Protected Content**
   - All API requests include `Authorization: Bearer <token>` header
   - Frontend auto-refreshes expired access tokens
   - User redirected to login if refresh token expires

### Token Management

- **Access Token:** 24 hours, used for all API requests
- **Refresh Token:** 7 days, used to get new access tokens
- **Auto-refresh:** Tokens refreshed 1 minute before expiry
- **Storage:** localStorage (keys: `accessToken`, `refreshToken`, `user`)

### Security Features

- Passwords hashed with BCrypt (strength 10)
- Email verification required before login
- JWT tokens signed with HS256
- 6-digit verification codes expire in 15 minutes
- Password reset codes expire in 15 minutes
- CORS protection
- CSRF disabled (safe for JWT in Authorization header)

## Testing the Integration

### 1. Test User Registration

1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173`
3. Click "Sign Up"
4. Fill out the form
5. Check your email for the verification code
6. Enter the code on the verification page
7. You should be redirected to the quiz menu with all domains unlocked

### 2. Test Freemium Model

1. Open the app without logging in
2. Go to Quiz Menu - domains 2-5 should have lock icons
3. Try clicking on a locked domain - you'll be redirected to signup
4. Login and verify all domains are accessible

### 3. Test Profile Page

1. Login
2. Click on your name in the navigation
3. Select "Profile"
4. Verify your user information displays correctly
5. Test the logout button

## Troubleshooting

### Backend Not Running
**Error:** `Failed to fetch` or connection refused

**Solution:** Start the backend server:
```bash
cd /Users/uncledoey/Desktop/auth-microservice
./mvnw spring-boot:run
```

### CORS Errors
**Error:** `Access to fetch blocked by CORS policy`

**Solution:** Add your frontend URL to CORS config in backend:
- File: `/src/main/java/com/authservice/config/CorsConfig.java`
- Add your URL to `allowedOrigins`

### Email Not Received
**Error:** Verification email not arriving

**Solution:**
1. Check backend logs for email sending errors
2. Verify `RESEND_API_KEY` is set in backend `.env`
3. Check spam/junk folder
4. Use the "Resend Code" button

### Token Expired
**Error:** User logged out unexpectedly

**Solution:** This is normal - tokens expire after 24 hours. User needs to login again.

### Database Connection Failed
**Error:** `Connection to localhost:5432 refused`

**Solution:** Start PostgreSQL database:
```bash
brew services start postgresql
# or
docker start postgres-container
```

## Production Deployment

### Frontend
1. Build the app: `npm run build`
2. Deploy the `dist/` folder to:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting

### Backend
1. Update CORS to allow production frontend URL
2. Set production environment variables
3. Deploy to:
   - Railway
   - Heroku
   - AWS EC2
   - DigitalOcean

### Update API URL
After deploying backend, update frontend API URL:
```javascript
// src/scripts/auth.js
const API_BASE_URL = 'https://your-backend-domain.com/api/auth';
```

## File Structure

```
CyberSecurity-QuizApp-SY0-701/
├── login.html              # Login page
├── signup.html             # Signup page
├── verify-email.html       # Email verification
├── forgot-password.html    # Request password reset
├── reset-password.html     # Reset password
├── profile.html            # User profile
├── src/
│   ├── scripts/
│   │   ├── auth.js        # Authentication service (API calls)
│   │   └── navigation.js  # Navigation utility
│   └── styles/
│       └── auth.css       # Authentication page styles
└── AUTH_SETUP.md          # This file
```

## API Endpoints Used

### Public Endpoints (No Auth Required)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/verify-email` - Verify email with code
- `POST /api/auth/resend-verification-email` - Resend verification code
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/verify-reset-code` - Verify reset code
- `POST /api/auth/reset-password` - Reset password
- `POST /api/auth/resend-reset-code` - Resend reset code

### Protected Endpoints (Auth Required)
- `DELETE /api/auth/account` - Delete user account
- `GET /api/auth/account/can-delete` - Check deletion eligibility

## Next Steps

### Recommended Enhancements

1. **Quiz Progress Tracking**
   - Save user's quiz scores to backend
   - Track completed questions
   - Show progress dashboard

2. **Quiz History**
   - Store quiz attempts with scores
   - Allow users to review past quizzes
   - Display statistics and analytics

3. **Leaderboards**
   - Add global leaderboard
   - Compare scores with other users
   - Achievement badges

4. **Social Features**
   - Share quiz results
   - Challenge friends
   - Study groups

5. **Email Preferences**
   - Weekly progress reports
   - Study reminders
   - New content notifications

## Support

For issues with:
- **Authentication:** Check backend logs at `/Users/uncledoey/Desktop/auth-microservice/logs`
- **Frontend:** Check browser console for errors
- **Database:** Verify PostgreSQL is running and connection string is correct

Happy studying! 🎓🔐
