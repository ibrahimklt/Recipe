import React from "react";
import { View, Text, Image, ScrollView, Dimensions,TouchableOpacity, Linking } from "react-native";
import useFetch from "../../hooks/useFetch/useFetch"; // Eğer böyle bir hook kullanıyorsan
import Loading from "../../components/Loading/Loading"; // Yüklenme bileşeni
import Error from "../../components/Error/Error"
import {API_URL} from '@env'

const { height } = Dimensions.get("window"); // Ekran yüksekliğini al

const Detail = ({ route }) => {
  const { mealId } = route.params;
  const { loading, data, error } = useFetch(`${API_URL}lookup.php?i=${mealId}`);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const openYouTube = () => {
    Linking.openURL(meal.strYoutube);
  };

  const meal = data.meals[0];

  return (
    <ScrollView style={{ flex: 1 }}> 
      <Image 
        source={{ uri: meal.strMealThumb }} 
        style={{ height: height * 0.6, width: "100%" }} 
        resizeMode="cover" 
      />
      
      <View style={{ borderBottomWidth: 1, paddingBottom: 3 }}>
        <Text style={{ fontWeight: "bold", fontSize: 22, color: "#c46404", marginLeft: 10 }}>
          {meal.strMeal}
        </Text>
        <Text style={{ color: "#c46404", fontWeight: "bold", marginLeft: 10 }}>
          {meal.strArea}
        </Text>
      </View>

      <Text style={{ padding: 10 }}>{meal.strInstructions}</Text>
      
      <TouchableOpacity 
        onPress={openYouTube} 
        style={{
          backgroundColor: "red",
          padding: 12,
          borderRadius: 10,
          margin: 20,
          alignItems: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Watch on YouTube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
