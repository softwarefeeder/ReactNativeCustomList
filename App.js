import React from 'react';
import CustomListview from './listComponents/CustomListview'

import {
  StyleSheet,
  View
} from 'react-native';

export default class App extends React.Component{

  /* Return object for populate the list */
  getData() {
    return [
      {
        key: 1, title: 'Text1',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        key: 2,
        title: 'Text2',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        key: 3, title: 'Text3',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        key: 4,
        title: 'Text4',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        key: 5, title: 'Text5',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      {
        key: 6,
        title: 'Text6',
        image_url: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
      },
      
    ]
  }


  render() {
    return (
      <View style={styles.container}>
        <CustomListview
          itemList={this.getData()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  }
});



