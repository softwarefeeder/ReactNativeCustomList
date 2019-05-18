import React from 'react';
import { View, ListView, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header_footer_style: {
        width: '100%',
        height: 45,
        flex:1,
        backgroundColor: '#606070',
      },
      textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
      },
});


const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
                
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    title={item.title}
                    image_url={item.image_url}
                    //dataSource to add data in the list
                   ListHeaderComponent={this.renderHeader}
                 //Header to show above listview
                 ListFooterComponent={this.renderFooter}
                />}
            />

    </View>
);

export default CustomListview;

renderHeader = () => {
    //View to set in Header
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> This is Header </Text>
      </View>
    );
  };
  renderFooter = () => {
    //View to set in Footer
    return (
      <View style={styles.header_footer_style}>
        <Text style={styles.textStyle}> This is Footer </Text>
      </View>
    );
  };