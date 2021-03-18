import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

export default function RecipeBottomContainer({
  cooking_time,
  calories,
  serving,
}) {
  return (
    <View style={styles.recipeInfoContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="timer-outline" color="#fff" size={25} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>{cooking_time} min</Text>
          <Text style={{ ...styles.text, fontSize: 12, opacity: 0.9 }}>
            Cooking Time
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="document-text-outline" color="#fff" size={25} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>{Math.round(calories)}</Text>
          <Text style={{ ...styles.text, fontSize: 12, opacity: 0.9 }}>
            Calories
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="scan-circle-outline" color="#fff" size={25} />
        <View style={{ paddingLeft: 10 }}>
          <Text style={styles.text}>{serving}</Text>
          <Text style={{ ...styles.text, fontSize: 12, opacity: 0.9 }}>
            Serving
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeInfoContainer: {
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width,
    flexDirection: 'row',
    height: height * 0.08,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    color: '#fff',
    textAlign: 'left',
  },
});
