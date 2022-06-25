import { Theme } from "@emotion/react";

export const day: Theme = {
  colors: {
    bgColor: {
      primary: "#f5f6fa",
      transparent: "rgba(0,0,0,0)",
    },
    btnColor: {
      primary: "#0097e6",
      onHover: "#00a8ff",
    },
    txtColor: {
      primary: "#353b48",
      accent: "#487eb0",
      transparent: "rgba(0,0,0,0.4)",
    },
  },
  styles: {
    fontSize: {
      m: "17px",
      x: "20px",
      xl: "25px",
      xxl: "30px",
      title: "40px",
    },
    border: "1px solid rgba(0,0,0,0.4)",
    borderRadius: {
      semi: "10px",
      bold: "20px",
      circle: "50%",
    },
    boxShadow: "rgba(0, 0, 0, 0.13) 0px 5px 25px",
    transition: "all 0.2s ease-in-out",
    padding: "15px",
  },
};
