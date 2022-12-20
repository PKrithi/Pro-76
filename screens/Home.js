import React,{Component} from "react";
import {Text, View} from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View
                style={{
                    flex: 1,
                    justifyContenct: "center",
                    alignItems: "center"
                }}>
                    <Text>Home Screen</Text>
                </View>
        )
    }
}