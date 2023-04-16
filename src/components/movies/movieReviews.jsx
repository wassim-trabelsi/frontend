import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  scoreCell: {
    width: "10%",
    fontWeight: "bold",
    textAlign: "center",
  },
  positiveRow: {
    backgroundColor: "#c8e6c9",
  },
  negativeRow: {
    backgroundColor: "#ffcdd2",
  },
}));

const MovieReviews = ({ movieId }) => {
  const classes = useStyles();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const api_url = `http://localhost:80/sentiment-analysis?movieID=${movieId}`;
      try {
        const response = await axios.get(api_url);
        const reviews = response.data.result;
        setReviews(reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setReviews([]);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div className={classes.root}>
      <h2>Movie Reviews</h2>
      <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="movie reviews">
          <TableHead>
            <TableRow>
              <TableCell>Feedback</TableCell>
              <TableCell className={classes.scoreCell}>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.map((review, index) => (
              <TableRow
                key={index}
                className={
                  review.score > 0.5 ? classes.positiveRow : classes.negativeRow
                }
              >
                <TableCell component="th" scope="row">
                  {review.feedback}
                </TableCell>
                <TableCell className={classes.scoreCell}>
                  {review.score.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
};

export default MovieReviews;