import AppLoading from 'expo-app-loading';
import { TouchableOpacity,StyleSheet, Text, View, StatusBar,Button,Image} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';




export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>

      <View style={styles.header}>
      <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}}>
       <Image
       style={styles.tinyLogo}
       source={require('./assets/Icons/menu_light.png')}/>
       </TouchableOpacity>
       <Text style={styles.title}>ensom</Text>
       <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}}>
          <Image
          style={styles.tinyLogo}
          source={require('./assets/Icons/sun.png')}/>
          </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require('./assets/Profiles/mtl.jpg')} />
        <Text style={{position: 'absolute',top: 180,left: 20,fontSize: 32, color: 'white'}}>MTL</Text>
        <Text style={{position: 'absolute',top: 510,left: 20,fontSize: 12, color: 'white'}}>2 miles away</Text>
        <View style={styles.playerv}>
        <Text style={styles.title}>My Hotest take</Text>
        <View style={styles.playerh}>
        <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}}>
           <Image
           style={styles.tinyLogo}
           source={require('./assets/Icons/player_light.png')} />
           </TouchableOpacity>

          <Image
            style={styles.audiologo}
            source={require('./assets/Icons/audio_waveform_light.png')} />
      </View>
      </View>
        <View style={styles.action}>
        <TouchableOpacity style={styles.Button} >
         <Image
         style={styles.tinyLogo}
         source={require('./assets/Icons/discover_light.png')}/>
         <Text style={styles.buttontext}>Discover</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}} >
            <Image
            style={styles.tinyLogo}
            source={require('./assets/Icons/heart_dark.png')}/>
            <Text style={styles.buttontext}>Matches</Text>
            </TouchableOpacity>

         <TouchableOpacity style={styles.Button} onPress={()=>{alert("you clicked me")}} >
            <Image
            style={styles.tinyLogo}
            source={require('./assets/Icons/messages_dark.png')}/>
            <Text style={styles.buttontext}>DMS</Text>
            </TouchableOpacity>

      </View>
      </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 1,
    justifyContent: "space-between",
    color: Themes.bg
  },
  image: {
  flex: 2,
  alignSelf: 'center',
  aspectRatio:1,
  borderWidth: 1,
  borderRadius: 5
},
header: {
  flex: 1,
  paddingTop: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
},

playerv: {
  flex: 1,
  padding:10,
  flexDirection: "column",
  alignItems: "flex-start",
  borderWidth: 1,
  borderRadius: 10,
  justifyContent: "space-between",
  marginBottom: 10
},

playerh: {
  flex: 1,
  padding:2,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 10
},
action: {
  flex: 0.5,
  paddingBottom: 2,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center"
},
title: {
  fontSize: 32,
  fontWeight: "bold",
  alignItems: "center",
  textAlign: "center"
},
buttontext: {
  fontSize: 12,
  fontWeight: "bold",
  alignItems: "center",
  textAlign: "center"
},
playerlogo: {
   flexDirection: "row",
   aspectRatio:0.2,
   flex:0.5,
   resizeMode: 'contain'
 },
 audiologo: {
    flexDirection: "row",
    aspectRatio:1,
    flex:2,
    resizeMode: 'contain'
  },
tinyLogo: {
   width: 60,
   height: 60,
   resizeMode: 'contain'
 },

});
