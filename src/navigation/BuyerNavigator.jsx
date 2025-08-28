import { AntDesign, MaterialIcons, } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';
import Cart from '../screens/Buyer/Cart';
import Checkout from '../screens/Buyer/Checkout';
import Favorite from '../screens/Buyer/Favorite';
import Home from '../screens/Buyer/Home';
import ProductDetail from '../screens/Buyer/ProductDetail';
import Profile from '../screens/Buyer/Profile';
import ShopMap from '../screens/Buyer/ShopMap';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false, title: 'Product' }} />
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
      <Stack.Screen name="ShopMap" component={ShopMap} options={{ headerShown: false, title: 'Shops Near You' }} />
    </Stack.Navigator>
  );
}

export default function BuyerNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: { backgroundColor: colors.white },
        tabBarIcon: ({ color }) => {

          if (route.name === 'HomeTab') return <AntDesign name= 'home' size={24} color={color} />;
          else if (route.name === 'Favorite') return <MaterialIcons name="favorite-border" size={24} color={color} />
          else if (route.name === 'Cart') return <AntDesign name = 'shoppingcart' size={24} color={color}/>
          else if (route.name === 'Profile') return <AntDesign name= 'user' size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
