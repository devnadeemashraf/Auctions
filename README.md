# Auctions - A Free Open Source Online Marketplace

Auctions is a free and open-source online marketplace that allows you to list your items for auction, manage bids, and track real-time updates with minimal effort. The platform simplifies the auction process by automating manual tasks and providing real-time bid tracking and notifications.

## Features

- **Listings across Multiple Categories**  
  Organize your items into categories for better discoverability.

- **Real-Time Bidding with Updates**  
  Track bids in real-time and get updates on bidding activity.

- **Client-Side Notifications**  
  Stay informed with in-app notifications for auction updates.

- **Discord Integration COMING SOON!**  
  Get notified through Discord with integration for real-time messages.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Express, TypeScript, MongoDB
- **Notifications**: In-App & Discord Integration (via Webhooks)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Vite](https://vitejs.dev/) (for local development)

### Steps to Set Up Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/auctions.git
   cd auctions
   ```

2. **Install dependencies:**

   Install required dependencies using `npm` or `yarn`:

   ```bash
   npm install
   ```

   Or if you're using Yarn:

   ```bash
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root of your project and replace the contents with what's in `.env.example`

4. **Run the development server:**

   Start the Vite development server:

   ```bash
   npm run dev
   ```

   Or if using Yarn:

   ```bash
   yarn dev
   ```

   Open your browser and go to `http://localhost:5173` to see the application in action.

## Usage

Once the application is up and running, you can:

- **Create an account** to manage your auctions.
- **List items** for auction in different categories.
- **Place bids** and track real-time updates on the auction.
- **Receive notifications** via Discord or directly in the app when you are outbid.

## Deployment

You can deploy this app on any platform that supports static web hosting, such as:

- [Vercel](https://vercel.com/)

## Contributing

We welcome contributions to Auctions! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Open a pull request.

Make sure to follow the project's coding conventions and include tests where applicable.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/) and [Vite](https://vitejs.dev/) for the frontend framework and build tool.
- [Discord](https://discord.com/) for integrating notifications. COMING SOON!
