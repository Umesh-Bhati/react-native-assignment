import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {IThread} from '../types/models';
import {colors, sizes} from '../constants/theme';

const ThreadPostCard: FC<IThread> = ({
  userName,
  isVerified = false,
  caption = '',
  tags = [],
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.name}>{userName}</Text>
        {isVerified && (
          <Icon name="checkcircle" size={15} color={colors.secondary} />
        )}
      </View>
      {!!caption && <Text style={styles.threadMsg}>{caption}</Text>}
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <View key={index?.toString()} style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ThreadPostCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 22,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: 'white',
    marginRight: 14,
    textTransform: 'capitalize',
  },
  threadMsg: {
    fontSize: sizes.h2,
    fontFamily: 'Inter-Light',
    fontWeight: '300',
    color: colors.caption,
    marginTop: 15,
    marginBottom: 30,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tagContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: colors.tertiary,
    marginRight: 16,
  },
  tag: {
    fontFamily: 'Inter-Light',
    fontSize: sizes.p,
    alignItems: 'center',
    color: colors.tag,
  },
});
