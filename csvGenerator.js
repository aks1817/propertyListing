const { createObjectCsvWriter } = require("csv-writer");

function generateCSV(listings) {
  const csvData = listings.map((listing) => ({
    "Listing ID": listing.id,
    "Listing Title": listing.headingSection.heading,
    "Nightly Price":
      listing.priceSection.priceSummary.displayMessages[0].lineItems[0].price
        .formatted,
    "Listing URL": listing.cardLink.resource.value,
  }));

  const csvFields = [
    "Listing ID",
    "Listing Title",
    "Nightly Price",
    "Listing URL",
  ];

  const csvWriter = createObjectCsvWriter({
    path: "listings.csv",
    header: csvFields.map((field) => ({ id: field, title: field })),
  });

  csvWriter
    .writeRecords(csvData)
    .then(() => console.log("CSV file generated successfully!"))
    .catch((error) => console.error("Error writing CSV:", error));
}

module.exports = { generateCSV };
