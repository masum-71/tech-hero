import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";


const PdfFile = ({course}) => {
    
    const { name, img, description } = course;

    const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: "center",
          fontFamily: "Oswald",
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: "justify",
          fontFamily: "Times-Roman",
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 100,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: "center",
          color: "grey",
        },
      });
  return (
   
      <Document>
        <Page style={styles.body}>
          <Text style={styles.header} fixed>
            {name}
          </Text>
          <Image style={styles.image} src={img}></Image>
          <Text style={styles.text}>{description}</Text>
        </Page>
      </Document>
      
   
  );
};

export default PdfFile;
