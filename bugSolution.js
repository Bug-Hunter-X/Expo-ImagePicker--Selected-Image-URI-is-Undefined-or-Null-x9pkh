// bugSolution.js
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import { Image, View, Button, Text } from 'react-native';

function ImagePickerExample() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      // Check if URI is available before updating state
      if(result.uri) {
        setSelectedImage(result);
      } else {
        alert('Error: Image URI is unavailable.');
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {selectedImage && (
        <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

export default ImagePickerExample;