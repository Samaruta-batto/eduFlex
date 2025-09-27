
# EduFlex - School Management System

Welcome to **EduFlex**, a modern, flexible school management system designed to streamline administrative tasks and enhance communication between educators, students, and parents.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or later)
- npm
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/eduflex.git
   cd eduflex
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the necessary environment variables. You can refer to `.env.example` for a template.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Features

- **Dashboard:** A centralized overview of key metrics and quick access to various modules.
- **Student Management:** Manage student information, including enrollment, attendance, and academic records.
- **Staff Management:** Keep track of staff details, roles, and permissions.
- **Financial Management:** Handle fee collections, invoicing, and financial reporting.
- **Attendance Tracking:** Monitor student and staff attendance with ease.
- **Transport Management:** Manage transport routes and assign students to routes.
- **User Management:** Control user access and permissions with a role-based access control (RBAC) system.
- **Reporting:** Generate comprehensive reports for various modules.

## Project Structure

- **/src/app:** Contains the main application code, with each feature module in its own directory.
- **/src/components:** Reusable React components used across the application.
- **/src/db:** Database-related files, including entities and data source configuration.
- **/src/entity:** TypeORM entity definitions for database tables.
- **/public:** Static assets such as images and icons.
- **ormconfig.json:** Configuration file for TypeORM.

