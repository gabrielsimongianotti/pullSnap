import bkImgGreen from "../../assets/bgCardGreen.jpg";
import bgCardOrange from "../../assets/bgCardOrange.jpg";
import bgCardBlue from "../../assets/bgCardBlue.jpg";

export const themeBk = {
  blue: bgCardBlue,
  orange: bgCardOrange,
  green: bkImgGreen,
};

export const textTheme = {
  blue: {
    color: "#2188FF",
    background: themeBk.blue,
  },
  green: {
    color: "#ffffff",
    background: themeBk.green,
  },
  orange: {
    color: "#FB8532",
    background: themeBk.orange,
  },
};
