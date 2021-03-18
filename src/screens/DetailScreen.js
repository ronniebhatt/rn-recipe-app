import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RecipeBottomContainer from '../Components/RecipeBottomContainer';

const { width, height } = Dimensions.get('window');

export default function DetailScreen({ route }) {
  const {
    label,
    rating,
    cooking_time,
    calories,
    image,
    serving,
    source,
    ingredientLines,
    ingredients,
  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.recipeContainer}>
        <View style={styles.recipeTitleContainer}>
          {/* recipe cover image */}

          <Image
            source={{ uri: image }}
            style={{ ...styles.image, ...styles.imageContainer }}
          />

          {/* recipe basic info */}
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 25, fontWeight: '650' }}>{label}</Text>
            <Text style={{ fontSize: 16 }}>Source : {source}</Text>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <FontAwesome
                    style={{ paddingHorizontal: 5 }}
                    name="star"
                    size={25}
                    color="#EE514D"
                  />
                ))}
            </View>
          </View>
        </View>

        {/* recipe bottom  */}
        <RecipeBottomContainer
          calories={calories}
          cooking_time={cooking_time}
          serving={serving}
        />
      </View>

      {/* ingredient */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
        style={styles.ingredientContainer}
      >
        <Text style={styles.ingredientText}>ingredient</Text>
        {ingredientLines.map((text) => (
          <Text style={styles.ingredientLineText}>{text}</Text>
        ))}
      </ScrollView>
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
    backgroundColor: '#F8C34E',
    width,
    height: height * 0.4,
  },
  recipeTitleContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.3,
    flexDirection: 'row',
  },

  text: {
    color: '#fff',
    textAlign: 'left',
  },
  imageContainer: {
    backgroundColor: '#F8C34E',
    width: '50%',
    height: height * 0.23,
    borderRadius: width,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    marginLeft: -80,
    marginTop: 20,
  },
  nameContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 10,
    paddingRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  ingredientText: {
    fontSize: 22,
    color: '#000',
    textTransform: 'uppercase',
    textAlign: 'center',
    paddingVertical: 15,
  },
  ingredientContainer: {
    paddingHorizontal: 20,
  },
  ingredientLineText: {
    fontSize: 18,
    paddingVertical: 2,
  },
});
