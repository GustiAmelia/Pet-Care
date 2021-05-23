import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchMainScreen = () => {
  return (
    <LinearGradient style={styles.container} colors={colors.backgroundSecondary}>
      <View style={styles.header}>
        <TouchableOpacity style={{alignSelf:'flex-end', marginRight:20,}}>
          <Icon name='search' size={25} color={colors.primary}/>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={{flex:1, paddingLeft:20}}>
          <Text style={styles.title}>What are you</Text>
          <Text style={styles.title}>looking for,<Text style={{color:colors.yellow}}> Maria ?</Text></Text>
        </View>
        <View style={{flex:4, paddingTop:20,}}>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/veterinary.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/grooming.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/pet_boarding.png')} style={styles.image}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/adoption.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/dog_walking.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/training.png')} style={styles.image}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/pet_taxi.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/pet_date.png')} style={styles.image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageWrapper}>
              <Image source={require('../../assets/icons/other.png')} style={styles.image}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SearchMainScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    width:'100%',
  },
  content:{
    flex:7,
    width:'100%',
    justifyContent:'center',
    paddingHorizontal:20,
    paddingVertical:10,
  },
  title:{
    fontSize:34,
    fontWeight:'bold',
    color:colors.text,
  },
  imageWrapper:{
    flex:1,
  },
  image:{
    height:120,
    width:120,
  }
})
