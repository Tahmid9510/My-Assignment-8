🚀 App Name: AppHub – Your Ultimate App Store
🧾 Description
AppHub is a modern React-based web application that simulates a fully functional App Store experience.
Users can browse, search, install, and manage applications — all powered by dynamic local storage and smooth UI transitions.
This project focuses on frontend design, interactivity, data visualization, and state management using modern React concepts.
🧱 Layout & Data Design
🧩 Header
Includes a logo (clickable → navigates to Home page).
A navigation bar with active route highlighting:
🏠 Home
📱 Apps
⚙️ Installation
A Contribution button (Figma) linking to the developer’s GitHub profile.
⚙️ Footer
Custom-designed with creative layout and branding elements.
🏠 Home Page
🖼️ Banner Section
Center-aligned title, description, and two buttons:
App Store → redirects to app store
Play Store → redirects to play store
📊 States Section
Contains 3 state cards, each with unique style & title.
🔝 Top Apps Section
Displays 8 apps in a 4-column layout.
Each card shows:
App Title
Image
Downloads
Average Rating
Clicking a card → App Details Page
Includes a “Show All” button → navigates to All Apps page.
📱 All Apps Page
Title and subtitle following Figma layout.
Displays total app count and search bar side by side.
Live Search: filters apps dynamically (case-insensitive).
If no app matches → shows “No App Found”.
Displays all app cards with:
Image
Title
Downloads
Rating
Clicking a card → navigates to App Details Page.
📊 App Details Page
Shows App Image, Title, Rating, Downloads, Reviews.
Includes an Install Button:
On click → becomes disabled and text changes to “Installed”.
Shows a success toast message.
Displays a Review Chart using Recharts (responsive bar chart).
Shows detailed App Description.
⚠️ Error Page & Others
Custom Error Page for invalid routes.
Displays Loading Animation during:
Page navigation
Searching
“App Not Found” message when invalid app ID is entered.
Supports route reloading without breaking.
💾 LocalStorage Features
✅ App Installation
When “Install” is clicked:
Saves the app to localStorage.
If already installed → button stays disabled with “Installed”.
Shows a success toast.
⚙️ My Installation Page
Displays all installed apps.
Each app card includes:
Uninstall button → removes from UI and localStorage.
Shows a toast notification after uninstalling.
Includes a Sort by Downloads dropdown:
High–Low → sort ascending
Low–High → sort descending
🌀 Loading Animation
Shown during:
Page navigation
Search operations
🧰 Technologies Used
React.js – UI and state management
React Router DOM – Routing and navigation
Tailwind CSS – Styling and responsiveness
Recharts – Data visualization (bar charts)
React Toastify – Toast notifications
LocalStorage API – Persistent app installation tracking
👨‍💻 Developer
Developed by: Tahmid Hasan