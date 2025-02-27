import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import "./global.css";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const [tripData, setTripData] = useState([]);

  return (  
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="(tabs)"
      />
    </Stack>
    </CreateTripContext.Provider>
  );
}
