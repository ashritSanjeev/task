import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { isEmpty } from 'lodash';
import { Button, Box, Input, Heading, Text } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { routes } from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const prodHome = (props: any) => {
  const { navigation } = props;
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail('');
    setName('');
    setNumber('');
  }, []);

  const storeData = async (uname: any, email: any, num: any) => {
    try {
      await AsyncStorage.setItem('@userName', uname);
      await AsyncStorage.setItem('@email', email);
      await AsyncStorage.setItem('@num', num);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Heading size={'2xl'} alignSelf={'center'}>Hii..</Heading>
      <Box borderColor={'dark.50'} borderWidth={hp('1%')}>
        <Heading color={'amber.700'} alignSelf={'center'}>Kindly enter your details to continue..</Heading>
        <Box width={hp('50%')} alignSelf={'center'} margin={'5'}>
          {/* <Text fontSize={'md'}>Name</Text> */}
          <Input
            keyboardType={'name-phone-pad'}
            alignSelf={'center'}
            size={'lg'}
            leftElement={<MaterialIcons name={'person'} size={hp('2.5%')} />}
            placeholder={'Name'}
            borderColor={'blueGray.200'}
            borderWidth={hp('.2%')}
            width={wp('90%')}
            onChangeText={(value: string) => { setName(value); }}
          />
        </Box>
        <Box width={hp('50%')} alignSelf={'center'} margin={'5'}>
          {/* <Text fontSize={'md'}>Phone</Text> */}
          <Input
            width={wp('90%')}
            keyboardType={'number-pad'}
            maxLength={10}
            alignSelf={'center'}
            size={'lg'}
            leftElement={<MaterialIcons name={'phone'} size={hp('2.5%')} />}
            placeholder={'Phone Number'}
            borderColor={'blueGray.200'}
            borderWidth={hp('.2%')}
            onChangeText={(value: string) => { setNumber(value); }}
          />
        </Box>
        <Box width={hp('50%')} alignSelf={'center'} margin={'5'}>
          {/* <Text fontSize={'md'}>Email</Text> */}
          <Input
            width={wp('90%')}
            keyboardType={'email-address'}
            alignSelf={'center'}
            size={'lg'}
            leftElement={<MaterialIcons name={'email'} size={hp('2.5%')} />}
            placeholder={'Email'}
            borderColor={'blueGray.200'}
            borderWidth={hp('.2%')}
            onChangeText={(value: string) => { setEmail(value); }}
          />
        </Box>
      </Box>
      <Button
        variant={'solid'}
        bg={'emerald.800'}
        alignSelf={'center'}
        flexDirection={'row'}
        width={wp('50%')}
        marginTop={hp('5%')}
        isDisabled={isEmpty(name) || isEmpty(number) || isEmpty(email)}
        onPress={() => {
          navigation.navigate(routes.tabs, { name: name, email: email, number: number });
          storeData(name, email, number);
        }}
      >
        Go
      </Button>
    </View>
  )
}

export default prodHome;
