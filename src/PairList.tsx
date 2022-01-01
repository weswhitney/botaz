import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});


const PairList = () => {
  const [data, setData] = useState([]);

  const fetchShoePairs = async () => {
    try {
      const response = await fetch('http://localhost:3000/shoe-posts')
      const json = await response.json()
      setData(json.shoePosts)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    fetchShoePairs()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.brand_id} {item.condition} {item.size}</Text>}
      />
    </View>
  );
}

export default PairList;
