import { StyleSheet, Image, View } from "react-native";
import React from "react";
import {width, height} from '@/constants/layout'
const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  
// console.log(width, height)
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: width*0.9,
    height: height*0.5,
    borderRadius: 18,
  },
});
