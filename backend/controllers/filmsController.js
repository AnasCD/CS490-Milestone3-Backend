/*Fetching data about specific film */

import { getMovieDetailsById } from "../models/chartsQueries.js";  // Import from chartsQueries.js

export const getFilmDetails = (req, res) => {
    const movieId = req.params.id;

    getMovieDetailsById(movieId, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Failed to fetch film details" });
        }
        // Return the film details as JSON
        res.json(result);
    });
};