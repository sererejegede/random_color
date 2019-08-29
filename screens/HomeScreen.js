import React, {useReducer} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import ChangesButton from "../components/ChangesButton";

const INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case 'r':
      return (state.r + action.payload > 256 || state.r + action.payload < 0) ? state : {
        ...state,
        r: state.r + action.payload
      };
    case 'g':
      return (state.g + action.payload > 256 || state.g + action.payload < 0) ? state : {
        ...state,
        g: state.g + action.payload
      };
    case 'b':
      return (state.b + action.payload > 256 || state.b + action.payload < 0) ? state : {
        ...state,
        b: state.b + action.payload
      };
  }
};


const HomeScreen = () => {

  const [state, dispatch] = useReducer(reducer, {r: 0, g: 0, b: 0});

  return (
      <View style={styles.container}>
        <Text style={styles.headerStyle}>Home Screen</Text>
        <Text>background-color: {`rgb(${state.r},${state.g},${state.b})`}</Text>
        <View style={{...styles.viewBox, backgroundColor: `rgb(${state.r},${state.g},${state.b})`}}/>
        <View style={styles.buttonContainer}>
          <ChangesButton
              style={styles.buttonLeft}
              title="- Red"
              performAction={() => dispatch({type: 'r', payload: -1 * INCREMENT})}
          />
          <ChangesButton
              style={styles.buttonRight}
              title="+ Red"
              performAction={() => dispatch({type: 'r', payload: INCREMENT})}
          />
          <ChangesButton
              style={styles.buttonLeft}
              title="- Green"
              performAction={() => dispatch({type: 'g', payload: -1 * INCREMENT})}
          />
          <ChangesButton
              style={styles.buttonRight}
              title="+ Green"
              performAction={() => dispatch({type: 'g', payload: INCREMENT})}
          />
          <ChangesButton
              style={styles.buttonLeft}
              title="- Blue"
              performAction={() => dispatch({type: 'b', payload: -1 * INCREMENT})}
          />
          <ChangesButton
              style={styles.buttonRight}
              title="+ Blue"
              performAction={() => dispatch({type: 'b', payload: INCREMENT})}
          />
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  headerStyle: {
    padding: 15,
    fontSize: 24,
    textAlign: 'center'
  },
  viewBox: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignContent: 'center'
  },
  buttonLeft: {
    width: 60,
    height: 20,
    paddingLeft: 15,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    backgroundColor: "#892830"
  },
  buttonRight: {
    width: 60,
    height: 20,
    paddingRight: 15,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#892830"
  }
});

export default HomeScreen;