import React from "react";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    CategoriesCard_container:{
        backgroundColor:'white',
        width: '100%',  // Kartın tam genişlik kaplamasını sağlar
        height: 80, // Boyutu biraz artır
        borderWidth:1,
        marginVertical: 5, // Üst ve alt boşluk ekle
        borderTopLeftRadius: 35,
        borderBottomLeftRadius:35,
        borderTopRightRadius:5,
        borderBottomRightRadius:5,
        borderColor:'#E0DFDE',
        flexDirection:'row',
        alignItems: 'center', // İçeriği dikeyde hizalar
        paddingHorizontal: 10, // İçeriği biraz içe çek
    },
    image:{
        width: 90,
        height: 90,
        resizeMode:'contain',
        borderWidth:0,
        borderRadius:50
    },
    textstyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10, // Metni biraz sağa kaydır
    }
})

export default style