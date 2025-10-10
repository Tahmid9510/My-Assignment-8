# 📱 AppHub

AppHub is a feature-rich, single-page web application that simulates a modern app store. Users can browse, search, and manage a curated list of applications. The project focuses on a clean user interface, responsive design, and dynamic user interactions, including local storage for persisting the user's installed apps.

---

## ## ✨ Key Features

### ### 🧱 General & Layout
- **Responsive Design**: A fully responsive layout with a persistent Header and a custom-designed Footer.
- **Header Navigation**: Includes a clickable logo for home navigation and a navigation bar (`Home`, `Apps`, `My Installation`) with active route styling.
- **Contribution Link**: A "Contribution" button links directly to the developer's GitHub profile.

### ### 🏠 Home Page
- **Banner**: An engaging, center-aligned banner with call-to-action buttons.
- **Stats Section**: An informative section displaying key statistics with unique styling.
- **Top Apps**: A curated showcase of top applications, with a "Show All" button that navigates to the complete app list.

### ### 📱 All Apps Page
- **Live Search**: A powerful, case-insensitive live search bar to filter apps by title as the user types.
- **App Grid**: Displays all available applications in a clean, easy-to-browse grid.
- **Feedback**: Shows the total app count and displays a "No App Found" message for empty search results.

### ### 📊 App Details Page
- **Detailed View**: A comprehensive page showing an app's image, title, average rating, total downloads, and reviews.
- **Review Chart**: An interactive and responsive bar chart, built with **Recharts**, to visualize the app's rating distribution.
- **Install Functionality**: An "Install" button that becomes disabled ("Installed") on click and triggers a success toast notification.

### ### ⭐ My Installation Page 
- **Personalized List**: A dedicated page displaying all apps the user has installed.
- **LocalStorage Persistence**: Uses the browser's **LocalStorage** to save and manage the user's installed apps, ensuring data persists across sessions.
- **Uninstall an App**: Each app card has an "Uninstall" button that removes the app from the UI and LocalStorage, confirmed with a toast message.
- **Sorting**: A dropdown menu allows users to sort their installed apps by download count in both ascending (Low-High) and descending (High-Low) order.

### ### 🚀 User Experience
- **Custom Error Page**: A user-friendly 404 page for invalid routes.
- **Loading Animations**: Smooth loading spinners are shown during page navigation and search operations to enhance user experience.
- **Toast Notifications**: Non-intrusive feedback for actions like installing or uninstalling an app.

---

## ## 🛠️ Technologies Used
- **React**: For building a fast and scalable component-based user interface.
- **React Router**: For handling client-side routing, navigation, and nested routes.
- **Recharts**: For creating beautiful and responsive data visualization charts.
- **Tailwind CSS**: For utility-first styling and rapid, responsive UI development.
- **React Toastify**: For displaying user-friendly and customizable toast notifications.
- **LocalStorage API**: For persisting the user's installed apps on the client-side.

---

## ## 📄 Data Structure

The application's data is structured as a JSON array of objects. Each object represents an app and follows this format:

```json
{
  "image": "string",
  "title": "string",
  "companyName": "string",
  "id": "number",
  "description": "string",
  "size": "number",
  "reviews": "number",
  "ratingAvg": "number",
  "downloads": "number",
  "ratings": [
    { "name": "1 star", "count": "number" },
    { "name": "2 star", "count": "number" },
    { "name": "3 star", "count": "number" },
    { "name": "4 star", "count": "number" },
    { "name": "5 star", "count": "number" }
  ]
}
```