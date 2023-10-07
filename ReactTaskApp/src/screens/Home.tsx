import React, {useEffect} from 'react';
import {FlatList, Pressable, StyleSheet} from 'react-native';
import {ThreadPostCard} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {fetchThreads} from '../redux/threads/thunks.threads';
import {RootState} from '../redux/store';
import {colors} from '../constants/theme';

const Home = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {threads, isLoading}: any = useSelector<RootState>(
    state => state.threadsReducer,
  );

  useEffect(() => {
    dispatch(fetchThreads());
  }, []);

  const renderItem = ({item}: any) => <ThreadPostCard {...item} />;
  return (
    <React.Fragment>
      <FlatList
        data={threads}
        showsVerticalScrollIndicator={false}
        refreshing={isLoading}
        onRefresh={() => {
          dispatch(fetchThreads());
        }}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => item?.id?.toString() + index}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
      />
      <Pressable
        onPress={() => navigation.navigate('CreateThreadPost')}
        style={styles.addThreadPostBtn}>
        <Icon name={'pluscircle'} size={50} color={colors.secondary} />
      </Pressable>
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    flexGrow: 1,
  },
  addThreadPostBtn: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },
});
