import styled, { css } from "styled-components";
// import { StyleSheet } from "@react-pdf/renderer";
import { StaticImageData } from "next/image";

// import bkImgGreen from "../../assets/bgCardGreen.jpg";

// type Props = {
//   imageUrl: string;
// };

// const imageUrl = bkImgGreen;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 5.6rem;

  /* color: #ffffff; */

  /* border: 1px solid blue; */
`;
export const CardContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: relative;
  }

  h1 {
    font-size: 4rem;
    position: absolute;
    top: 1.7rem;
    left: 13.3rem;
  }

  span {
    font-size: 2rem;
    position: absolute;
    top: 8rem;
    left: 13.3rem;
  }
`;

// export const stylePdf = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#1B1F23",
//   },
//   view: {
//     width: "100%",
//     height: "100%",
//     padding: 0,
//     backgroundColor: "#1B1F23",
//   },
//   image: {
//     objectFit: "cover",
//   },
//   text: {
//     position: "absolute",
//     marginHorizontal: "auto",
//     color: "#fff",
//     fontStyle: "normal",
//     fontWeight: 600,
//   },
// });

// export const styleTeste = styled(StyleSheet.create)``;
