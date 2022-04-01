import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { isEmpty } from 'lodash';
import { Avatar, Box, Button, Heading, Image, Modal, Spinner, Text } from 'native-base'
import { AirbnbRating } from 'react-native-ratings';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch } from 'react-redux';

import { updateMasterList } from '../store/productReducer/actions';
import { tmp } from '../constants';

const prodDetails = (props: any) => {
  const { showModal, setShowModal, selectedVal, userState } = props;
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)} size={'full'}
      closeOnOverlayClick={false}
    >
      <Modal.Content flex={1} >
        <Modal.CloseButton />
        <Modal.Header alignSelf={'center'} fontWeight={'semibold'} _text={{ color: 'yellow.900', alignSelf: 'center' }} width={wp('100%')}>
          {selectedVal}
        </Modal.Header>
        <Modal.Body>
          {!isEmpty(userState?.allProduct) ?
            <React.Fragment>
              {userState?.allProduct.map((val: any) => {
                return (
                  <Box
                    alignSelf={'center'}
                    borderColor={'blue.300'}
                    borderWidth={hp('.2%')}
                    borderRadius={10}
                    padding={5}
                    margin={5}
                    bg={'violet.50'}
                    justifyContent={'center'}
                    width={wp('85%')}
                    style={{ elevation: hp('1%') }}
                  >
                    <Heading>{val?.title}</Heading>
                    <Box flexDirection={'row'}>
                      <Avatar source={{ uri: val?.image }} size={'2xl'} alignSelf={'center'}/>
                      <Text fontWeight={'bold'} alignSelf={'center'}> Price:&nbsp;₹{val?.price}</Text>
                    </Box>
                    <Box width={wp('60%')} padding={2} alignSelf={'center'}>
                      <Text fontWeight={'bold'} fontFamily={'mono'} textAlign={'justify'}>{val?.description}</Text>
                    </Box>
                    <Text fontWeight={'bold'} alignSelf={'center'}>Ratings:</Text>
                    <Box justifyContent={'center'}>
                      <AirbnbRating
                        isDisabled={true}
                        count={4}
                        defaultRating={val?.rating?.rate}
                        size={hp('2%')}
                        showRating={false}
                      />
                    </Box>
                    <Text fontWeight={'bold'} alignSelf={'center'}>{val?.rating?.count} people rated this product</Text>
                    <Button
                      marginTop={2}
                      variant={'outline'}
                      rightIcon={<AntDesign name='shoppingcart' style={{ color: '#1890ff' }} size={26} />}
                      onPress={() => {
                        let temp: any = tmp
                        for (let i = 0; i < userState?.masterList?.length; i++) {
                          temp.push(val)
                        }
                        console.log('temp', temp)
                        dispatch(updateMasterList(temp))
                      }}
                    >
                      ADD TO
                    </Button>
                  </Box>
                )
              })
              }
            </React.Fragment> :
            <Box justifyContent={'center'}>
              <Spinner accessibilityLabel="Loading posts" color={'#F5A31A'} size={'lg'} alignSelf={'center'} />
            </Box>
          }
        </Modal.Body>
        <Modal.Footer justifyContent={'center'}>
          <Button
            onPress={() => {
              setShowModal(false);
            }}
            alignSelf={'center'}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default prodDetails;
