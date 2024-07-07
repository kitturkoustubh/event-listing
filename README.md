Certainly! Here is the text content that combines all the information from the README.md into a single text file:

---

Event Listing Application

Welcome to the Event Listing Application prototype! This application allows users to sign up, sign in, view upcoming events, and create new events.

Table of Contents:

1. Features
2. Setup
3. Usage
4. Technologies Used
5. Folder Structure
6. Contributing
7. License

---

Features:

- Sign-Up: Users can create an account using their first name, last name, email, and password.
- Sign-In: Registered users can log in using their email and password.
- Home Screen: Displays a list of upcoming events with options to view event details or create a new event.
- Event Listing: Shows a grid of events with title, image, short information, and a link to read more.
- Event Detail: Provides detailed information about a selected event, including date, time, location, and description.
- Create/Edit Event: Allows users to enter details for a new event or edit an existing one.

---

Setup:

To run the Event Listing Application prototype locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd event-listing-app
   ```

2. Install dependencies:
   Ensure you have Node.js and npm installed on your machine.
   ```
   npm install
   ```

3. Run the application:
   Start a local development server to view the application.
   ```
   npm start
   ```
   The application will be available at http://localhost:3000 by default.

---

Usage:

- Sign-Up: Navigate to signup.html in your browser to create a new account.
- Sign-In: Visit signin.html to log in with your registered email and password.
- Home Screen: Access index.html to view upcoming events and create new events.
- Event Listing: Open event_listing.html to see all listed events.
- Event Detail: Click on an event title in event_listing.html to view its details in event_detail.html.
- Create/Edit Event: Use create_event.html to add a new event or edit existing event details.

---

Technologies Used:

- HTML5
- CSS3 (Bootstrap, Bootswatch)
- JavaScript (jQuery)
- Bootstrap Icons
- Font Awesome Icons

---

Folder Structure:

event-listing-app/
|
├── css/
│   ├── bootstrap.min.css
│   ├── bootswatch.min.css
│   └── styles.css
│
├── images/
│   └── event_image.jpg
│
├── js/
│   └── scripts.js
│
├── index.html
├── signup.html
├── signin.html
├── event_listing.html
├── event_detail.html
└── create_event.html

---

Contributing:

Contributions to improve the Event Listing Application are welcome! Feel free to fork the repository and submit pull requests.

---

License:

This project is licensed under the MIT License.

---
