import { FlatList, StyleSheet, Text, View } from 'react-native'
import Error from '../../components/Error/Error'
import Loading from '../../components/Loading/Loading'
import React from 'react'
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard'
import useFetch from '../../hooks/useFetch/useFetch'
import { API_URL } from '@env'

const Categories = ({ navigation }) => {

  const { loading, data, error } = useFetch(`${API_URL}categories.php`);

  const handleCategories = (categoryName) => {
    navigation.navigate('MealsPage', { category: categoryName });
  };
  

  const renderCategories = ({ item }) => {
    return <CategoriesCard meal={item} onSelect={() => handleCategories(item.strCategory)} />;
  };
  

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <View style={styles.CategoriesContainer}>
      <FlatList
        data={data.categories}
        renderItem={renderCategories}
        keyExtractor={(item) => item.idCategory}
      />
    </View>
  );

  
};

export default Categories;

const styles = StyleSheet.create({
  CategoriesContainer: {
    flex:1,
    padding: 5,
    backgroundColor: '#FFA500',
  },
});
