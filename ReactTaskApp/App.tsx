import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import AppStack from './src/routes/AppStack';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {colors} from './src/constants/theme';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppStack />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
  },
});
