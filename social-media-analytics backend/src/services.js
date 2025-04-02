const axios = require("axios");
const { getAccessToken } = require("./authService");
require("dotenv").config();

const BASE_URL = process.env.BASE_URL;

const getTopUsers = async () => {
  try {
    let accessToken = process.env.ACCESS_TOKEN;

    if (!accessToken) {
      accessToken = await getAccessToken();
    }

    const usersRes = await axios.get(`${BASE_URL}/users`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });

    return usersRes.data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw new Error("Error fetching top users: " + error.message);
  }
};

module.exports = { getTopUsers };
