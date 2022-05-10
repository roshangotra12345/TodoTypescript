import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';

type MapItems = {
  address: {
    street: string;
  };
  company: {};
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  street: string;
};

const AppApi = () => {
  const [first, setFirst] = useState<MapItems[]>([]);
  console.log('Roshan');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data, 'data m hai kuch ');
        setFirst(data);
      });
  }, []);

  return (
    <View>
      <Text>Test Api</Text>
      <View>
        {first?.map((item: MapItems) => {
          return (
            <>
              <Text>{item.name}</Text>
              <Text>{item.phone}</Text>
              <Text>{item.address.street}</Text>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default AppApi;

const styles = StyleSheet.create({});
