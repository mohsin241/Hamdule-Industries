# Jai Hind Welding & Boiler Repair Works - Company Website

## Overview

This is a modern, responsive company website for Jai Hind Welding and Boiler Repair Works, an IBR approved boiler contractor established in 1952. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing the company's industrial boiler services, products, and expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript support
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal implementation)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Client-side routing using Wouter
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens for brand colors (navy and orange theme)
- **Typography**: Inter font family from Google Fonts
- **Icons**: Lucide React icons with some React Icons for social media
- **Forms**: React Hook Form with Zod validation (configured but not actively used)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

### Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Development Tools**: tsx for TypeScript execution, esbuild for production builds
- **API Structure**: RESTful API with `/api` prefix (routes currently minimal)
- **Storage Interface**: Abstract storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware
- **Development Features**: Request logging and Vite integration for HMR

### Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Basic user table with UUID primary keys
- **Validation**: Zod schemas for type-safe database operations
- **Migrations**: Drizzle Kit for schema migrations

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Layer**: Express routes handle business logic and database operations
3. **Storage Layer**: Abstract storage interface allows for different implementations
4. **Database**: PostgreSQL with Drizzle ORM for data persistence
5. **Response**: JSON responses sent back to client components

The current implementation is mostly frontend-focused with minimal backend integration, designed as a company showcase website.

## Recent Changes (July 26, 2025)

✓ Improved responsive design across all sections with mobile-first approach
✓ Replaced text logo with logo placeholder (JH initials) in header and footer  
✓ Added responsive typography scaling (text-3xl sm:text-4xl md:text-5xl)
✓ Enhanced mobile navigation with better spacing and shadows
✓ Optimized padding/margins for different screen sizes (py-12 sm:py-16 lg:py-20)
✓ Improved grid layouts for mobile, tablet, and desktop breakpoints
✓ Enhanced button responsiveness with proper sizing on mobile devices
✓ Fixed floating action buttons (WhatsApp, scroll-to-top) positioning for mobile
✓ Updated hero section with better mobile typography and CTA button layouts

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver for Neon database
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **@tanstack/react-query**: Server state management and caching
- **react-hook-form**: Form handling with validation
- **date-fns**: Date manipulation utilities
- **wouter**: Lightweight client-side routing

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility
- **cmdk**: Command palette component

### Development Dependencies
- **vite**: Fast build tool and development server
- **typescript**: Type checking and compilation
- **eslint**: Code linting (configured through Vite plugins)

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds React application to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Public assets served from build directory

### Production Configuration
- **Environment Variables**: `DATABASE_URL` required for database connection
- **Process Management**: Node.js server runs compiled JavaScript
- **Asset Serving**: Express serves static files in production mode
- **Development Mode**: Vite dev server with HMR integration

### Development Workflow
- **Hot Reload**: Vite provides instant feedback for frontend changes
- **TypeScript**: Continuous type checking during development
- **Database**: Drizzle Kit for schema management and migrations
- **Error Handling**: Development error overlay for debugging

The application is designed to be deployed on platforms like Replit, Vercel, or traditional hosting providers with Node.js support. The current implementation focuses on the frontend presentation layer with a foundation for backend expansion.