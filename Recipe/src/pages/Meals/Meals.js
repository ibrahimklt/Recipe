import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MealsCard from '../../components/MealsCard/MealsCard'
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'
import { API_URL } from '@env'
const Meals = ({route,navigation}) => {
  
  const {category}=route.params;
  const {loading, data, error }=useFetch(`${API_URL}filter.php?c=${category}`);

  if(loading) return <Loading/>
  if(error) return <Error/>
  
  const handleSelect = (mealId) => {
    navigation.navigate("DetailPage", { mealId });
  };

  const renderMeal = ({ item }) => {
    return <MealsCard meal={item} onSelect={() => handleSelect(item.idMeal)} />;
  };

  return (
    <FlatList
      data={data.meals}
      renderItem={renderMeal}
      keyExtractor={(item) => item.idMeal}
    />
  )
}

export default Meals

const styles = StyleSheet.create({})