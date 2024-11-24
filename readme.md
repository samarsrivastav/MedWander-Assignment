# Full Stack Complaint Management System

This application allows both users and admins to manage complaints with email notifications for various actions. It includes separate panels for users to submit complaints and for admins to manage them.

## Features

### Admin Panel
- **Link**: [Admin Panel](https://med-wander-complaint-management.vercel.app)
    - JWT-based authentication for secure login.
    - Allows admins to view and manage complaints.
    - Admins can update the status of complaints.
    - Admins can delete complaints.
    - When a complaint's status is updated, an email notification is sent to the admin.

### User Panel
- **Link**: [User Panel](https://med-wander-complaint-submission.vercel.app)
    - JWT-based authentication for user login.
    - Includes a form for users to submit complaints.
    - When a complaint is submitted, an email notification is sent to the admin.

### Backend
- **Link**: [Backend](https://medwander-backend.vercel.app)
    - Implements a CRUD application for complaint management.
    - Sends email notifications on complaint creation or status updates.

## Setup Instructions

### Clone the Repository

Clone the main repository to get access to the user, admin, and backend applications:

```bash
git clone https://github.com/samarsrivastav/MedWander-Assignment
```

After cloning, you'll have three directories: `user`, `admin`, and `backend`.

### Frontend Setup

1. **User Panel**:
    - Navigate to the user directory:

    ```bash
    cd ./user
    ```

    - Install dependencies:

    ```bash
    npm install
    ```

    - Start the development server:

    ```bash
    npm run dev
    ```

2. **Admin Panel**:
    - Navigate to the admin directory:

    ```bash
    cd ./admin
    ```

    - Install dependencies:

    ```bash
    npm install
    ```

    - Start the development server:

    ```bash
    npm run dev
    ```

### Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd ./backend
    ```

2. **Setup `.env` file**:
    - Create a `.env` file and add the following environment variables:
        - The names used is shown in the ".env.example" file.
        - `MONGODB_URI`: Your MongoDB URI (You can get a MongoDB uri by following the guide [here](https://www.geeksforgeeks.org/how-to-install-mongodb-atlas/)).
        - `EMAIL`: Your email address for sending notifications.
        - `EMAIL_PASSWORD`: App-specific password for your email (follow the guide [here](https://stackoverflow.com/questions/33286691/gmail-smtp-requires-an-app-password)).
        - `JWT_SECRET`: A secret key for JWT authentication.

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the backend server**:

    ```bash
    npm run dev
    ```

### Configuration Notes [VERY IMPORTANT]

- **Change API Endpoints**: 
    - In the `admin` and `user` applications, modify the API calls to use `http://localhost:3000` if you're running the backend locally. 

