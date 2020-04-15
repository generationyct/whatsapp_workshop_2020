import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from './Avatar';

export default ({title, description, user, navigate, userId}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('ChatViewScreen', {userId, title })}
      style={styles.chatItem}>
      <Avatar src={user.avatarUrl} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>{description}</Text>
      </View>
      <View style={styles.navLabel}>
        <Text style={styles.label}>Yesterday</Text>
        <Icon style={styles.arrow} name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 24,
    marginLeft: 24,
  },
  content: {
    flex: 5,
  },
  navLabel: {
    flex: 2,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
  },
  label: {
    color: 'rgba(255,255,255,.5)',
  },
  arrow: {
    color: 'rgba(255,255,255,.5)',
  },
});
