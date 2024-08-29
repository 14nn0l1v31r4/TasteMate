import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantsItem } from './Item';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
    rating: number;
}

export function RestaurantsVerticalList() {
    const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
    useEffect(() => {
            async function getFoods(){
                const response = await fetch('http://192.168.15.4:3000/restaurants')
                const data = await response.json();
                setRestaurants(data)
            }
            getFoods();
        }, [])
 return (
   <View className="px-4 gap-8 flex-1 w-full h-full mb-11 ">
    {restaurants.map(item => (
        <RestaurantsItem 
        item={item} 
        key={item.id} />
    ))}
   </View>
  );
}