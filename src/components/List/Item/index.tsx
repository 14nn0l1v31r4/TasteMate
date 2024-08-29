import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsProps } from '..';

export function RestaurantsItem({item }: 
    {item : RestaurantsProps}) {
 return (
   <Pressable className="flex flex-row items-center justify-start
    gap-2">
    <Image
    source={{ uri: item.image }}
    className="w-20  h-20 rounded-full"
    />
    <View className="flex gap-2">
        <Text className="text-base text-black leading-4
        font-bold" numberOfLines={2}>
            {item.name}
            </Text>

        <View className="flex-row items-center gap-2">
            <Ionicons
            name='star' size={14} color={"#D4AF37"}
             />
             <Text className="text-sm">{item.rating}</Text>
        </View>
    </View>
   </Pressable>
  );
}