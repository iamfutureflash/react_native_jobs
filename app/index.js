import { Text, View, ScrollView, SafeAreaView } from "react-native"
import { useState } from "react";
import { COLORS, icons, images, SIZES } from '../constants'
import { Stack, useRouter } from "expo-router";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'
const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    )
}
export default Home;