## Dynamic Event Calendar Application
A Dynamic Event Calendar Application built using React.js, shadcn/ui, Tailwind CSS, and date-fns. The app allows users to manage events seamlessly, demonstrating advanced React logic, clean UI design, and data persistence.

## Features
1. Calendar View
* Displays a grid for the current month.
* Highlights today's date.
* Allows navigation between months using Previous and Next buttons.
* Days outside the current month are grayed out.
2. Event Management
* Add Events: Click on any day to add an event with the following details:
* Event Name
* Start Time and End Time
* Optional Description
# Edit Events:
* mView all events for a selected day in a modal.
* Update or delete events as needed.
# Event List:
* A detailed list of all events for the selected day is displayed in the modal.
3. Data Persistence
* Uses localStorage to save and load events.
* Events persist between page refreshes.
4. Responsive Design
* Fully responsive interface using Tailwind CSS.
* Works seamlessly on desktop and mobile devices.
 
## Installation

1. Install Dependencies
Ensure you have Node.js and npm installed. Then, run:

bash
Copy code
npm install

2. Start the Development Server
bash
Copy code
npm start

## Usage
* Adding an Event
* Click on any date in the calendar.
* Fill in the event details in the modal:
* Name
* Start Time
* End Time
* Optional Description
* Click the Add Event button to save the event.
* Viewing and Managing Events
* Click on a date with events (highlighted).
* View all events for the selected day in the modal.
* Use the Delete button to remove any event.
* Navigation
* Use the Previous and Next buttons to navigate between months.
* Technologies Used
* React.js: Core framework for building the application.
* Tailwind CSS: For styling and responsive design.
* date-fns: For date formatting and manipulation.
* localStorage: For persistent data storage.