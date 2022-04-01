import { StyleSheet } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const UserStyles = StyleSheet.create({
    accordianContent: {
        justifyContent: 'center',
        marginLeft: wp('2%'),
        paddingTop: hp('4%')
    },
    userHeaders: {
        fontWeight: '700',
        fontSize: hp("3%"),
        marginLeft: wp('2%'),
        minWidth: wp('60%'),
        color: '#000000'
    },
    accordianSummary: {
        justifyContent: 'center',
        width: wp("90%"),
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: hp("2%")
    },

});

export default UserStyles;
