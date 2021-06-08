import { Text, View } from "react-native"
import React from 'react'
import SwitchBtn from "../components/SwitchBtns";

const Page2 = (props:any) => {
    return (
        <View>
            <Text style={{fontSize:40, textAlign:'center', top:0}}>
                Page2
            </Text>
            <SwitchBtn {...props} />
        </View>
    )
}
export default Page2;