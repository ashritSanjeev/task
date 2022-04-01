import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Box, Heading } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { isEmpty } from 'lodash';

const home = () => {
  const [username, setUserName] = useState('')
  const getData = async () => {
    try {
      let uname = await AsyncStorage.getItem('@userName');
      // return uname;
      if (uname !== null) {
        setUserName(uname);
      }
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {!isEmpty(username) &&
        <React.Fragment>
          <MaterialIcons name='person' size={hp('5%')} style={{ alignSelf: 'center', color: 'lightgray' }} />
          <Box
            alignSelf={'center'}
            width={wp('90%')}
            bg={'coolGray.300'}
            height={hp('20%')}
            justifyContent={'center'}
          >
            <Heading color={'blueGray.400'} alignSelf={'center'}>Welcome {username}</Heading>
            <Heading color={'blueGray.400'} alignSelf={'center'}>Please Explore the app to know more</Heading>
          </Box>
        </React.Fragment>
      }
    </View>
  )
}

export default home;
