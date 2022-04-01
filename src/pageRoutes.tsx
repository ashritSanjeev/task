import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routes } from './constants';
import tabs from './screens/tabs';
import prodHome from './prodHome';
import { getCategories } from './store/productReducer/actions';

const Stack = createNativeStackNavigator();


const PageRoutes = (props: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories);
    },[])
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={routes.home}>
                <Stack.Screen name={routes.tabs} component={tabs} options={{ headerShown: false }} />
                <Stack.Screen name={routes.home} component={prodHome} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default PageRoutes;
