import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'
import Button from '../components/Button'
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native'

const RegistrationFbOrGoogle = ({navigation}) => {
  return (
    <LinearGradient start={{ x: -0.6, y: 0.4 }}  style={styles.container} colors={colors.backgroundPrimary}>
      <View style={styles.titleWrapper}>
        <Text style={styles.textTitle}>Welcome</Text>
        <Text style={styles.textTitle}>to <Text style={{color:colors.yellow}}>Pet Care</Text></Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button style={styles.buttonWhite}>
          <Icon name='facebook-square' size={24} color={colors.primary}/>
          <Text style={styles.textButtonWhite}><Text style={{fontWeight:'normal'}}>Continue with</Text> Facebook</Text>
        </Button>
        <Button style={styles.buttonWhite}>
          <Icon name='google' size={24} color={colors.primary}/>
          <Text style={styles.textButtonWhite}><Text style={{fontWeight:'normal'}}>Continue with</Text> Google</Text>
        </Button>
        <Button style={styles.buttonOutline} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textButtonOutline}>Register with Email</Text>
        </Button>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.textSignIn}>Sign In</Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default RegistrationFbOrGoogle

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   paddingHorizontal:30,
  },
  titleWrapper:{
    width:'100%',
  },
  textTitle :{
    color:colors.white,
    fontSize:44,
    fontWeight:'bold'
  },
  buttonWrapper:{
    width:'100%',
    marginTop:40,
  },
  buttonWhite:{
    flexDirection:'row',
    backgroundColor:colors.white,
    width:'100%',
    marginBottom:20,
  },
  textButtonWhite:{
    color:colors.primary,
    marginLeft:12,
    fontWeight:'bold',
    fontSize:16,
  },
  buttonOutline:{
    marginTop:30,
    borderWidth:1,
    borderColor:colors.white,
  },
  textButtonOutline:{
    color:colors.white,
    fontWeight:'bold',
    fontSize:16,
  },
  textWrapper:{
    marginTop:100,
    flexDirection:'row',
    alignItems:'center',
  },
  text:{
    color:colors.white,
    fontSize:16,
    marginRight:5,
  },
  textSignIn:{
    color:colors.white,
    fontSize:16,
    fontWeight:'bold'
  },
})
