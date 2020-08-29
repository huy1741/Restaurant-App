import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
       <View style={styles.background}>
           <Feather name="search" size={30} style={styles.iconStyle}/>
           <TextInput 
           autoCapitalize="none"
           autoCorrect={false}
           placeholder="Search"
           style={styles.inputStyle}
           onChangeText={onTermChange}
           onEndEditing={onTermSubmit}/>
       </View> 
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor:'#F0EEEE',
        top: 15,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
        
    },
    inputStyle:{
        fontSize:18,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});
export default SearchBar;