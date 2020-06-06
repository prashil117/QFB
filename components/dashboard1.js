import React from 'react';
import { Platform, StyleSheet, ScrollView, Text, View, Image, ImageBackground } from 'react-native';

import CardView from 'react-native-cardview';
import NumberFormat from 'react-number-format';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import background from '../assets/images/dashboard.jpg';
export default class Dashboard1 extends React.Component {

    render() {

        return (
            <ImageBackground source={background} style={styles.ImageBackgroundcontainer} imageStyle={{ opacity: 0.4 }}>

                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 50 }}>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle1}>
                            <View >
                                <Image style={styles.im} source={require('../assets/images/account-balance.png')} />
                                <Text style={styles.cardView_InsideText}> A/C Balance</Text>
                                <NumberFormat value={1000000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle2}>
                            <View >
                                <Image style={styles.im} source={require('../assets/images/investment.png')} />
                                <Text style={styles.cardView_InsideText}>Investments</Text>
                                <NumberFormat value={2050000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle1}>
                            <View >
                                <Image style={styles.im} source={require('../assets/images/deposit.png')} />
                                <Text style={styles.cardView_InsideText}>Deposit</Text>
                                <NumberFormat value={3000000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle2}>
                            <View >
                                <Image style={styles.im} source={require('../assets/images/security.png')} />
                                <Text style={styles.cardView_InsideText}>securities</Text>
                                <NumberFormat value={5000000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle3}>
                            <View >
                                <Image style={styles.im} source={require('../assets/images/loan.png')} />
                                <Text style={styles.cardView_InsideText}>Loan</Text>
                                <NumberFormat value={6500000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                        <CardView
                            cardElevation={40}
                            cardMaxElevation={40}
                            cornerRadius={40}
                            style={styles.cardViewStyle4}>
                            <View style={styles.cent} >
                                <Image style={styles.im} source={require('../assets/images/past-due.png')} />
                                <Text style={styles.cardView_InsideText}>Past Dues</Text>
                                <NumberFormat value={2500000} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value => <Text style={styles.cardView_InsideText}>{value}</Text>} />
                            </View>
                        </CardView>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    ImageBackgroundcontainer: {
        flex: 1,
        height: null,
        width: null,

    },
    MainContainer: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'wheat'
    },

    cardViewStyle1: {
        flexDirection: "row",
        width: 180,
        textAlign: 'center',
        height: 150,
        borderRadius: 1,
        borderEndColor: 'grey',
        borderBottomColor: 'grey',
        borderEndWidth: 1,
        borderBottomWidth: 1,
        marginLeft: 25,
        marginRight: 0,

    },
    cardViewStyle2: {
        flexDirection: "row",
        width: 180,
        textAlign: 'center',
        height: 150,
        borderRadius: 1,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 0,
        marginRight: 0,

    },
    cardViewStyle3: {
        flexDirection: "row",
        width: 180,
        textAlign: 'center',
        height: 150,
        borderRadius: 1,
        borderEndColor: 'grey',
        borderEndWidth: 1,
        marginLeft: 25,
        marginRight: 0,

    },
    cardViewStyle4: {
        flexDirection: "row",
        width: 180,
        textAlign: 'center',
        height: 150,
        borderRadius: 1,
        marginLeft: 0,
        marginRight: 0,

    },
    cardView_InsideText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: 40

    },
    im: {
        height: 70,
        width: 70,
        justifyContent: 'center',
        marginLeft: 55,
        marginTop: 10,
        marginBottom: 10
    }
});