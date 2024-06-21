const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 4000;
const token = "5532a84479c2fcd0e6f9cfd297028a8b";

app.use(express.json());

app.get("/", (req, res) => {

  res.sendFile(__dirname + '/index.html');
});

app.get("/api/data", async (req, res) => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    const response = await axios.get(apiUrl);

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from API:", error);
    res.status(500).send("An error occurred while fetching data.");
  }
});

// ... rest of the code

/**
 * Route for getting similar movies
 * @name GET /api/movie/:id/similar
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/movie/:id/similar", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/similar?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**
 * Route for getting similar TV shows
 * @name GET /api/tv/:id/similar
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/tv/:id/similar", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/similar?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

/**
 * Route for getting combined credits of a person
 * @name GET /api/person/:id/combined_credits
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/person/:id/combined_credits", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/combined_credits?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting movie reviews
 * @name GET /api/movie/:id/reviews
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/movie/:id/reviews", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/reviews?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting TV show reviews
 * @name GET /api/tv/:id/reviews
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/tv/:id/reviews", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/reviews?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting person images
 * @name GET /api/person/:id/images
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/person/:id/images", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/images?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting movie images
 * @name GET /api/movie/:id/images
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/movie/:id/images", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/images?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting TV show images
 * @name GET /api/tv/:id/images
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/tv/:id/images", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/images?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting movie videos
 * @name GET /api/movie/:id/videos
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/movie/:id/videos", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/videos?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

/**
 * Route for getting TV show videos
 * @name GET /api/tv/:id/videos
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get("/api/tv/:id/videos", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/videos?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/person/:id/tagged_images", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/tagged_images?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/movie/:id/credits", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/credits?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/tv/:id/credits", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/credits?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/person/:id/external_ids", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${req.params.id}/external_ids?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/movie/:id/external_ids", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/external_ids?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/tv/:id/external_ids", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/external_ids?language=en-US&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/movie/:id/recommendations", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${req.params.id}/recommendations?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);
app.get("/api/tv/:id/recommendations", async (req, res) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${req.params.id}/recommendations?language=en-US&page=1&api_key=${token}`
    );
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
);

// Start the Express server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
