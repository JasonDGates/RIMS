# RIMS

Remote Inventory Management System

Kanban Board: https://trello.com/b/iMkG8QKI/rims-mvp

Technologies Used:
Javascript / Typescript
Backend: Node.js / Express
Front End: React with Vite
Testing: Jest and Vitest
Linter: AirBNB
Authentication: Passport
Database: MongoDB / Mongoose
Routing: React Router

cd server npm run start:dev
cd client npm run dev

Folder / File Structure:

/monorepo
│
├── /frontend             # React front-end application
│   ├── /public           # Static assets (images, fonts, etc.) and the main `index.html`
│   ├── /src              # Source code for the React application
│   │   ├── /components   # Reusable React components
│   │   ├── /pages        # Full-page React components (e.g., Home, About)
│   │   ├── /hooks        # Custom React hooks
│   │   ├── /services     # API services or utilities for making backend calls
│   │   ├── /styles       # Global CSS, SASS, or Tailwind configuration
│   │   ├── /utils        # Utility functions/helpers for the frontend
│   │   ├── App.tsx       # Main React component that wraps all others
│   │   ├── index.tsx     # Main entry point for the React app
│   └── package.json      # Dependencies and scripts for the frontend
│
├── /backend              # Express backend application
│   ├── /config           # Configuration files (e.g., MongoDB connection)
│   ├── /controllers      # Route logic for handling requests and responses
│   ├── /models           # MongoDB models (schemas) for the database
│   ├── /routes           # API endpoints and their routing logic
│   ├── /middleware       # Express middleware (authentication, logging, etc.)
│   ├── /utils            # Utility functions/helpers for the backend
│   ├── server.ts         # Main Express server entry point
│   └── package.json      # Dependencies and scripts for the backend
│
├── /tests                # End-to-end (E2E) and integration tests
│   ├── /e2e              # E2E tests for frontend-backend interactions
│   ├── /unit             # Unit tests for isolated functions/components
│   └── /integration      # Integration tests for backend services
│
├── /docker               # Docker-related files and configurations
│   ├── /mongodb          # Docker config for local MongoDB instance
│   ├── docker-compose.yml # Docker Compose file to spin up containers
│   └── Dockerfile        # Dockerfile for setting up container environment
│
├── /scripts              # Helper scripts (e.g., deployment, database seeding)
│
├── /shared               # Shared code (e.g., types, constants) between frontend and backend
│   └── /types            # TypeScript types/interfaces used across the project
│
├── .gitignore            # Specifies files/directories to ignore in Git
├── README.md             # Documentation for the monorepo
├── package.json          # Dependencies and scripts for the entire monorepo (root level)
└── tsconfig.json         # TypeScript configuration for the monorepo
