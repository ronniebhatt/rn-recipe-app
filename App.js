import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import Recipes from './src/Data/Recipes';

const { width, height } = Dimensions.get('window');
export default function App() {
  const ref = useRef({ scroll: null });

  const renderItem = ({ item }) => {
    console.log(item);
    const { label, raiting, cooking_time, calories, image } = item.recipe;
    return (
      <View style={styles.recipeContainer}>
        <View style={styles.recipeTitleContainer}>
          <Image
            source={{ uri: image }}
            style={{
              width: width * 0.8,
              height: height * 0.5,
              alignSelf: 'center',
              borderRadius: width,
              resizeMode: 'cover',
            }}
          />
          <Text style={{ fontSize: 32 }}>{label}</Text>
          <Text>Raiting {raiting}</Text>
        </View>
        <View style={styles.recipeInfoContainer}>
          <Text style={styles.text}>Calories {calories}</Text>
          <Text style={styles.text}>Cooking Time {cooking_time}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={(r) => (ref.current.scroll = r)}
        data={Recipes}
        ListEmptyComponent={() => <Text>No Data</Text>}
        renderItem={renderItem}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: '#fff',
  },
  recipeContainer: {
    backgroundColor: '#e3b505',
    borderWidth: 1,
    width,
    height,
    flexGrow: 1,
  },
  recipeTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.9,
  },
  recipeInfoContainer: {
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width,
    flexDirection: 'row',
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
  },
  imageContainer: {},
});
