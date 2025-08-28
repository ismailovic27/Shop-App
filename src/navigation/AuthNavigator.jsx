import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import Welcome from '../screens/Auth/Welcome';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
return (
<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="Welcome" component={Welcome} />
<Stack.Screen name="Login" component={Login} />
<Stack.Screen name="SignUp" component={SignUp} />
</Stack.Navigator>
);
}