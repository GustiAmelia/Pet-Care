import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
  return (
    <TextInput {...props} style={{...styles.input, ...props.style}}/>
  )
}

export default Input

const styles = StyleSheet.create({
  input:{
    borderBottomWidth:1,
    padding:5
  }
})
