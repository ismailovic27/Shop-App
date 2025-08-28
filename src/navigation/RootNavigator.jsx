import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import BuyerNavigator from './BuyerNavigator';
import VendorNavigator from './VendorNavigator';


const Stack = createNativeStackNavigator();


export default function RootNavigator() {
const { user, loading } = useContext(AuthContext);
if (loading) return null; // add a splash if you wish


const isVendor = user?.role === 'vendor';


return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
{user ? (
isVendor ? (
<Stack.Screen name="Vendor" component={VendorNavigator} />
) : (
<Stack.Screen name="Buyer" component={BuyerNavigator} />
)
) : (
<Stack.Screen name="Auth" component={AuthNavigator} />
)}
</Stack.Navigator>
);
}