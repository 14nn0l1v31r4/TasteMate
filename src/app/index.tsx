import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import Constants from 'expo-constants'
import { Banner } from "../components/banner";
import {Search} from "../components/search";
import { Section } from "../components/section";
import { CardHorizontalFood } from "../components/Food";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/Restaurants";
import { RestaurantsVerticalList } from "../components/List";

const  statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex : 1}} className="bg-slate-200" 
    showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop : statusBarHeight + 8}}>
        <Header />

        <Banner />

        <Search/>
      </View>
      
      <Section name={"Comidas em alta"} 
      size={"text-2xl"} 
      label={"Veja Mais"} 
      action={() => console.log("Clicou no veja mais") } />

      <TrendingFoods />

      <Section 
      name={"Famosos no TasteMate"} 
      size={"text-xl"} 
      label="Ver Todos"
      action={ () => console.log("Clicou no Famosos") }>
      </Section>

      <Restaurants />

      <Section 
      name={"Restaurantes "} 
      size={"text-xl"} 
      label="Ver restaurantes"
      action={ () => console.log("Clicou no restaurantes") }>
      </Section>

      <RestaurantsVerticalList />

    </ScrollView>
  );
}
