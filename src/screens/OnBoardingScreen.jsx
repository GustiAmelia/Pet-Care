import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import { useValue, onScrollEvent } from 'react-native-redash/lib/module/v1';
import SlideOnBoarding from '../components/SlideOnBoarding'
import SubSlides from '../components/SubSlides';
import colors from '../constants/colors';

export const {width, height} = Dimensions.get('window');

const OnBoardingScreen = ({navigation}) => {
  const scroll = useRef(null);
  const x = useValue(0)
  const onScroll = onScrollEvent({x})

  const slides = [
    {title:'Welcome to Pet Care', subTitle:'All types of services for your pet in one place, instantly searchable.', textButton:'Next'},
    {title:'Proven experts', subTitle:'We interview every specialist before they get to work.', textButton:'Next'},
    {title:'Reliable reviews', subTitle:'A review can be left only by a user who used the service.', textButton:'Get started'},
  ]
  
  return (
    <LinearGradient style={styles.container} colors={colors.backgroundSecondary}>
      <TouchableOpacity style={styles.buttonSignIn}>
        <Text style={styles.textSignIn}>Sign In</Text>
      </TouchableOpacity>
      <Animated.View style={styles.slider}>
        <Animated.ScrollView 
          ref={scroll}
          horizontal snapToInterval={width} 
          decelerationRate='fast' 
          showsHorizontalScrollIndicator={false} 
          bounces={false}
          scrollEventThrottle={1}
          {...{onScroll}}
        >
          <SlideOnBoarding image={require('../../assets/images/welcome1.png')}/>
          <SlideOnBoarding image={require('../../assets/images/welcome2.png')}/>
          <SlideOnBoarding image={require('../../assets/images/welcome3.png')}/>
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[styles.footerContent, {width:width*slides.length, transform:[{translateX:multiply(x,-1)}]}]}>
          {
            slides.map((slide, index) => (
              <SubSlides key={index} title={slide.title} subTitle={slide.subTitle} textButton={slide.textButton}
                onPress={
                  ()=> {
                    if(slide.textButton === 'Get started') {
                      navigation.replace('RegisterFbOrGoogle')
                    }
                    else if(scroll.current){
                      scroll.current.scrollTo({x:width * (index+1), animated:true})
                    }
                  }
                }
              />
            ))
          }
        </Animated.View>
      </View>
    </LinearGradient>
  )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
  container : {
    flex:1,
  },
  buttonSignIn : {
    marginTop:25,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingRight:20,
    width:width*0.3,
    alignSelf:'flex-end'
  },
  textSignIn : {
    fontSize:13,
    fontWeight:'600',
    color:'#4552CB',
    letterSpacing:1.01,
  },
  slider : {
    height:0.61* height,
  },
  footer : {
    flex:1,
  },
  footerContent:{
    flex:1,
    flexDirection:'row',
  }
})
