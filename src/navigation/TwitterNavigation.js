import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen,{homeScreenOptions} from '../screens/HomeScreen';
import SearchScreen,{searchScreenOptions} from '../screens/SearchScreen';
import NotificationsScreen,{notificationsScreenOptions} from '../screens/NotificationsScreen';
import MessagesScreen,{messagesScreenOptions} from '../screens/MessagesScreen';

const globalScreenOptions = {};


export const HomeNavigation = () => {
const HomeStack = createStackNavigator();
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} options={homeScreenOptions}/>
        </HomeStack.Navigator>
    )
};

export const SearchNavigation = () => {
    const SearchStack = createStackNavigator();
        return(
            <SearchStack.Navigator>
                <SearchStack.Screen name='Search' component={SearchScreen} options={searchScreenOptions}/>
            </SearchStack.Navigator>
        )
};

export const NotificationsNavigation = () => {
    const NotificationsStack = createStackNavigator();
        return(
            <NotificationsStack.Navigator>
                <NotificationsStack.Screen name='Notifications' component={NotificationsScreen} options={notificationsScreenOptions}/>
            </NotificationsStack.Navigator>
        )
};

export const MessagesNavigation = () => {
    const MessagesStack = createStackNavigator();
        return(
            <MessagesStack.Navigator>
                <MessagesStack.Screen name='Messages' component={MessagesScreen} options={messagesScreenOptions} />
            </MessagesStack.Navigator>
        )
};

export const MainTabNavigation = () => {
    const MainTab=createBottomTabNavigator();
        return (
                    <MainTab.Navigator screenOptions={globalScreenOptions}>
                        <MainTab.Screen name="HomeNav" component={HomeNavigation} options={homeScreenOptions} />
                        <MainTab.Screen name="SearchNav" component={SearchNavigation} options={searchScreenOptions}/>
                        <MainTab.Screen name="NotificationsNav" component={NotificationsNavigation} options={notificationsScreenOptions}/>
                        <MainTab.Screen name="MessagesNav" component={MessagesNavigation} options={messagesScreenOptions}/>  
                    </MainTab.Navigator>
)
};



