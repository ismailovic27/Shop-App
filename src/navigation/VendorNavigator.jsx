import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import AddProduct from '../screens/Vendor/AddProduct';
import Orders from '../screens/Vendor/Orders';
import VendorHome from '../screens/Vendor/VendorHome';
import VendorProducts from '../screens/Vendor/VendorProducts';
import VendorProfile from '../screens/Vendor/VendorProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function VendorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="VendorHome" component={VendorHome} options={{ headerShown: false }} />
      <Stack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Publish Product' }} />
    </Stack.Navigator>
  );
}

export default function VendorNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { backgroundColor: colors.white },
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === 'Dashboard') iconName = 'appstore-o';
          else if (route.name === 'MyProducts') iconName = 'database';
          else if (route.name === 'Orders') iconName = 'profile';
          else if (route.name === 'VendorProfile') iconName = 'user';

          return <AntDesign name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={VendorStack} />
      <Tab.Screen name="MyProducts" component={VendorProducts} options={{ title: 'Products' }} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="VendorProfile" component={VendorProfile} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}