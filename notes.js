// Information about new concepts used in this project

//-----------------------------------------------------------------------------------------------------------

/*
1. createTheme & ThemeProvider - MUI (Used in 'src\index.js')

(a) createTheme
Purpose: The createTheme function is used to create a custom theme in Material-UI. 
This theme allows you to modify the default styles of Material-UI components, such 
as colors, typography, spacing, and more.

How it works: You pass an object to createTheme that contains custom configurations 
for different aspects of the theme (like primary colors, typography, etc.). 
This function then returns a theme object, which you can apply globally through the ThemeProvider.
*/

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Arial", // Custom typography
  },
});

/*
(b) ThemeProvider
Purpose: The ThemeProvider component is used to apply a theme (created with createTheme) 
to all Material-UI components in your application. It ensures that the theme is applied consistently 
across your components and can be used to switch themes dynamically.

How it works: You wrap your application's component tree (or specific parts of it) inside the 
ThemeProvider component. Inside the ThemeProvider, all MUI components will adopt the theme provided. 
This allows you to apply consistent design choices throughout your app.
*/

const App = () => (
  <ThemeProvider theme={theme}>
    <Button color="primary">Primary Button</Button>
  </ThemeProvider>
);

//-----------------------------------------------------------------------------------------------------------

/*
2. makeStyles - MUI (Used in components)

Purpose: It is used for writing and managing custom styles for your components. 
It allows you to create CSS-in-JS styles and apply them directly to your React components.

How it works: You define a function that returns an object containing CSS rules. 
Each key in the object represents a class, and the values define CSS properties. 
These classes can then be applied to components using a hook (in our case its 'useStyles').
*/

import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  root: {
    display: "flex",
    height: "100%",
  },
  toolbar: {
    height: "70px",
  },
  content: {
    flexGrow: "1",
    padding: "2em",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
    flexWrap: "wrap",
  },
}));

/*
=> theme.breakpoints.down('sm'):
It is a helper method provided by MUI's theme to define a media query.
sm refers to the "small" breakpoint, which typically means screen widths 
less than or equal to 600px (for mobile devices).

.down('sm') creates a media query that triggers that targets screen sizes below 
a certain breakpoint (below or equal to 600px in this case).
This ensures that the styles inside this block are only applied when the screen size is small, like on mobile devices.

.up('sm') targets screen sizes above a certain breakpoint (larger than or equal to 600px in this case).
This ensures that the styles inside this block are applied to the larger screens.
*/

//-----------------------------------------------------------------------------------------------------------

import { useTheme } from "@mui/material/styles";
const theme1 = useTheme();

// A hook that accesses the current theme (light or dark mode).

const isMobile = useMediaQuery("(max-width:600px)");

/*
Purpose: useMediaQuery is a React hook provided by Material-UI that allows you to determine 
if the screen size or media matches a specified CSS media query. It listens to screen size changes 
and returns a boolean (true or false) based on whether the current screen matches the query.

In this case, it is used to differentiate between mobile and desktop views.
*/
