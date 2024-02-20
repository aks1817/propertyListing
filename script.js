const { fetchData } = require("./apiService");
const { generateCSV } = require("./csvGenerator");

async function main() {
  const args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error("Usage: node index.js <address> <page_size>");
    process.exit(1);
  }

  const address = args[0];
  const pageSize = parseInt(args[1]);

  const listings = await fetchData(address, pageSize);
  generateCSV(listings);
}

main();
