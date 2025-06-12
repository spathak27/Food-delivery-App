import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from your React app

app.get("/api/swiggy", async (req, res) => {
  try {
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const response = await fetch(swiggyURL, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });
    console.log("Swiggy status:", response.status);

    if (!response.ok) {
      throw new Error(`Swiggy API returned ${response.status}`);
    }
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Error fetching Swiggy data:", error);
    res.status(500).json({ error: "Failed to fetch Swiggy data" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
