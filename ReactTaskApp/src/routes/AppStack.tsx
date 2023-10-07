import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateThreadPost, Home} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {PostThreadButton} from '../components';
import {colors, sizes} from '../constants/theme';

type AppStackParamList = {
  Home: undefined;
  CreateThreadPost: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
const routes: Array<React.ComponentProps<typeof Stack.Screen>> = [
  {
    name: 'Home',
    component: Home,
    options: {
      title: 'Chirpz',
      headerLeft: () => (
        <Image
          source={require('../assets/images/ProfilePicture.png')}
          resizeMode="contain"
          style={styles.profileImg}
        />
      ),
    },
  },
  {
    name: 'CreateThreadPost',
    component: CreateThreadPost,
    options: {
      title: '',
      headerTintColor: 'white',
      headerRight: () => <PostThreadButton />,
    },
  },
];

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            fontSize: sizes.h1,
            fontFamily: 'Inter-Regular',
            fontWeight: 'bold',
            color: 'white',
          },
          headerTitleAlign: 'center',
          statusBarColor: colors.primary,
        }}>
        {routes.map(routeConfig => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  profileImg: {
    height: 38,
    width: 38,
    borderRadius: 100,
  },
});

export default AppStack;
