# Research Project Dashboard

## Overview

This is a full-stack web application for showcasing academic research in climate prediction using machine learning. The application serves as a comprehensive dashboard that allows researchers to present their work, including datasets, research papers, conference posters, and project documentation. Built as a single-page application with a tabbed interface, it provides an organized way to display various aspects of a research project to academic audiences and collaborators.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React SPA**: Built with React 18 and TypeScript for type safety and modern development practices
- **UI Framework**: Utilizes shadcn/ui components built on Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **State Management**: React Query (@tanstack/react-query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js Server**: Node.js backend with Express framework for API routing
- **TypeScript**: Full TypeScript support across the entire stack for type safety
- **Development Integration**: Custom Vite integration for seamless development experience
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Request Logging**: Built-in request/response logging for API endpoints

### Data Layer
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Centralized schema definition in shared directory for frontend/backend consistency
- **Database Migrations**: Drizzle Kit for database schema management and migrations
- **Storage Interface**: Abstracted storage layer with both in-memory and database implementations

### Component Architecture
- **Modular Design**: Component-based architecture with reusable UI components
- **Section-Based Layout**: Content organized into distinct sections (Introduction, Datasets, Papers, Posters)
- **Responsive Design**: Mobile-first approach with responsive navigation and layouts
- **Custom Theming**: CSS custom properties for consistent color schemes and branding

### Development Environment
- **Hot Reload**: Vite HMR for instant development feedback
- **Type Checking**: Comprehensive TypeScript configuration with strict mode
- **Code Organization**: Monorepo structure with shared types and utilities
- **Path Aliases**: Configured import aliases for cleaner import statements

## External Dependencies

### Database
- **PostgreSQL**: Primary database using Neon serverless PostgreSQL
- **Connection**: Environment variable-based database URL configuration
- **Session Storage**: PostgreSQL session storage with connect-pg-simple

### UI Components
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant management
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing

### Development Tools
- **ESBuild**: Fast JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **Replit Integration**: Custom plugins for Replit development environment

### Form and Validation
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library integrated with Drizzle for type safety
- **Hookform Resolvers**: Integration between React Hook Form and Zod

### Additional Libraries
- **Date-fns**: Date manipulation and formatting utilities
- **CLSX**: Conditional className utility for dynamic styling
- **Nanoid**: Unique ID generation for various application needs