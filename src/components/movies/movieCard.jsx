import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    overflow: "hidden",
    boxShadow: `0 2px 5px ${theme.palette.divider}`,
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  media: {
    width: 100,
    height: 100,
    objectFit: "cover",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1.5),
      marginBottom: 0,
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      marginBottom: theme.spacing(1.5),
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(1),
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  overview: {
    fontSize: "0.8rem",
    lineHeight: 1.2,
  }
}));

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path } = movie;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        image={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        title={title}
        component="img"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.overview}>{overview}</Typography>
        <Box className={classes.confidenceScore}>
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;