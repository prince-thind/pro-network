# Planned Strucutre of the project

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
