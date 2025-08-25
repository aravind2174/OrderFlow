# Overview

This is a full-stack restaurant ordering platform built with React, TypeScript, and Express. The application provides a comprehensive SaaS solution for restaurants to manage online ordering, customer experiences, and business operations. It features a modern frontend with shadcn/ui components, a RESTful API backend, and PostgreSQL database integration through Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with CSS variables for theming and shadcn/ui component library
- **UI Components**: Comprehensive component system using Radix UI primitives for accessibility
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing

## Backend Architecture
- **Runtime**: Node.js with TypeScript using ES modules
- **Framework**: Express.js for RESTful API endpoints
- **Development**: Hot reload with tsx for server-side development
- **Production**: esbuild bundling for optimized deployment
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle with Drizzle Kit for schema management and migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connections
- **Schema**: Shared schema definitions between client and server using Zod validation

## Authentication & Session Management
- **Session Storage**: PostgreSQL sessions using connect-pg-simple
- **Schema Validation**: Drizzle-zod integration for type-safe database operations
- **User Management**: Basic user table with username/password authentication

## Development & Build Pipeline
- **Monorepo Structure**: Client and server code organized in separate directories with shared types
- **Hot Reload**: Vite dev server with Express middleware integration
- **Static Assets**: Vite handles client builds, Express serves static files in production
- **Error Handling**: Runtime error overlay for development debugging

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Modern TypeScript ORM with PostgreSQL dialect

## UI & Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Pre-built component library with design system
- **Lucide React**: Icon library for consistent iconography

## Development Tools
- **Replit Integration**: Development environment with cartographer and runtime error modal
- **TanStack Query**: Server state management and data fetching
- **date-fns**: Date manipulation utilities
- **Wouter**: Lightweight routing solution

## Form & Validation
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Build & Bundling
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration