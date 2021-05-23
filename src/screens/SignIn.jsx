import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import colors from '../constants/colors'
import Icon from 'react-native-vector-icons/FontAwesome'
import Button from '../components/Button'

const inputFild = true;

const SignIn = ({navigation}) => {

  const hidePass = false;
  return (
    <LinearGradient start={{ x: -0.6, y: 0.4 }}  style={styles.container} colors={colors.backgroundPrimary}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/icons/arrow-left.png')}/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>Sign In</Text>
      </View>
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.input}>
            <TextInput style={styles.textInput}/>
            <Icon name='check-circle' color={`${inputFild ? colors.green : colors.grey}`} size={16}/>
          </View>
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.input}>
            <TextInput style={styles.textInput}/>
            <Icon name={`${hidePass ? 'eye-slash' : 'eye'}`} color={`${inputFild ? colors.green : colors.grey}`} size={16}/>
          </View>
        </View>
        <TouchableOpacity style={{alignSelf:'flex-end'}}>
          <Text style={{fontSize:12, color:colors.primary}}>Do not remember the password ?</Text>
        </TouchableOpacity>
        <Button style={styles.buttonSignUp} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textButton}>Sign In</Text>
        </Button>
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', alignItems: 'center', }}>
          <View style={{flex: 1, height: 2, backgroundColor: colors.secondary}} />
          <View>
            <Text style={{textAlign: 'center', marginHorizontal:10, color:colors.text, fontSize:16,}}>or continue with</Text>
          </View>
          <View style={{flex: 1, height: 2, backgroundColor: colors.secondary}} />
        </View>
        <View style={{flexDirection:'row', justifyContent:'center', marginVertical:10}}>
          <TouchableOpacity style={[styles.buttonLogin, {backgroundColor:colors.blue}]}>
            <Icon name='facebook' color={colors.white} size={30}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.buttonLogin, {backgroundColor:colors.red}]}>
            <Icon name='google' color={colors.white} size={30}/>
          </TouchableOpacity>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>Don't have account yet ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.textSignIn}>Registration</Text>
            </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
  },
  header:{
    flex:2,
    width:'100%',
    paddingHorizontal:20,
  },
  buttonBack:{
    marginTop:30,
    width:50,
  },
  textHeader:{
    color:colors.white,
    fontSize:34,
    fontWeight:'bold',
    marginTop:15,
    marginLeft:10,
  },
  formWrapper:{
    backgroundColor:colors.white,
    elevation:5,
    borderRadius:8,
    position:'absolute',
    zIndex:2,
    width:'90%',
    paddingHorizontal:20,
    paddingVertical:20,
  },
  inputWrapper:{
    backgroundColor: inputFild ? colors.paleGrey : colors.white,
    padding:5,
    borderRadius:8,
    marginBottom:10,
  },
  inputLabel:{
    fontSize:13,
    fontWeight:'bold',
    color: inputFild ? colors.primary : colors.grey,
  },
  input:{
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomColor:colors.grey,
  },
  textInput:{
    fontSize:16,
    color:colors.text,
    flex:1,
  },
  iconCheck:{
    marginRight:12,
  },
  buttonSignUp:{
    backgroundColor:colors.primary,
    marginTop:15,
  },
  textButton:{
    color:colors.white,
    fontSize:16,
    fontWeight:'700',
  },
  footer:{
    flex:3,
    backgroundColor:colors.white,
    width:'100%',
    justifyContent:'flex-end',
    paddingHorizontal:20,
  },
  buttonLogin:{
    width:50,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    marginHorizontal:20,
    marginBottom:40,
  },
  textWrapper:{
    marginBottom:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:colors.text,
    fontSize:16,
    marginRight:5,
  },
  textSignIn:{
    color:colors.primary,
    fontSize:16,
    fontWeight:'bold'
  },
})
