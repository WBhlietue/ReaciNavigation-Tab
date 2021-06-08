import { Text, View } from "react-native"
import React from 'react'
import SwitchBtn from "../components/SwitchBtns";

const Page3 = (props:any) => {
    return (
        <View>
            <Text style={{fontSize:40, textAlign:'center', top:0}}>
                Page3
            </Text>
            <SwitchBtn {...props} />
        </View>
    )
}
export default Page3;