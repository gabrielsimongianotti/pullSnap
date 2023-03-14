import React from 'react';
import { 
  PDFDownloadLink, 
  Document, 
  Page, 
  Image , 
  View, 
  StyleSheet, 
  Text
} from '@react-pdf/renderer';

interface prfProps {
  name?: string,
  repo?: string,
  theme: "green" | "blue" | "orange"
} 

const styles = StyleSheet.create({
  page: { 
    flexDirection: 'row',
    backgroundColor: '#1B1F23',
   },
   view: {
    width: '100%',
    height: '100%',
    padding: 0,
    backgroundColor: '#1B1F23',
  },
  image: {
    objectFit: 'cover',
  },
  text: {
    position: "absolute",   
    marginHorizontal: 'auto',
    fontStyle: 'normal',
    fontWeight: 600,
  }
});


export const CardPDF = ({name, repo, theme}: prfProps) => {
  const themeCard={
    image:{
      green:"/bgCardGreen.jpg",
      orange:"/bgCardOrange.jpg",
      blue:"/bgCardBlue .jpg"
    },
    color:{
      green: "#ffffff",
      orange:"#FB8532",
      blue:"#2188FF"
    }
  }
  return(
  <Document>
    <Page style={styles.page} size={{width: 960, height:1920}}  orientation="landscape">
      <View style={styles.view}>
        <Image style={styles.image} src={themeCard.image[theme]}/>
        <Text style={{ color: themeCard.color[theme], fontSize: "101px",  left: '320px',top:"54px", ...styles.text }}>{name}</Text>
        <Text style={{ color: themeCard.color[theme], left: '330px',top:"170px", fontSize: "60px", width:'1144px', height:"auto", ...styles.text }}>Fez uma contribuição para o repositorio {repo}</Text>
      </View>
    </Page>
  </Document>
)};



function Banner({name, repo, theme}:prfProps) {
return (
    <PDFDownloadLink style={{padding: "1.6rem 4rem"}} document={<CardPDF repo={repo} name={name} theme={theme} />} fileName="card.pdf">
      {({ blob, url, loading, error }) =>
        {
          return loading ? 'Loading ...' : 'Download'}
      }
    </PDFDownloadLink>
  );
}

export { Banner };
