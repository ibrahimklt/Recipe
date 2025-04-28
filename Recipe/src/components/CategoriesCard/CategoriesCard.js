import React from "react";
import { View,Text,TouchableWithoutFeedback,Image } from "react-native";
import styles from './CategoriesCard.style';


const CategoriesCard =({meal ,onSelect})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.CategoriesCard_container}>
                <Image
                style={styles.image}
                source={{uri:meal.strCategoryThumb}}
                />
                <Text style={styles.textstyle}>{meal.strCategory}</Text>
            </View>
        </TouchableWithoutFeedback>
        
    )
}

export default CategoriesCard;