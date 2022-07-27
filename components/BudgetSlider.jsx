import Slider from "@mui/material/Slider";
import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: {
          backgroundColor: "#1D99BE",
          borderRadius: "16px",
          height: "40px",
        },
        track: {
          color: "#1D99BE",
        },
        rail: {
          color: "#D9D5CC",
        },
        thumb: {
          color: "#1D99BE",
        },
      },
    },
  },
});

function valuetext(value) {
  return `$${value}/hr`;
}

export default function RangeSlider() {
  const [value, setValue] = useState([20, 60]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Slider
        getAriaLabel={() => "Price range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        valueLabelFormat={(value) => <div>${value}/hr</div>}
      />
    </ThemeProvider>
  );
}
