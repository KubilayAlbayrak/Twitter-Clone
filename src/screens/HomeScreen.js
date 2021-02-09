import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Ionicons,MaterialCommunityIcons} from '@expo/vector-icons'; 
import Colors from '../../assets/colors';
import { DrawerActions, NavigationContainer } from '@react-navigation/native';



const HomeScreen = () => {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default HomeScreen;


export const homeScreenOptions = () => {


    return{
        headerTitle:() =>(
            <View style={{alignItems:'center'}}>
            <Ionicons size={30} name={'logo-twitter'} color={Colors.twitterblue} />
            </View>
        ),
        headerLeft:({navigation}) => (
            <TouchableOpacity onPress={() => {}} style={{marginLeft:15}}>
            <Ionicons name="reorder-three" size={34} color={Colors.twitterblue} />
            </TouchableOpacity>
        ),
        headerRight:() => (
            <TouchableOpacity style={{marginRight:15}}>
            <MaterialCommunityIcons name={'star-four-points-outline'} size={30} color={Colors.twitterblue} />
            </TouchableOpacity>
        ),
        tabBarLabel:'',
        tabBarIcon:({focused}) => (
           focused ? (
            <Ionicons name="ios-home-sharp" size={24} color={Colors.twitterblue} />
           ) 
           :(
            <Ionicons name="ios-home-outline" size={24} color="grey" />
           )
        )
    }
};

const styles = StyleSheet.create({})
