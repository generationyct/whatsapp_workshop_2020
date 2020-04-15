import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, View, StyleSheet} from 'react-native';
import ChatItem from '../components/ChatItem';
import ApplicationStyles from '../styles/appstyles';
import {getChats} from '../services/api';

export default ({navigation}) => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const result = await getChats();
    setChats(result);
  };
  useEffect(() => {
    fetchChats();
  }, [chats]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={chats}
        renderItem={({item}) => (
          <ChatItem {...item} navigate={navigation.navigate} />
        )}
        keyExtractor={item => `message-${item.id}`}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...ApplicationStyles,
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, .1)',
  },
});
