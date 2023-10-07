import React, {useState} from 'react';
import {Pressable, Text, TextInput} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCaption, updateTags} from '../redux/threads/threadsSlice';
import {RootState} from '../redux/store';
import {colors, sizes} from '../constants/theme';

const CreateThreadPost = () => {
  const [tag, setTag] = useState('');
  const dispatch = useDispatch();
  const {
    inputThread: {caption, tags},
  } = useSelector<RootState>(state => state.threadsReducer);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Create</Text>
        <TextInput
          value={caption}
          onChangeText={val => dispatch(updateCaption(val))}
          placeholder="What’s on your mind?"
          placeholderTextColor={colors.placeholder}
          cursorColor={colors.cursor}
          style={styles.createInput}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Add Tags</Text>
        <View style={styles.inputBtnContainer}>
          <TextInput
            value={tag}
            onChangeText={setTag}
            cursorColor={colors.cursor}
            placeholder="Write tags"
            placeholderTextColor={colors.placeholder}
            style={styles.addInput}
          />
          {tag.length > 0 && (
            <Pressable
              onPress={() => {
                dispatch(updateTags('#' + tag));
                setTag('');
              }}>
              <Text style={styles.inputBtn}>Add</Text>
            </Pressable>
          )}
        </View>
      </View>
      {tags.length > 0 && (
        <View style={styles.tagsContainer}>
          {tags.map((tag: string, index: number) => (
            <View key={index?.toString()} style={styles.tagContainer}>
              <Text style={styles.tag}>{tag}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.primary,
    padding: 22,
  },
  inputContainer: {
    marginTop: 30,
  },
  title: {
    fontSize: sizes.h1,
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    color: 'white',
    marginBottom: 15,
  },
  createInput: {
    fontFamily: 'Inter-Light',
    fontSize: sizes.h1,
    color: colors.caption,
    fontWeight: '300',
  },
  addInput: {
    fontFamily: 'Inter-Regular',
    textAlignVertical: 'center',
    fontSize: sizes.h1,
    color: colors.caption,
    fontWeight: '400',
    width: '86%',
  },
  inputBtnContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 10,
  },
  inputBtn: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  tagContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: colors.tertiary,
    marginRight: 16,
    marginTop: 10,
  },
  tag: {
    fontSize: 10,
    alignItems: 'center',
    color: colors.tag,
  },
});

export default CreateThreadPost;
