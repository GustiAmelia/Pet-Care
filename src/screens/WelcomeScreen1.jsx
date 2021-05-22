import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button } from 'react-native-elements'

const WelcomeScreen1 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Sign In</Text>
      </TouchableOpacity>
      <Image source={require('../../assets/images/welcome1.png')}/>
    </View>
  )
}

export default WelcomeScreen1

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
})
