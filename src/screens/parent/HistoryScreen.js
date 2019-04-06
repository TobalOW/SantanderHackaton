/* @flow */

import React, {Component} from "react";
import {View, Text, StyleSheet, Image, Picker} from "react-native";
import {Button} from "react-native-elements";
import {Constants} from "expo";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Dropdown} from "react-native-material-dropdown";
import PureChart from "react-native-pure-chart";
import Navbar from "../../components/Navbar";

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      childSelected: "Niño1"
    };
  }

  static navigationOptions = ({navigation}) => {
    // const { params = {} } = navigation.state;
    return {
      headerLeft: (
        <Button
          title=""
          containerStyle={{paddingLeft: 10}}
          type="clear"
          icon={<Icon name="menu" size={40} color="#e13f4c" />}
          onPress={() => navigation.openDrawer()}
        />
      ),
      // headerRight:
      //   <Button
      //     title=''
      //     clear
      //     containerStyle={{ paddingRight: 10 }}
      //     icon={
      //       <IconEvilIcons
      //         name='search'
      //         size={40}
      //         color='#e13f4c'
      //       />
      //     }
      //   />,
      headerTransparent: true
    };
  };
  render() {
    let data = [
      {
        value: "Niño1"
      },
      {
        value: "Niño2"
      },
      {
        value: "Niño3"
      }
    ];
    let sampleData = [150, 200, 170, 250, 300, 400];
    let dataWithLabel = [
      {x: "2019-04-05", y: 30},
      {x: "2019-04-06", y: 200},
      {x: "2019-04-07", y: 170},
      {x: "2019-04-08", y: 240},
      {x: "2019-04-09", y: 140},
      {x: "2019-04-10", y: 100},
      {x: "2019-04-11", y: 80},
      {x: "2019-04-12", y: 150}
    ];
    return (
      <View style={[styles.container]}>
        <Navbar
          openDrawer={() => this.props.navigation.openDrawer()}
          goTask={() => this.props.navigation.navigate("main")}
        />
        <View
          style={{
            height: "30%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Dropdown
            label="Hijo/a"
            data={data}
            value={this.state.childSelected}
            onChangeText={value => this.setState({childSelected: value})}
            containerStyle={{
              width: "90%",
              alignSelf: "center",
              backgroundColor: "#FFFF",
              paddingTop: 1,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 1,
              borderRadius: 10
            }}
          />
        </View>
        <View
          style={{
            marginLeft: "4%",
            marginRight: "4%",
            width: "90%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <PureChart
            data={dataWithLabel}
            type="line"
            height={200}
            customValueRenderer={(index, point) => {
              if (index % 2 !== 0) return null;
              return <Text style={{textAlign: "center"}}>{point.y}</Text>;
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
});
