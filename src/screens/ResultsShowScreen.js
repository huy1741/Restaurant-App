import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';
import ResultsDetail from '../components/ResultsDetail';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    
    const [result, setResult]= useState(null);
    
    const getResult=async(id)=>{
        const respond = await yelp.get(`/${id}`);
        setResult(respond.data)
        
    };
    
    useEffect(()=>{
        getResult(id);
    },[]);
    
    if(!result){
        return null;
    }
    
    return (
       <View>
           <Text>{result.name}</Text>
           <FlatList 
           data={result.photos}
           keyExtractor={(photo)=>photo}
           renderItem={({item})=>{ 
            return <Image style={styles.image} source={{uri : item}}></Image>}}>
        </FlatList>
       </View> 
    );
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        margin: 5,
        borderRadius: 5
    }
})
export default ResultsShowScreen;