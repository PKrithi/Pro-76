import React,{Component} from "react";
import {Text, View} from 'react-native';

export default class DailyPicScreen extends Component {
    render(){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContenct: "center",
                    alignItems: "center"
                }}>
                    <Text>Daily Pic Screen</Text>
                </View>
        )
    }
}