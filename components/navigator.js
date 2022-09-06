import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListPhotos from './pages/ListPhotos';
import ShowPhoto from './pages/ShowPhoto';
import * as React from 'react';
/**
 * 
 * @returns JSX Element navigation
 */
function Nav() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={ListPhotos} options={{ title: "List Photos",headerTitleAlign: "center"}}/>
            <Stack.Screen name="Show" component={ShowPhoto} options={{ title: "Photo",headerTitleAlign: "center"}} />
        </Stack.Navigator>
    )
}
export default Nav;