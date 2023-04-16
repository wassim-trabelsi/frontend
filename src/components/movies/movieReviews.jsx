import React, { useState, useEffect } from "react";
import axios from "axios";

const MovieReviews = ({ movieId }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const api_url = `http://localhost:80/sentiment-analysis?movieID=${movieId}`;
      try {
        const response = await axios.get(api_url);
        console.log("Reviews:", response);
        const feedbacks = response.data.result.map((review) => review.feedback);
        const scores = response.data.result.map((review) => review.score);
        setFeedbacks(feedbacks);
        setScores(scores);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setFeedbacks([]);
        setScores([]);
      }
    };
    fetchReviews();
  }, [movieId]);

  const getColor = (score) => {
    if (score > 0.5) {
      return "#c8e6c9"; // Green
    } else if (score > 0) {
      return "#fff"; // White
    } else {
      return "#ffcdd2"; // Red
    }
  };

  return (
    <div>
      <h2>Movie Reviews</h2>
      <table>
        <thead>
          <tr>
            <th>Feedback</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback, index) => (
            <tr key={index} style={{ backgroundColor: getColor(scores[index]) }}>
              <td>{feedback}</td>
              <td>{scores[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieReviews;