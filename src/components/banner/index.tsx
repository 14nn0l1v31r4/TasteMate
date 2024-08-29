import { View, Pressable, Image } from 'react-native'
import React from 'react'
import PagerView from 'react-native-pager-view'

export  function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2x1 mt-5 mb-4">
        <PagerView style={{ flex: 1}} initialPage={0} pageMargin={14}>
            <Pressable className=
            "w-full h-36 md:h-60  rounded-2x1"
            key={1}
            onPress={() => console.log("Clicou no banner 1!")}
            >
            <Image 
            source={require("../../assets/banner1.png")}
            className="w-full h-36 md:h-60  rounded-2xl"
            />
            </Pressable>

            <Pressable className=
            "w-full h-36 md:h-60 rounded-2x1"
            key={2}
            onPress={() => console.log("Clicou no banner 2!")}
            >
            <Image 
            source={require("../../assets/banner2.png")}
            className="w-full h-36 md:h-60  rounded-2xl"
            />
            </Pressable>
        </PagerView>
      
    </View>
  )
}