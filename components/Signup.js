import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
  KeyboardAvoidingView,
} from 'react-native';
import background from '../assets/images/background.jpg';
import Logo from './logo';
import { Actions } from 'react-native-router-flux';

export default class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      repassword: ''
    }
  }
  goBack() {
    Actions.pop();
  }

  updatevalue(text, field) {
    
    if (field === 'name') {
      console.log("text :: ",text,field)
      this.setState({
        name: text
      })
      
    }
    else if (field == 'email') {
      console.log("text :: ",text,field)
      this.setState({
        email: text
      })
      console.log("text :: ",this.state.name)
    }
    else if (field == 'password') {
      console.log("text :: ",text,field)
      this.setState({
        password: text
      })
    }
    else if (field == 'repassword') {
      console.log("text :: ",text,field)
      if (this.state.password !== text) {
        console.log("password is not same");
      }
      else {
        this.setState({
          repassword: text
        })
      }
    }
  }
  async submitForm() {
    console.log("please enter value",this.state);
    let data = {};
    data.name = this.state.name;
    data.email = this.state.email;
    data.password = this.state.password;
    data.state = 0;
    if (this.state) {
      if (this.state.password == this.state.repassword) {
        await AsyncStorage.setItem('reg', JSON.stringify(data)),
          Actions.pop();
      }
      else {
        console.log("password is not same");
      }
    }
    else {
      console.log("please enter value");
    }
  }
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <ImageBackground source={background} style={styles.ImageBackgroundcontainer}>
          <View style={styles.container}>
            <View style={styles.Logocontainer}>
              <Logo />
            </View>
            <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'name')} placeholder="Full Name" placeholderTextColor="#ad905e" />
            <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'email')} placeholder="Email" placeholderTextColor="#ad905e" />
            <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'password')} secureTextEntry={true} placeholder="Password " placeholderTextColor="#ad905e" />
            <TextInput style={styles.inputbox} onChangeText={(text) => this.updatevalue(text, 'repassword')} secureTextEntry={true} placeholder="Re-Password " placeholderTextColor="#ad905e" />
            <TouchableOpacity style={styles.button} onPress={()=>this.submitForm()}  >
              <Text style={styles.buttontext}>Register</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <Text style={styles.signupcon}>Already have an account ? </Text>
            <TouchableOpacity onPress={this.goBack}><Text style={styles.signupbutton}>Login</Text></TouchableOpacity>
          </View>

        </ImageBackground >
      </KeyboardAvoidingView>




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
    marginVertical: 300

  },
  Logocontainer: {
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 100

  },
  signup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "flex-end",
    marginVertical: 40,
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