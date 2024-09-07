import React, { useEffect } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";
import { useTheme } from "@mui/styles";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top-rated" },
  { label: "Upcoming", value: "upcoming" },
];

const demoCategories = [
  { label: "Comedy", value: "comedy" },
  { label: "Action", value: "action" },
  { label: "Horror", value: "horror" },
  { label: "Animated", value: "animated" },
];

const redLogo =
  "https://fontmeme.com/permalink/240907/270c15c5932f370dfa5e970e3bc4ecd3.png";

const blueLogo =
  "https://fontmeme.com/permalink/240907/60bf38980e9a0f408fda59f1a4f25b17.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Cineverse logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                /> */}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem onClick={() => {}} button>
              <ListItemIcon>
                {/* <img
                  src={blueLogo}
                  className={classes.genreImages}
                  height={30}
                /> */}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
