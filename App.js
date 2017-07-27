import React from 'react';
import {Alert, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet} from "react-native";
import Swiper from "react-native-deck-swiper";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
          ref='swiper'
          cards={['Test1','Test2']}
          renderCard={(card) => {
            return (
              <View style={styles.cardContainer}>

                <Text> {card} </Text>

                <View style={styles.cardButtonContainer}>
                  <TouchableHighlight
                    onPress={() => Alert.alert('I work')}>
                    <Text> {'TH1'} </Text>

                  </TouchableHighlight>

                  <TouchableOpacity
                    onPress={() => Alert.alert('I work')}>
                    <Text> {'TO2'} </Text>

                  </TouchableOpacity>

                  <TouchableWithoutFeedback
                    onPress={() => Alert.alert('I work')}>
                    <View>
                      <Text> {'TWF3'} </Text>
                    </View>

                  </TouchableWithoutFeedback>
                  <TouchableHighlight
                    onPressOut={() => Alert.alert('I work')}>
                    <Text> {'TH4'} </Text>

                  </TouchableHighlight>

                  <TouchableOpacity
                    onPressOut={() => Alert.alert('I work')}>
                    <Text> {'TO5'} </Text>

                  </TouchableOpacity>

                  <TouchableWithoutFeedback
                    onPressOut={() => Alert.alert('I work')}>
                    <View>
                      <Text> {'TWF6'} </Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            )
          }}
          cardIndex={0}
        >
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: '94%',
    height: 360,
    paddingBottom: 10,
    borderRadius: 6,
    shadowOffset: {width: -0.5, height: 0.5},
    shadowColor: 'black',
    shadowOpacity: 0.85,
    shadowRadius: 1,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    alignSelf: 'center',
  },
  cardButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  }
});
