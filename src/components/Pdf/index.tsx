import React from 'react';
import dynamic from 'next/dynamic'
import { 
  PDFDownloadLink, 
  Document, 
  Page, 
  Image , 
  View, 
  StyleSheet, 
  Text
} from '@react-pdf/renderer';
import asjkdf from "../../assets/bgCardGreen.jpg"

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
    color:"#fff",
    fontStyle: 'normal',
    fontWeight: 600,

  }
});


const MyDoc = () => (
  <Document>
    <Page style={styles.page} size={{width: 960, height:1920}}  orientation="landscape">
      <View style={styles.view}>
        <Image style={styles.image} src={asjkdf} alt="" />
        <Text style={{ fontSize: "101px",  left: '320px',top:"54px", ...styles.text }}>Gabriel Simon Gianotti</Text>
        <Text style={{  left: '330px',top:"170px", fontSize: "60px", width:'1144px', height:"auto", ...styles.text }}>Fez uma contribuição para o repositorio swagger-js</Text>
      </View>
    </Page>
  </Document>
);



function Banner() {
  
  return (
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) =>
        {
          console.log( blob, url, loading, error)
          return loading ? 'Loading document...' : 'Download now!'}
      }
    </PDFDownloadLink>
  );
}

export { Banner };
