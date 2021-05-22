import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../constants/colors'
import Button from './Button'

const SubSlides = ({title, subTitle, textButton, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>{title}</Text>
      <Text style={styles.textSubtitle}>{subTitle}</Text>
      <View style={{justifyContent:'flex-end', flex:1, paddingBottom:40}}>
        <Button style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>{textButton}</Text>
        </Button>
      </View>
    </View>
  )
}

export default SubSlides

const styles = StyleSheet.create({
  container : {
    flex:1,
    paddingHorizontal:20,
  },
  textTitle:{
    textAlign:'center',
    fontSize:24,
    color: colors.text,
    fontWeight:'bold',
  },
  textSubtitle:{
    textAlign:'center',
    fontSize:16,
    color: colors.text,
    marginVertical:10,
  },
  button:{
    backgroundColor:colors.primary,
    width: '100%',
    alignSelf:'center',
  },
  textButton:{
    color:colors.white,
    fontSize:16,
    fontWeight:'bold',
  },
})
