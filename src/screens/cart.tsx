import { ScrollView, View } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Avatar, Box, Button, Heading, Text } from 'native-base';
import { AirbnbRating } from 'react-native-ratings';
import { isEmpty } from 'lodash';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const cart = () => {
    const userState = useSelector((state: RootState) => state.product);
    const { masterList } = userState
    let total = 0;
    return (
        <View style={{ flex: 1, paddingBottom: hp('3%') }}>
            <ScrollView showsVerticalScrollIndicator>
                {!isEmpty(masterList) ? <React.Fragment>
                    {masterList[0].map((val: any) => {
                        total = total + val?.price;
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
                                    <Avatar source={{ uri: val?.image }} size={'2xl'} />
                                    <Text fontWeight={'bold'} alignSelf={'center'}>Price:&nbsp;₹{val?.price}</Text>
                                </Box>
                                <Box width={wp('60%')} padding={2} textAlign={'justify'} alignSelf={'center'}>
                                    <Text fontWeight={'bold'} fontFamily={'mono'}>{val?.description}</Text>
                                </Box>
                                <Text fontWeight={'bold'} alignSelf={'center'}>Ratings:</Text>
                                <Box justifyContent={'center'}>
                                    <AirbnbRating
                                        count={4}
                                        defaultRating={val?.rating?.rate}
                                        size={hp('2%')}
                                        showRating={false}
                                    />
                                </Box>
                            </Box>
                        )
                    })
                    }
                </React.Fragment> :
                    <Box justifyContent={'center'} flex={'1'} marginTop={hp('20%')}>
                        <MaterialIcons
                            name={'hourglass-empty'}
                            size={hp('7%')}
                            style={{ alignSelf: 'center' }}
                            color={'lightgray'}
                        />
                        <Heading alignSelf={'center'} color={'lightgray'}>
                            sorry there are no items in your cart at this moment
                        </Heading>
                    </Box>
                }
            </ScrollView>
            {!isEmpty(masterList[0]) &&
                <Box
                    alignSelf={'center'}
                    borderColor={'trueGray.500'}
                    borderWidth={2}
                    width={wp('97%')}
                    bg={'warning.50'}
                    borderRadius={15}
                    padding={3}
                >
                    <Text alignSelf={'center'}>
                        Toatal price: &nbsp;{total}
                    </Text>
                    <Button
                        variant={'outline'}
                        borderColor={'yellow.600'}
                        width={wp('40%')}
                        alignSelf={'center'}
                    >
                        Buy
                    </Button>
                </Box>
            }
        </View>
    )
}

export default cart;
