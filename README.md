# Pro-Network

This is the initial setup for the Pro-Network project. It includes a backend and frontend directory.

## Functional Requirements

## Backend To-Do List

This is an exhaustive to-do list for the backend development of our project. The goal is to create a robust backend system that supports all the features expected in a professional social network like LinkedIn.

### Authentication and Authorization

- [x] User Registration
- [x] User Login
- [x] JWT Token Generation
- [x] Middleware for Protecting Routes
- [ ] Implement Refresh Tokens
- [ ] Two-Factor Authentication
- [ ] Email Verification during Registration
- [ ] Password Reset Functionality

### User Management

- [x] Get User Profile
- [x] Update User Profile
- [x] Upload Profile Picture
- [ ] User Privacy Settings
- [ ] User Connection (Follow/Unfollow, Connect)
- [ ] Manage User Connections (Accept/Reject Connection Requests)
- [ ] Block/Report Users

### Posts and Interactions

- [x] Create Post
- [x] Get All Posts
- [x] Get Post by ID
- [x] Like/Dislike Posts
- [x] Add/Remove Comments
- [x] Get Comments for a Post
- [ ] Edit/Delete Posts
- [ ] Share Posts
- [ ] Save Posts (Bookmarks)
- [ ] Search Posts by Tags/Keywords

### Notifications

- [x] Generate Notifications for Comments
- [ ] Generate Notifications for Likes
- [ ] Generate Notifications for Connection Requests
- [ ] Mark Notifications as Read
- [ ] Real-Time Notifications using WebSockets (Socket.io)

### Messaging

- [ ] Send Direct Messages
- [ ] Get User Conversations
- [ ] Real-Time Messaging using WebSockets (Socket.io)
- [ ] Group Messaging

### Search and Explore

- [x] Search Users
- [x] Search Posts
- [x] Get Trending Users
- [x] Get Trending Posts
- [ ] Advanced Search Filters (Location, Industry, Experience)
- [ ] Explore Page for Users and Posts

### Job Listings

- [ ] Post Job Listings
- [ ] Apply for Jobs
- [ ] Save Job Listings
- [ ] Search Job Listings
- [ ] Manage Job Applications

### User Activity and Analytics

- [ ] Track User Activity (Posts, Comments, Likes)
- [ ] User Engagement Analytics
- [ ] Post and Profile Views Analytics

### Admin Panel

- [ ] User Management (Ban/Unban Users)
- [ ] Content Moderation (Flagged Posts, Comments)
- [ ] Analytics Dashboard
- [ ] Manage Job Listings

### Security and Performance

- [ ] Input Validation and Sanitization
- [ ] Rate Limiting and Throttling
- [ ] Data Encryption
- [ ] Regular Security Audits
- [ ] Load Testing and Optimization

### Testing and Documentation

- [ ] Unit Tests for Controllers and Models
- [ ] Integration Tests for Routes
- [ ] API Documentation (Swagger/OpenAPI)
- [ ] End-to-End Tests

## Frontend To-Do List

This to-do list outlines the features and improvements needed for the frontend development of our project, ensuring a seamless user experience.

### Core Features

1. **Authentication:**

   - [ ] User Registration Form
   - [ ] User Login Form
   - [ ] Implement JWT Token Handling (save token in local storage)
   - [ ] Add Password Reset Functionality
   - [ ] Add Email Verification Process

2. **User Profile:**

   - [ ] Display User Profile
   - [ ] Edit User Profile Form
   - [ ] Upload Profile Picture
   - [ ] Display User Connections (Followers/Following)
   - [ ] Manage Privacy Settings

3. **Posts and Interactions:**

   - [ ] Display User Posts in Feed
   - [ ] Create New Post Form
   - [ ] Like/Dislike Posts
   - [ ] Comment on Posts
   - [ ] Edit/Delete Posts
   - [ ] Share Posts
   - [ ] Save Posts (Bookmarks)
   - [ ] Display Post Details (single post view)

4. **Notifications:**

   - [ ] Display Notifications List
   - [ ] Real-Time Notifications (using WebSockets or similar)
   - [ ] Mark Notifications as Read

5. **Messaging:**

   - [ ] Display User Conversations
   - [ ] Send and Receive Messages
   - [ ] Real-Time Messaging (using WebSockets or similar)
   - [ ] Group Messaging

6. **Search and Explore:**

   - [ ] Search Users
   - [ ] Search Posts
   - [ ] Display Trending Users
   - [ ] Display Trending Posts
   - [ ] Advanced Search Filters (Location, Industry, Experience)

7. **Job Listings:**

   - [ ] Display Job Listings
   - [ ] Post Job Listings
   - [ ] Apply for Jobs
   - [ ] Save Job Listings
   - [ ] Manage Job Applications

8. **User Activity and Analytics:**

   - [ ] Track User Activity (Posts, Comments, Likes)
   - [ ] Display User Engagement Analytics
   - [ ] Display Post and Profile Views Analytics

9. **Admin Panel:**

   - [ ] Manage Users (Ban/Unban)
   - [ ] Content Moderation (Flagged Posts, Comments)
   - [ ] Display Analytics Dashboard
   - [ ] Manage Job Listings

10. **Testing and Documentation:**
    - [ ] Write Unit Tests for Components
    - [ ] Write Integration Tests for Pages
    - [ ] Write End-to-End Tests (using tools like Cypress)
    - [ ] Document Components and Pages (using Storybook)

# Planned Strucutre of the frontend

```
/frontend
├── /public
│   ├── /images
│   ├── favicon.ico
│   └── index.html
├── /src
│   ├── /assets
│   │   ├── /fonts
│   │   └── /images
│   ├── /components
│   │   ├── /common
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Spinner.tsx
│   │   ├── /layout
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Container.tsx
│   │   ├── /forms
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── ProfileForm.tsx
│   │   ├── /posts
│   │   │   ├── Post.tsx
│   │   │   ├── PostList.tsx
│   │   │   └── PostDetails.tsx
│   │   ├── /notifications
│   │   │   ├── Notification.tsx
│   │   │   └── NotificationList.tsx
│   │   └── /ui
│   │       ├── Card.tsx
│   │       ├── Avatar.tsx
│   │       ├── Dropdown.tsx
│   │       └── Tooltip.tsx
│   ├── /contexts
│   │   ├── AuthContext.tsx
│   │   └── ThemeContext.tsx
│   ├── /hooks
│   │   ├── useAuth.ts
│   │   ├── useFetch.ts
│   │   ├── useTheme.ts
│   │   └── useWindowSize.ts
│   ├── /layouts
│   │   ├── AuthLayout.tsx
│   │   ├── DashboardLayout.tsx
│   │   └── MainLayout.tsx
│   ├── /modules
│   │   ├── /auth
│   │   │   ├── components
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── ForgotPasswordForm.tsx
│   │   │   ├── pages
│   │   │   │   ├── login.tsx
│   │   │   │   ├── register.tsx
│   │   │   │   └── forgot-password.tsx
│   │   │   └── /services
│   │   │       └── authService.ts
│   │   ├── /posts
│   │   │   ├── components
│   │   │   │   ├── PostList.tsx
│   │   │   │   └── PostDetails.tsx
│   │   │   ├── pages
│   │   │   │   ├── index.tsx
│   │   │   │   └── [postId].tsx
│   │   │   └── /services
│   │   │       └── postService.ts
│   │   ├── /notifications
│   │   │   ├── components
│   │   │   │   ├── NotificationList.tsx
│   │   │   │   └── NotificationItem.tsx
│   │   │   ├── pages
│   │   │   │   └── index.tsx
│   │   │   └── /services
│   │   │       └── notificationService.ts
│   │   └── /profile
│   │       ├── components
│   │       │   ├── ProfileForm.tsx
│   │       │   ├── ProfileDetails.tsx
│   │       │   └── ProfilePicture.tsx
│   │       ├── pages
│   │       │   ├── index.tsx
│   │       │   └── edit.tsx
│   │       └── /services
│   │           └── profileService.ts
│   ├── /pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   └── 404.tsx
│   ├── /services
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── httpClient.ts
│   ├── /store
│   │   ├── store.ts
│   │   ├── authSlice.ts
│   │   ├── postSlice.ts
│   │   ├── notificationSlice.ts
│   │   └── profileSlice.ts
│   ├── /styles
│   │   ├── GlobalStyles.ts
│   │   ├── themes.ts
│   │   └── mixins.ts
│   ├── /utils
│   │   ├── helpers.ts
│   │   └── constants.ts
│   ├── /types
│   │   ├── index.d.ts
│   │   ├── auth.d.ts
│   │   ├── post.d.ts
│   │   ├── notification.d.ts
│   │   └── profile.d.ts
│   └── index.tsx
├── .env
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
└── README.md

```

## .env Structure for Backend

Ensure your .env file contains the following environment variables:

````plaintext
# .env file structure

# MongoDB URI
MONGO_URI=your_mongodb_uri

# JWT Secret
JWT_SECRET=your_jwt_secret

# Port for the server to run on
PORT=your_port_number


## Getting Started

To get started with the project, follow these steps:

1. Clone the repository
   ```bash
   git clone git@github.com:prince-thind/pro-network.git
````

2. Navigate to the project directory
   ```bash
   cd pro-network
   ```
3. Follow the instructions in the `backend` and `frontend` directories to set up the respective environments.
