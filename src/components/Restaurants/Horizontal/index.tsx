import { Pressable, Text, Image } from 'react-native';
import { RestaurantsProps } from '..';

export function RestaurantsItem({item } : 
    {item : RestaurantsProps}) {
 return (
   <Pressable className=" flex flex-col items-center 
   justify-center"
   onPress={() => console.log("Clicou mo restaurante "+ item.name)}
   >
    <Image
    source={{uri : item.image}}
    className="w-20 h-20 rounded-full"
    />
    <Text className="text-sm mt-2 w-20 text-center 
    text-black leading-4" numberOfLines={2}>
        {item.name}
        </Text>
   </Pressable>
  );
}