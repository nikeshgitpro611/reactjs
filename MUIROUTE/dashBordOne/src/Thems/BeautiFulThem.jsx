import { createTheme } from "@mui/material";

const BeautiFulThem = createTheme({
  palette: {
    primary: {
      main: "#18842c",
      light: "#3aab58",
      dark: "darkgreen",
    },
    grid: {
      main: "rgba(0,0,0,0.1)",
      dark: "rgba(0,0,0,0.2)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid orange",
        },
      },
      variants: [
        {
          props: { variant: "beautiful" },
          style: {
            fontStyle: "italic",
            border: "4px solid lightpink",
            color: "fuchsia",
          },
        },
      ],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      sl: 1500,
    },
  },
  zIndex: {
    appBar: 1150,
  },
});

export default BeautiFulThem;
