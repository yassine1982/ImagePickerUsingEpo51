import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import ImageViewer from "@/components/ ImageViewer";
import Button from "@/components/ Button";
const PlaceholderImage = require("@/assets/images/background-image.png");
import * as ImagePicker from "expo-image-picker";
import getURI from "@/scripts/utils";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result?.assets[0]?.uri || null;
      setSelectedImage(uri);
      console.log(uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
      </View>
      {showOptions ? (
        <View /> //TODO - Add Modal for emojies inside flatlist
      ) : (
        <View style={styles.footerContainer}>
          <Button
            theme="primary"
            label="Choose a photo"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" onPress={() => setShowOptions(true)} />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

const data = {
  assets: [
    {
      assetId: null,
      base64: null,
      duration: null,
      exif: null,
      fileName: null,
      fileSize: 3423408,
      height: 2002,
      mimeType: "image/jpeg",
      type: "image",
      uri: "file:///Users/riahi/Library/Developer/CoreSimulator/Devices/8CFB0EB7-3AE0-4750-8F46-D7B5B49285A1/data/Containers/Data/Application/8C7E5304-9CD2-48FA-BFFC-F4D80988532F/Library/Caches/ImagePicker/63A8670F-42C7-4D12-927D-8D69A6FD06B8.jpg",
      width: 3000,
    },
  ],
  canceled: false,
};
