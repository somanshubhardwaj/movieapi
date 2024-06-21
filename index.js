const express = require("express");
const axios = require("axios");

const app = express();
const port = 4000;
const token = "5532a84479c2fcd0e6f9cfd297028a8b";
// Middleware to parse JSON requests
app.use(express.json());

// Route to serve the home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Express with Axios Example</h1>");
});

// Route to fetch data from an external API
app.get("/api/data", async (req, res) => {
  try {
    // Replace the URL with an actual API endpoint
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Making a GET request using Axios
    const response = await axios.get(apiUrl);

    // Sending the fetched data back to the client
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("An error occurred while fetching data.");
  }
});
app.get("/api/movies/nowplaying", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/movies/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/movies/toprated", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/movies/upcoming", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/trending/movies", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/trending/tv", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/trending/people", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/tv/airingtoday", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/tv/popular", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
app.get("/api/tv/toprated", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&region=in&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
