const axios = require("axios");
const { API_URL, API_HEADERS, DEFAULT_DATE_RANGE } = require("./constants");

async function fetchData(address, pageSize) {
  const data = JSON.stringify({
    variables: {
      context: {
        siteId: 9001001,
        locale: "en_US",
        eapid: 1,
        currency: "USD",
        device: {
          type: "DESKTOP",
        },
        identity: {
          duaid: "65cbd87c-ebb5-ab83-a4c1-812db78bb787",
          expUserId: "-1",
          tuid: "-1",
          authState: "ANONYMOUS",
        },
        privacyTrackingState: "CAN_TRACK",
        debugContext: {
          abacusOverrides: [],
        },
      },
      criteria: {
        primary: {
          dateRange: DEFAULT_DATE_RANGE,
          destination: {
            regionName: address,
            regionId: null,
            coordinates: null,
            pinnedPropertyId: null,
            propertyIds: null,
            mapBounds: null,
          },
          rooms: [
            {
              adults: 2,
              children: [],
            },
          ],
        },
        secondary: {
          counts: [
            {
              id: "resultsStartingIndex",
              value: 150,
            },
            {
              id: "resultsSize",
              value: pageSize,
            },
          ],
          booleans: [],
          selections: [
            {
              id: "sort",
              value: "RECOMMENDED",
            },
            {
              id: "privacyTrackingState",
              value: "CAN_TRACK",
            },
            {
              id: "useRewards",
              value: "SHOP_WITHOUT_POINTS",
            },
            {
              id: "searchId",
              value: "d1342ebe-2e4c-4c8d-8838-a3967204a6f2",
            },
          ],
          ranges: [],
        },
      },
      destination: {
        regionName: null,
        regionId: null,
        coordinates: null,
        pinnedPropertyId: null,
        propertyIds: null,
        mapBounds: null,
      },
      shoppingContext: {
        multiItem: null,
      },
      returnPropertyType: false,
      includeDynamicMap: true,
    },
    operationName: "LodgingPwaPropertySearch",
    extensions: {
      persistedQuery: {
        sha256Hash:
          "e4ffcd90dd44f01455f9ddd89228915a177f9ec674f0df0db442ea1b20f551c3",
        version: 1,
      },
    },
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: API_URL,
    headers: API_HEADERS,
    data: data,
  };

  try {
    const response = await axios.request(config);
    return response.data.data.propertySearch.propertySearchListings;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  }
}

module.exports = { fetchData };
