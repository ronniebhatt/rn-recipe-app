import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import Recipes from '../Data/Recipes';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RecipeBottomContainer from '../Components/RecipeBottomContainer';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => {
    const {
      label,
      rating,
      cooking_time,
      calories,
      image,
      serving,
      source,
    } = item.recipe;
    return (
      <View style={styles.recipeContainer}>
        {/* up arrow icon */}
        <EvilIcons
          style={styles.upArrow}
          name="arrow-up"
          size={50}
          color="#000"
        />

        <View style={styles.recipeTitleContainer}>
          {/* recipe cover image */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', item.recipe)}
            style={styles.imageContainer}
          >
            <Image source={{ uri: image }} style={styles.image} />
          </TouchableOpacity>

          {/* recipe basic info */}
          <View style={styles.nameContainer}>
            <Text style={{ fontSize: 35, fontWeight: '650' }}>{label}</Text>
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
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Recipes}
        ListEmptyComponent={() => <Text>No Data</Text>}
        renderItem={renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
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
    backgroundColor: '#F8C34E',
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
    textAlign: 'left',
  },
  imageContainer: {
    backgroundColor: '#F8C34E',
    width: width - 50,
    height: height * 0.43,
    borderRadius: width,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  upArrow: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  nameContainer: {
    width: width - 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
