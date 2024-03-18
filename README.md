# Next App Restaurant Project

This project is a web application built with Next.js for managing restaurant data. It allows users to view a list of restaurant and delete existing ones.

## Features

- Display a list of restaurants with details such as name, address, contact information, and website.
- Delete existing restaurants from the list.
- Stylish user interface with responsive design.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and static web applications.
- **React**: A JavaScript library for building user interfaces.
- **MongoDB**: A NoSQL database used for storing restaurant data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **Font Awesome**: A library of icons used for UI elements.
- **Node.js**: A JavaScript runtime environment for building server-side applications.

## Project Structure

- **components**: Contains React components used throughout the application.
  - `RestaurantCard.js`: Component for displaying individual restaurant information.
  - `RestaurantPage.js`: Component for rendering a list of restaurants.
  - `RootLayout.js`: Component for defining the layout structure of the application.
  - `DeleteBlock.js`: Component for handling restaurant deletion functionality.
- **models**: Contains the MongoDB schema definition for the `Restaurant` model.
  - `Restaurant.js`: Defines the schema for storing restaurant data in the database.
- **pages**: Contains Next.js pages for routing and server-side rendering.
  - `index.js`: Home page component that fetches and displays a list of restaurants.
- **api**: Contains serverless functions for handling API requests.
  - `Restaurants.js`: Route for retrieving a list of restaurants.
  - `Restaurants/[id].js`: Route for deleting a specific restaurant by ID.

## Setup Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and configure the connection in `models/Restaurant.js`.
4. Start the development server with `npm run dev`.
5. Access the application at `http://localhost:3000`.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
