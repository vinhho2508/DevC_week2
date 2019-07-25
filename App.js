import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const feedData = [
  {
    id: 1,
    name: 'CoderSchool',
    image: require('./assets/image.png'),
    likeCount: 128,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 2,
    name: 'Whoami',
    image: require('./assets/image.png'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 3,
    name: 'A',
    image: require('./assets/image.png'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
  {
    id: 4,
    name: 'B',
    image: require('./assets/image.png'),
    likeCount: 20,
    avatar: require('./assets/avatar.jpg')
  },
];
export default function App() {
  return (
    
    <View style={styles.container}>
     <View
        style={{
            flexDirection: 'row',
            backgroundColor: '#f3f6fa',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}

      > 
      <View  />
      <Image

            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
            }}
            style={{
              flex: 1,
              width: null,
              height: 44
            }}
            resizeMode="contain"

      />
       <Feather name="inbox" size={27} color="black" style={{marginRight:30}}/>
       </View>
    <ScrollView>
      
      {
        feedData.map(feed=>{
          return (
            <View key={feed.id}>
              <View style={styles.userInfo}>
              <Image source={require('./assets/avatar.jpg')} style={{width:70, height:70, borderRadius:80}}/>
              <Text style={{fontSize:15, fontWeight:'500'}}>{feed.name}</Text>
              </View>
              <View style={{height: 300}}>
                  <Image source={feed.image} style={{flex: 1, width: null, height: null}} resizeMode="cover"/>
              </View>
              <View style={{flex:1, flexDirection:'row', marginVertical:10, justifyContent:'space-between'}}>
                <Text>
                  {feed.likeCount} likes
                </Text>
                <Feather name='heart' size={27} color ='black' onPress={() => alert("Liked")}/>
                <Feather name='messag-square' size={27} color ='black' onPress={() => alert("Liked")}/>
                <Feather name='share' size={27} color ='black' onPress={() => alert("Liked")}/>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50,
  },
  userInfo:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginHorizontal:12,
    marginVertical:7
  },
  
});
