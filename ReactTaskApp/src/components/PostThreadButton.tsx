import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {postThread} from '../redux/threads/thunks.threads';
import {colors} from '../constants/theme';

const PostThreadButton = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const {isLoading, inputThread} = useSelector<RootState>(
    state => state.threadsReducer,
  );
  const [posted, setPosted] = useState(false);

  useEffect(() => {
    let timerID: any;
    posted && !isLoading
      ? (timerID = setTimeout(() => navigation.goBack(), 200))
      : null;

    return () => clearTimeout(timerID);
  }, [posted, isLoading, navigation]);

  const handlePostThread = () => {
    dispatch(postThread());
    setPosted(true);
  };

  return (
    <Pressable
      disabled={isLoading || !inputThread.caption}
      onPress={handlePostThread}
      style={styles.postBtn}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color="white" />
      ) : (
        <Text style={styles.postBtnTxt}>Post</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  postBtn: {
    width: 80,
    aspectRatio: 80 / 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 30,
  },
  postBtnTxt: {
    fontSize: 16,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Inter-Medium',
  },
});

export default PostThreadButton;
