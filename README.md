# Book Review App  

A full-stack web application for users to log in, write book reviews, and manage them. 
Built with **React, Express, PostgreSQL, and JWT authentication**.

## Features  
- **User Authentication** (JWT-based login/registration with hashed passwords)  
- **CRUD Operations** (Create, Read, Update, Delete book reviews)  
- **Secure Authorization** (Protected routes using JWT middleware)  
- **Database Storage** (PostgreSQL hosted on Render)  
- **Dynamic UI** (React-based frontend with real-time updates)  
- **Seamless User Experience** (Modal-based login/register, intuitive review editing)  

## Tech Stack  
| **Technology**  | **Usage** |
|----------------|----------|
| **Frontend**   | React, useState/useEffect |
| **Backend**    | Express, Node.js |
| **Database**   | PostgreSQL (hosted on Render) |
| **Authentication** | JWT (JSON Web Token) |
| **Hosting** | Render (Backend, Frontend, Database) |

## Authentication & Security  
- **Passwords are hashed** using bcrypt before being stored in the database  
- **JWT is used for authentication**, ensuring only logged-in users can access certain pages  
- **Middleware verifies tokens** and restricts unauthorized access to API routes  

## Project Structure  
/Novel-Notes (Frontend)
  ├── public/          # .jpg files
  ├── src/
      ├── assests/     # .png files
      ├── components/  # Reusable React components
      ├── pages/       # Page components
      ├── App.jsx      # Main App component
      ├── main.jsx     # React entry point

/Backend
  ├── Routes/
      ├── authRoutes.js  # Handles login & registration
      ├── userRoutes.js  # Handles user actions (profile, reviews)
  ├── Middleware/
      ├── authMiddleware.js  # JWT authentication middleware
  ├── server.js  # Express server setup

## API Endpoints  
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| **POST** | `/auth/register` | Register new user | ❌ |
| **POST** | `/auth/login` | Log in user, return JWT | ❌ |
| **GET** | `/user/user-profile` | Fetch user details | ✅ |
| **GET** | `/user/user-reviews` | Get user’s book reviews | ✅ |
| **POST** | `/user/add-review` | Add a new book review | ✅ |
| **GET** | `/user/reviews/:id` | Get a specific review | ✅ |
| **PUT** | `/user/edit-review/:id` | Edit a review | ✅ |
| **DELETE** | `/user/delete-review/:id` | Delete a review | ✅ |
| **DELETE** | `/user/delete` | Delete user account | ✅ |

## How the App Works  
1. **Landing Page:** Users see the homepage with options to log in or register.  
2. **Authentication:** Users sign up or log in (passwords are securely hashed & stored).  
3. **User Dashboard:** Once logged in, the navbar updates (adds "my profile" link), and users are redirected to new homepage where they can see their reviews.  
4. **Review Management:** Users can:  
   - View **all their reviews** (fetched from PostgreSQL)  
   - **Edit a review** (data preloaded into the form for easy modification)  
   - **Delete a review** (removes it from the database)  
   - **Add a new review** (saved to the database & displayed dynamically)  
5. **User Profile:** Users can log out or delete their account (which removes all associated reviews and their account).  

## Setup & Installation  
1. **Clone the repository:**  
   git clone https://github.com/your-username/book-review-app.git
   cd book-review-app
2. **Install dependencies:**  
   npm install
3. **Set up environmental variables (in .env file):**
   DATABASE_URL=<your_render_postgres_url>
   JWT_SECRET=<your_jwt_secret>
4. **Start the frontend:**
   npm run dev
5. **Start the backend:**
   npm start
6. **Open App in browser:**
   http://localhost:5173  # Default Vite port
