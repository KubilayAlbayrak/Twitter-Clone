import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../../assets/colors';


const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
        </View>
    )
}

export default SearchScreen;

export const searchScreenOptions = () => {
    return{
        tabBarLabel:'',
        tabBarIcon:({focused}) => (
            focused ? 
            (<Ionicons name="search" size={24} color={Colors.twitterblue} />) 
            :(<Ionicons name="search" size={24} color="grey" />) 
        )
        
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
