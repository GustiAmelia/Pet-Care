import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import colors from '../constants/colors';


const SplachScreen = () => {
  return (
    <LinearGradient start={{ x: -0.6, y: 0.4 }} colors={colors.backgroundPrimary} style={styles.container}>
      <Image style={{marginLeft:'15%'}} source={require('../../assets/icons/icon-foot-1.png')}/>
      <Image source={require('../../assets/icons/icon-foot-2.png')}/>
      <Image style={{marginLeft:'25%'}} source={require('../../assets/icons/icon-foot-3.png')}/>
      <Image source={require('../../assets/icons/icon-foot-4.png')}/>
      <Image style={{marginLeft:'15%'}} source={require('../../assets/icons/icon-foot-5.png')}/>
      <Image style={{marginRight:'10%'}} source={require('../../assets/icons/icon-foot-6.png')}/>
    </LinearGradient>
  )
}

export default SplachScreen

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})
