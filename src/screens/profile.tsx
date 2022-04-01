import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Divider, Heading, Text } from 'native-base';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const profile = () => {
  const [ username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const getData = async () => {
    try {
        let uname:any = await AsyncStorage.getItem('@userName');
        let num:any = await AsyncStorage.getItem('@num')
        let em:any = await AsyncStorage.getItem('@email')
        // return uname;
        if (uname !== null && em != null && num != null) {
            setUserName(uname);
            setNumber(num);
            setEmail(em);
        }
    } catch (e) {
        // error reading value
    }
}

  useEffect(() => {
      getData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Box
        justifyContent={'center'}
        bg={'amber.200'}
        style={{elevation: heightPercentageToDP('1%')}}
      >
        <Avatar
          alignSelf={'center'}
          size={heightPercentageToDP('20%')}
          source={{uri: 'https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg'}}/>
        <Box
          marginTop={3}
          flexDirection={'row'}
          alignSelf={'center'}
          justifyContent={'center'}
        >
          <Text
            flex={.9}
            fontSize={'lg'}
            alignSelf={'center'}
            fontWeight={'bold'}
          >
            Name: &nbsp;{username}
          </Text>
        </Box>
        <Box
          marginTop={3}
          flexDirection={'row'}
          alignSelf={'center'}
          justifyContent={'center'}
        >
          <Text
            flex={.9}
            fontSize={'lg'}
            alignSelf={'center'}
            fontWeight={'bold'}
          >
            Email ID: &nbsp;{email}
          </Text>
        </Box>
        <Box
          marginTop={3}
          flexDirection={'row'}
          alignSelf={'center'}
          justifyContent={'center'}
        >
          <Text
            flex={.9}
            fontSize={'lg'}
            alignSelf={'center'}
            fontWeight={'bold'}
          >
            UserId: &nbsp;{`user#`+number.substring(5)}
          </Text>
        </Box>
      </Box>
      <Divider bg={'blue.400'}/>
      <Heading color={'blueGray.400'} alignSelf={'center'} marginTop={heightPercentageToDP('10%')}>Thank you</Heading>
    </View>
  )
}

export default profile;
