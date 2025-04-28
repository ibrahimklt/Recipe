import React from "react";
import LottieView from "lottie-react-native";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import erroranimation from '../../assets/error.json'

function Error(){
    return(
        <View style={styles.cantainer}>
            <LottieView source={erroranimation} autoPlay style={{height:400,width:400}}/>
        </View>
    )
}

export default Error;

const styles=StyleSheet.create({
    cantainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})