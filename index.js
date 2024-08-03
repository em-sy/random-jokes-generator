import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const baseURL = "https://v2.jokeapi.dev/joke/Programming?type=single";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(baseURL);
    const result = response.data;

    res.render("index.ejs", {
      joke: result.joke
    });

  } catch (error) {
    console.log("Failed to load request:", error.message)
  };
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}`);
});