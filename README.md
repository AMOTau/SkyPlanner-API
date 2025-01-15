# SkyPlanner-API

This is a Node.js-based API for managing users and their activities. The application includes features like user registration, login, profile management, favorite management, and activity management. It uses MongoDB as its database and JWT for authentication.

## Features
#### User Management:

- Register a new user.
- Login with credentials.
- Get user profile.
- Add, view, and delete favorite destinations.

#### Activity Management:

- Add a single activity.
- Bulk add activities.
- View all activities.


## Prerequisites
- Node.js installed on your system.
- MongoDB server or MongoDB Atlas for the database.
- Postman for testing the API.

## Installation

1. Clone the repository:
```bash
    git clone https://github.com/AMOTau/SkyPlanner-API.git
```

2. Navigate to the project folder:
```bash
    cd SkyPlanner-API
```

3. Switch to the dev branch: 
```bash
    git checkout dev
```

4. Install dependencies:
```bash
    npm install
```

5. Create a .env file in the root of the project and add the following:
```bash
    PORT=3000
    MONGODB_URI=<Your MongoDB Connection String>
    JWT_SECRET=<Your Secret Key>
```

6. Start the server: 
```bash
    npx nodemon server.js
```

The server will run on http://localhost:3000.

## API Endpoints

#### User Routes
1. Register User: 
- POST /api/users/register
```bash
    {
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "StrongPass123!"
    }
```

2. Login User: 
- POST /api/users/login
```bash
    {
  "email": "john.doe@example.com",
  "password": "StrongPass123!"
    }
```

3. Get User Profile
- GET /api/users/profile

- Headers:

- - Authorization: Bearer <JWT Token>

4. Add Favourite
- POST /api/users/favorites

- Headers:

- - Authorization: Bearer <JWT Token>

```bash
    {
  "locationName": "Paris",
  "id": "12345"
    }
```

5. Get Favorites
- GET /api/users/favorites

- Headers:

- - Authorization: Bearer <JWT Token>

6. Delete Favorite
- DELETE /api/users/favorites/:id

- Headers:

- - Authorization: Bearer <JWT Token>

#### Activity Routes

1. Add Activity
- POST /api/activities
```bash
    {
  "condition": "Sunny",
  "activity": "Go for a hike"
    }
```

2. Bulk Add Activities
- POST /api/activities/bulk
```bash
    [
  {
    "condition": "Sunny",
    "activity": "Go for a hike"
  },
  {
    "condition": "Rainy",
    "activity": "Read a book"
  }
]
```

3. Get Activities
- GET /api/activities

## For frontend
  - Code: https://github.com/IKcracker/SkyPlanner.git
  - APK: https://expo.dev/accounts/alicia02/projects/SkyPlanner/builds/893b121c-9fc6-430e-9982-ed8be64681e6
  
