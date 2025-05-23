# ProcureSync - Inventory Management System

ProcureSync is a comprehensive inventory management application designed to handle all aspects of the procurement lifecycle, including purchase requests, approvals, supplier management, order tracking, stock management, and reporting. The app streamlines procurement processes, ensures transparency, and provides real-time inventory insights.

## Features

- **Main Container Structure**: A centralized application container that provides layout structure and hooks for all feature modules
- **Modular Architecture**: Separate modules for different procurement functions that can be extended independently
- **Responsive Design**: Built with responsive design principles to work on desktop and mobile devices
- **Dark Mode Support**: Includes dark mode support through Tailwind CSS

## Modules

1. **Dashboard**: Overview of key metrics and quick access to all features
2. **Purchase Requests**: Create and manage purchase requests
3. **Approvals**: Review and approve procurement requests
4. **Suppliers**: Manage supplier information and relationships
5. **Order Tracking**: Track the status of orders and deliveries
6. **Stock Management**: Monitor and manage inventory levels
7. **Reports**: Generate procurement analytics and reports

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for styling

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Homepage
│   └── [module]/         # Module-specific pages
├── components/           # Reusable UI components
│   └── layout/           # Layout components
│       ├── Header.tsx    # Application header
│       ├── Sidebar.tsx   # Navigation sidebar
│       ├── Footer.tsx    # Application footer
│       └── MainContainer.tsx  # Main container component
├── context/              # React context providers
│   └── AppContext.tsx    # Application state context
├── modules/              # Feature modules
│   ├── dashboard/        # Dashboard module
│   ├── requests/         # Purchase requests module
│   ├── approvals/        # Approvals module
│   ├── suppliers/        # Suppliers management module
│   ├── orders/           # Order tracking module
│   ├── stock/            # Stock management module
│   └── reports/          # Reports and analytics module
└── types/                # TypeScript type definitions
```

## Extending the Application

The application is designed to be extended. To add new features:

1. Create a new module in the `src/modules` directory
2. Add a route in the `src/app` directory
3. Add navigation links in the `src/components/layout/Sidebar.tsx` file

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
