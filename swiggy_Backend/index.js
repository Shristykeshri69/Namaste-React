import express from "express";


const app = express();
const PORT = 5000;


app.use(express.json());

app.get("/api/menu", async (req, res) => {
  try {
    const { lat, lng, restaurantId } = req.query;

    const SWIGGY_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;

    const response = await fetch(SWIGGY_MENU_URL, {
      headers: {
         "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  "Accept": "application/json",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://www.swiggy.com/",
  "Origin": "https://www.swiggy.com",
  "Cookie": "_guest_tid=12345;"
      },
    });

    console.log("Swiggy status 👉", response.status);

    const text = await response.text();
    console.log("Swiggy raw response 👉", text.slice(0, 300));

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Swiggy request failed",
        swiggyStatus: response.status,
      });
    }

    const data = JSON.parse(text);
    res.json(data);

  } catch (err) {
    console.error("🔥 Backend crash:", err);
    res.status(500).json({ error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
