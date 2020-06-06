import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TextInput,
    TouchableOpacity,
    ImageBackground,
    AsyncStorage, Image

} from 'react-native';

import Logo from './logo';
import background from '../assets/images/welcome.png';
import { Actions } from 'react-native-router-flux';

export default class Weclome extends React.Component {


    signup() {
        Actions.login();
    }

    render() {
        return (
            <ImageBackground source={background} style={styles.ImageBackgroundcontainer}>
                <View style={styles.container}>
                    <View style={styles.Logocontainer}>
                        <Image style={styles.lgcont} source={require('../assets/images/qf-black.png')} />
                        <View style={styles.smcontainer}>
                            <Image style={{ height: 90, width: 90, marginHorizontal: 30 }} source={require('../assets/images/market.png')} />
                            <Image style={{ height: 90, width: 90 }} source={require('../assets/images/updates.png')} />
                            <Image style={{ height: 90, width: 90, marginHorizontal: 30, }} source={require('../assets/images/contact.png')} />
                        </View>
                        <View style={styles.smcontainer}>
                            <Text style={{ marginHorizontal: 25, fontSize: 16, fontWeight: '600', color: 'black' }}>Market News</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }} >QFB Updates</Text>
                            <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: '600', color: 'black' }}>Contact Us</Text>
                        </View>
                    </View>
                    <View style={styles.btnmargin}>
                        <TouchableOpacity style={styles.button} onPress={() => this.signup()} >
                            <Text style={styles.buttontext}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    ImageBackgroundcontainer: {
        flex: 1,
        height: null,
        width: null,
    },
    btnmargin:{
        marginTop:280
    },
    container: {
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 50
    },
    Logocontainer: {
        justifyContent: 'center',
        alignItems: "center",
    },
    lgcont: {
        height: 200,
        width: 200,
        resizeMode: 'stretch',
        marginLeft: 10,
        marginVertical: 45
    },
    smcontainer: {
        flexDirection: "row",
        marginVertical: 5
    },
    button: {
        width: 350,
        height: 60,
        backgroundColor: '#ad905e',
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: "center",
        paddingVertical: 12,


    },
    buttontext: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Arial',
        color: 'white'
    }
});
