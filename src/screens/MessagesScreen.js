import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../../assets/colors';

const MessagesScreen = () => {
    return (
        <View>
            <Text>Messages Screen</Text>
        </View>
    )
}

export default MessagesScreen;


export const messagesScreenOptions = () => {
    return{
        tabBarLabel:'',
        tabBarIcon:({focused}) => (
            focused ?
            (
            <FontAwesome name="envelope" size={24} color={Colors.twitterblue}/>
            ) 
            :(
            <FontAwesome name="envelope-o" size={24} color="grey" />
            )
        ),
        tabBarOptions :{
            showLabel:'false',
            activeTintColor:'blue'
        }
    }
};

const styles = StyleSheet.create({})
