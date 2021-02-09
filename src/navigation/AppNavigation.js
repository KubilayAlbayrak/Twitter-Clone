import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainTabNavigation} from './TwitterNavigation';


function AppNavigation () {
    return(
        <NavigationContainer>
            <MainTabNavigation />
        </NavigationContainer>
    )
};

export default AppNavigation;