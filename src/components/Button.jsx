import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

const Button = (props) => {
  return (
    <TouchableOpacity {...props} style={{...styles.button, ...props.style}}>{props.children}</TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
  button :{
    paddingVertical:12,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
  }
})
