# VRBO Listings Fetcher

This project is a Node.js script to fetch listings from VRBO and generate a CSV file with the listing details.

## Prerequisites

Before running this script, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm usually comes with Node.js installation.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aks1817/propertyListing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd propertyListing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

To run the script, use the following command:

```bash
node script.js <address> <page_size>
```

Replace `<address>` with the desired location address and `<page_size>` with the number of listings to fetch per page.

Example:

```bash
node script.js "73 W Monroe St, Chicago, IL 60603, USA" 50
```

This command will fetch listings for the provided address with a page size of 50 listings per page.
