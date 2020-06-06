import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import { ListItem } from 'react-native-elements'

const { width } = Dimensions.get("window");

export default class Dashboard extends React.Component {
  state = {
    active: 0,
    xTabOne: 0,
    xTabTwo: 0,
    translateX: new Animated.Value(0),
    translateXTabOne: new Animated.Value(0),
    translateXTabTwo: new Animated.Value(width),
    translateY: -1000
  };

  handleSlide = type => {
    let {
      active,
      translateX,
      translateXTabOne,
      translateXTabTwo
    } = this.state;
    Animated.spring(translateX, {
      toValue: type,
      duration: 100
    }).start();
    if (active === 0) {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: 0,
          duration: 100
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: width,
          duration: 100
        }).start()
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translateXTabOne, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translateXTabTwo, {
          toValue: 0,
          duration: 100
        }).start()
      ]);
    }
  };

  render() {
    let {
      xTabOne,
      xTabTwo,
      translateX,
      active,
      translateXTabOne,
      translateXTabTwo,
      translateY
    } = this.state;
    const list = [
      {
        title: 'Account Balance',
        icon: 'attach-money',
        amount: 100000
      },
      {
        title: 'Alternative Investment',
        icon: 'control-point',
        amount: 4000000
      },
      {
        title: 'Deposit',
        icon: 'money-off',
        amount: 5000000
      },
      {
        title: 'Securities',
        icon: 'security',
        amount: 2000000
      },
    ]

    const list1 = [
      {
        title: 'Loan',
        icon: 'av-timer',
        amount: 100000
      },
      {
        title: 'Past Dues',
        icon: 'history',
        amount: 4000000
      }
    ]

    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 40,
              marginBottom: 20,
              height: 36,
              position: "relative"
            }}
          >
            <Animated.View
              style={{
                position: "absolute",
                width: "50%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: '#ad905e',
                borderRadius: 4,
                transform: [
                  {
                    translateX
                  }
                ]
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: '#ad905e',
                borderRadius: 4,
                borderRightWidth: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0
              }}
              onLayout={event =>
                this.setState({
                  xTabOne: event.nativeEvent.layout.x
                })
              }
              onPress={() =>
                this.setState({ active: 0 }, () =>
                  this.handleSlide(xTabOne)
                )
              }
            >
              <Text
                style={{ color: active === 0 ? "#fff" : '#ad905e', fontSize: 18, fontWeight: '600' }}>Assets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: '#ad905e',
                borderRadius: 4,
                borderLeftWidth: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0
              }}
              onLayout={event =>
                this.setState({
                  xTabTwo: event.nativeEvent.layout.x
                })
              }
              onPress={() =>
                this.setState({ active: 1 }, () =>
                  this.handleSlide(xTabTwo)
                )
              }
            >
              <Text style={{ color: active === 1 ? "#fff" : '#ad905e', fontSize: 18, fontWeight: '600' }}>Liability</Text>
            </TouchableOpacity>
          </View>

          <ScrollView>
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  {
                    translateX: translateXTabOne
                  }
                ]
              }}
              onLayout={event =>
                this.setState({
                  translateY: event.nativeEvent.layout.height
                })
              }
            >
              <View>
                {
                  list.map((item, i) => (
                    <ListItem style={{ width: 400 }}
                      key={i}
                      title={item.title}
                      subtitle={item.amount}
                      leftIcon={{ name: item.icon, color: '#ad905e' }}
                      bottomDivider
                      chevron={{ color: '#ad905e' }}
                      onPress={() => alert("hello" + i)}
                    />
                  ))
                }
              </View>
            </Animated.View>
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                transform: [
                  {
                    translateX: translateXTabTwo
                  },
                  {
                    translateY: -translateY
                  }
                ]
              }}>
              <View>
                {
                  list1.map((item, i) => (
                    <ListItem style={{ width: 400 }}
                      key={i}
                      title={item.title}
                      subtitle={item.amount}
                      leftIcon={{ name: item.icon, color: '#ad905e' }}
                      bottomDivider
                      chevron={{ color: '#ad905e' }}
                      onPress={() => alert("hello" + i)}
                    />
                  ))
                }
              </View>
            </Animated.View>
          </ScrollView>
        </View>
      </View>
    );
  }
}