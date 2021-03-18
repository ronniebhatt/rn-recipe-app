import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
import getRecipe from './src/API/getRecipe';

const {width, height} = Dimensions.get('window');
export default function App() {
  const ref = useRef({scroll: null});
  const [recipes, setRecipes] = useState([
    {
      title: 'Test 1',
      recipe_by: 'test 1',
      cooking_time: 30,
      calories: 232,
      serving: 2,
    },
    {
      title: 'Test 2',
      recipe_by: 'test 2',
      cooking_time: 30,
      calories: 232,
      serving: 2,
    },
    {
      title: 'Test 3',
      recipe_by: 'test 3',
      cooking_time: 30,
      calories: 232,
      serving: 2,
    },
    {
      title: 'Test 4',
      recipe_by: 'test 4',
      cooking_time: 30,
      calories: 232,
      serving: 2,
    },
  ]);

  // const getRecipeData = async () => {
  //   try {
  //     const data = await getRecipe();
  //     console.log('==a==', data);
  //     setRecipes(data.hits);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getRecipeData();
  // }, []);

  const renderItem = ({item}) => {
    const {title, recipe_by, cooking_time, calories, serving} = item;
    return (
      <View style={styles.recipeContainer}>
        <View style={styles.recipeTitleContainer}>
          <Text>{title}</Text>
          <Text>Recipe By {recipe_by}</Text>
        </View>
        <View style={styles.recipeInfoContainer}>
          <Text style={styles.text}>Calories {calories}</Text>
          <Text style={styles.text}>Cooking Time {cooking_time}</Text>
          <Text style={styles.text}>Serving {serving}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={r => (ref.current.scroll = r)}
        data={recipes}
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
    backgroundColor: 'yellow',
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
});
