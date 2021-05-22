import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'

const {width} = Dimensions.get('window')

const SlideOnBoarding = ({image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageSlide} source={image}/>
    </View>
  )
}

export default SlideOnBoarding

const styles = StyleSheet.create({
  container:{
    width
  },
  imageSlide : {
    width:'100%', 
    height:'100%',
  },
})
