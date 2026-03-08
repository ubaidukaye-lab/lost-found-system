# Campus Lost & Found Management System

## Project Overview
This web-based system allows Quest International University students to submit and track lost and found items, replacing manual notice boards and WhatsApp groups.

## Features
- Submit lost item reports
- Submit found item reports
- View all lost and found items
- Track item status (Active → Claimed/Resolved)
- Delete a report
- Responsive, mobile-friendly interface
- Basic security measures implemented

## Installation
1. Clone the repository:
   git clone https://github.com/ubaidukaye-lab/lost-found-system.git
2. Navigate to the project folder:
   cd campus_lost_found_system
3. Install dependencies:
   npm install
4. Create `.env` file based on `.env.example` for database credentials.

## Running the Project
node server.js
- Open your browser at http://localhost:3000 to view the system.

## Database
- Database schema is provided in `database/lostfound.sql`.

## Security
- Input validation, sanitization, and basic XSS prevention implemented.
- Database credentials stored in `.env`.

## Author
- Ubaid Ukaye