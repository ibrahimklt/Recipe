import React from "react";
import LottieView from "lottie-react-native";
import loadinganimation from '../../assets/loading.json'
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";

function Loading(){
    return (
        <View style={styles.container}>
            <LottieView source={loadinganimation} autoPlay 
            style={{ width: 500, height: 500 }} 
            />
        </View>
    )
    }
    
    export default Loading;
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });