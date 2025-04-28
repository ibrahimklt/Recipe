import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MealsCard = ({ meal, onSelect }) => {
  return (
    <View style={styles.maincontainer}>
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{meal.strMeal}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

export default MealsCard;

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#FFA500'
    },
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden", // Kenarları yuvarlatılmış hale getirir
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Siyah şeffaf arka plan
    padding: 5,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
