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
  AsyncStorage

} from 'react-native';

import Logo from './logo';
import background from '../assets/images/background.jpg';
import { Actions } from 'react-native-router-flux';

export default class Register extends React.Component {

  result = {};
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
      value: ''
    }
    AsyncStorage.getItem('reg', (e, result) => {
      if (result) {
        this.setState({ value: JSON.parse(result) })
        console.log("this.state",this.state.value)
        if (this.state.value.state == 1) {
          Actions.dashboard1();
        }
      }
    });
  }

  updatevalue(text, field) {
    if (field == 'email') {
      this.setState({
        email: text
      })
    }
    else if (field == 'password') {
      this.setState({
        password: text
      })
    }
  }
  signup() {
    Actions.register();
  }
  async dashboard() {
    console.log("this.result", this.state.value)
    if (this.state.value.email) {
      if (this.state.email === this.state.value.email && this.state.password === this.state.value.password) {
        var abc = {}
        abc.name = this.state.value.name;
        abc.email = this.state.value.email;
        abc.password = this.state.value.password;
        abc.state = 1
        await AsyncStorage.setItem('reg', JSON.stringify(abc));
        Actions.dashboard();
      }
      else if (this.state.email != this.state.value.email) {
        console.log("email doesn't exist", this.state.email)
        console.log("email doesn't exist", this.state.value.email)
      }
      else if (this.state.password != this.state.value.password) {
        console.log("password is wrong")
      }
    }
    else {
      console.log("No user found, Please register")
    }
  }

  async get(key) {
    return await AsyncStorage.getItem(key);
  }
  async getSession() {
    this.get('reg').then(result => {
      this.result = JSON.parse(result);
    })
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.ImageBackgroundcontainer}>
        <View style={styles.container}>
          <View style={styles.Logocontainer}>
            <Logo />
          </View>
          <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'email')} placeholder="Email" placeholderTextColor="#ad905e" onSubmitEditing={() => this.password.focus()} />
          <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'password')} secureTextEntry={true} placeholder="Password " ref={(input) => this.password = input} placeholderTextColor="#ad905e" />
          <TouchableOpacity style={styles.button} onPress={() => this.dashboard()} >
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.txt}>Authorized by the QFC Regulatory Authority  </Text>
        </View>
        <View style={styles.signup}>
          <Text style={styles.signupcon}>Dont have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}><Text style={styles.signupbutton}>Signup</Text></TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 200
  },
  Logocontainer: {
    justifyContent: 'center',
    alignItems: "center",
  },
  signup: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: "flex-end",
    marginVertical: 50,
    flexDirection: 'row'
  },
  signupcon: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  txt: {
    color: '#ad905e',
    fontSize: 20,
    marginVertical: 50,
    width: 300,
    justifyContent: 'center',
    alignItems: "flex-end",
    textAlign: 'center'
  },
  signupbutton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800'
  },
  inputbox: {
    width: 350,
    height: 60,

    borderColor: 'grey',
    backgroundColor: "#1b1b1b",
    borderWidth: 2,
    paddingHorizontal: 16,
    marginVertical: 10,
    fontSize: 18,
    color: '#ad905e'
  },
  button: {
    width: 350,
    height: 60,
    backgroundColor: '#ad905e',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 12
  },
  buttontext: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Arial',
    color: 'white'
  }
});
