/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux'
import {storeRedux} from './components/store';
import Nav from './components/navigator';
import { NavigationContainer } from '@react-navigation/native';
/**
 * 
 * @returns JSX Element App
 */
const AppWrapper = () => {
    
    return (
        <Provider store={storeRedux}>
            <NavigationContainer>
                    <Nav/>
            </NavigationContainer>
        </Provider>
    )
};

export default AppWrapper;
