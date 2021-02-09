import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../../assets/colors';

const NotificationsScreen = () => {
    return (
        <View>
            <Text>Notifications Screen</Text>
        </View>
    )
}

export default NotificationsScreen;

export const notificationsScreenOptions = () => {
    return{
        tabBarLabel:'',
        tabBarIcon : ({focused}) => (
            focused ? 
            (<Ionicons name="notifications-sharp" size={24} color={Colors.twitterblue} />)
            :(<Ionicons name="notifications-outline" size={24} color="grey" />) 
        )
    }
};

const styles = StyleSheet.create({})
