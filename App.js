import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import fetchFromApi from './api';
import Header from './Header';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchFromApi();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>{data.title}</Text>
      <Image source={{ uri: data.url }} style={{ width: 600, height: 600 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B3D91',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: 400,
    height: 400,
    
  },
})



