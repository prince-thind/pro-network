# List of API endpoints

### Authentication and Authorization

- [x] **POST** `/api/auth/register` - `authController.register`: User registration
- [x] **POST** `/api/auth/login` - `authController.login`: User login
- [ ] **POST** `/api/auth/refresh-token` - `authController.refreshToken`: Refresh JWT token
- [ ] **GET** `/api/auth/verify-email` - `authController.verifyEmail`: Verify user email
- [ ] **POST** `/api/auth/reset-password` - `authController.resetPassword`: Reset password

### User Management

- [ ] **GET** `/api/users/profile` - `userController.getUserProfile`: Get user profile
- [ ] **PUT** `/api/users/profile` - `userController.updateUserProfile`: Update user profile
- [ ] **POST** `/api/users/profile-picture` - `userController.uploadProfilePicture`: Upload profile picture
- [ ] **PUT** `/api/users/privacy-settings` - `userController.updatePrivacySettings`: Update user privacy settings
- [ ] **POST** `/api/users/connections` - `userController.connectUser`: Send connection request
- [ ] **GET** `/api/users/connections` - `userController.getUserConnections`: Get user connections
- [ ] **PUT** `/api/users/connections/:id` - `userController.manageConnectionRequest`: Manage connection requests
- [ ] **POST** `/api/users/block` - `userController.blockUser`: Block user
- [ ] **POST** `/api/users/report` - `userController.reportUser`: Report user

### Posts and Interactions

- [ ] **POST** `/api/posts` - `postController.createPost`: Create a new post
- [ ] **GET** `/api/posts` - `postController.getAllPosts`: Get all posts
- [ ] **GET** `/api/posts/:id` - `postController.getPostById`: Get post by ID
- [ ] **PUT** `/api/posts/:id` - `postController.editPost`: Edit a post
- [ ] **DELETE** `/api/posts/:id` - `postController.deletePost`: Delete a post
- [ ] **POST** `/api/posts/:id/like` - `postInteractionController.likePost`: Like a post
- [ ] **POST** `/api/posts/:id/unlike` - `postInteractionController.unlikePost`: Unlike a post
- [ ] **POST** `/api/posts/:id/comment` - `commentController.addComment`: Add a comment
- [ ] **GET** `/api/posts/:id/comments` - `commentController.getComments`: Get comments for a post
- [ ] **DELETE** `/api/posts/:id/comment/:commentId` - `commentController.deleteComment`: Delete a comment
- [ ] **POST** `/api/posts/:id/share` - `postController.sharePost`: Share a post
- [ ] **POST** `/api/posts/:id/save` - `postController.savePost`: Save a post
- [ ] **GET** `/api/posts/search` - `postController.searchPosts`: Search posts by tags/keywords

### Notifications

- [ ] **GET** `/api/notifications` - `notificationController.getNotifications`: Get notifications
- [ ] **PUT** `/api/notifications/:id/read` - `notificationController.markAsRead`: Mark notification as read
- [ ] **POST** `/api/notifications/likes` - `notificationController.generateLikeNotification`: Generate notification for likes
- [ ] **POST** `/api/notifications/connections` - `notificationController.generateConnectionNotification`: Generate notification for connection requests

### Messaging

- [ ] **POST** `/api/messages` - `messageController.sendMessage`: Send a direct message
- [ ] **GET** `/api/messages/conversations` - `messageController.getConversations`: Get user conversations

### Search and Explore

- [ ] **GET** `/api/search/users` - `searchController.searchUsers`: Search users
- [ ] **GET** `/api/search/posts` - `searchController.searchPosts`: Search posts
- [ ] **GET** `/api/search/trending-users` - `searchController.getTrendingUsers`: Get trending users
- [ ] **GET** `/api/search/trending-posts` - `searchController.getTrendingPosts`: Get trending posts

### Job Listings

- [ ] **POST** `/api/jobs` - `jobController.postJob`: Post a job listing
- [ ] **GET** `/api/jobs` - `jobController.getJobs`: Get all job listings
- [ ] **POST** `/api/jobs/:id/apply` - `jobController.applyForJob`: Apply for a job
- [ ] **POST** `/api/jobs/:id/save` - `jobController.saveJob`: Save a job listing
- [ ] **GET** `/api/jobs/search` - `jobController.searchJobs`: Search job listings

### Admin Panel

- [ ] **PUT** `/api/admin/users/:id/ban` - `adminController.banUser`: Ban a user
- [ ] **PUT** `/api/admin/users/:id/unban` - `adminController.unbanUser`: Unban a user
- [ ] **GET** `/api/admin/flagged-content` - `adminController.getFlaggedContent`: Get flagged posts/comments
- [ ] **GET** `/api/admin/analytics` - `adminController.getAnalytics`: Get platform analytics