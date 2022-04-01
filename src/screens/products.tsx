import { View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { Box, Heading } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import UserStyles from '../userStyles';
import ProdDetails from './prodDetails';
import { getProducts } from '../store/productReducer/actions';

const products = () => {
  const userState = useSelector((state: RootState) => state.product);
  const { categories } = userState;
  const dispatch = useDispatch();
  const [showModal, setShowModal ] = useState(false);
  const [selectedVal, setSelectedVal] = useState('')

  const onSelectedCat= (key:any) => {
    setSelectedVal(key);
    setShowModal(true);
    dispatch(getProducts(key))
  }

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Heading alignSelf={'center'}>Please Select a category to see the Details</Heading>
      <ScrollView>
      <Box alignSelf={'center'}  width={wp('90%')}>
        {
          categories.map((val:any) => {
            return(
              <TouchableOpacity
                onPress={() => {onSelectedCat(val)}}
              >
              <Box bg={'orange.100'} borderColor={'dark.100'} borderWidth={.8} margin={5} borderRadius={10}>
              <Heading margin={hp('2%')} alignSelf={'center'}>{val}</Heading>
              </Box>
              </TouchableOpacity>
            )
          })
        }
      </Box>
      </ScrollView>
      <ProdDetails
        showModal={showModal}
        setShowModal={setShowModal}
        selectedVal={selectedVal}
        userState={userState}
      />
    </View>
  )
}

export default products;
