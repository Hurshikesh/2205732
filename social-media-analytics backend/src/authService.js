const axios = require("axios");
require("dotenv").config();

const TOKEN_URL = "http://20.244.56.144/auth/token";

const getAccessToken = async () => {
  try {
    const response = await axios.post(TOKEN_URL, {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "client_credentials"
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.message);
    throw new Error("Failed to fetch access token");
  }
};

module.exports = { getAccessToken };
