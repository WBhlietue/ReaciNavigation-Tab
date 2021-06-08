import { Button, Pressable, View } from "react-native"
import React from 'react'

const SwitchBtn = (props: any) => {
    return (
        <View>
            <Button title="Page1" onPress={() => { props.navigation.navigate("Page1") }}/>
            <Button title="Page2" onPress={() => { props.navigation.navigate("Page2") }}/>
            <Button title="Page3" onPress={() => { props.navigation.navigate("Page3") }}/>
            <Button title="Page4" onPress={() => { props.navigation.navigate("Page4") }}/>
            <Button title="Page5" onPress={() => { props.navigation.navigate("Page5") }}/>
        </View>
    )
}
export default SwitchBtn;