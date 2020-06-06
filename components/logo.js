import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image
} from 'react-native';


export default class Logo extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <Image style={styles.stretch}
             source={require('../assets/images/qfb-logo-white.png')}/>
             </View>
        )
    }
}
const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'center',
    alignItems:"center",
  },
  stretch: {
    width: 250,
    height: 100,
    resizeMode: 'stretch',
  },
});
