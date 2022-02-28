import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from "expo-permissions";

export default class TransactionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domState: "normal",
      scannedData: null,
      scanned: false,
      cameraPermission: false,
    }
  }

  handleBarcodeScan = async({type, data}) => {
    this.setState({
      domState: "normal",
      scannedData: data,
      scanned: true,
    });
  }

  getCameraPermissions = async(domState) => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      cameraPermission: status === "granted",
      domState: domState,
    });
  }

  render() {
    const {domState, scannedData, scanned, cameraPermission} = this.state;
    if(domState == "scanning") {
      return <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarcodeScan} style={StyleSheet.absoluteFillObject}/>;
    } else {
      return (
        <View style={styles.container}>
  
          <Text>{cameraPermission ? scannedData : "Please allow camera"}</Text>
  
          <TouchableOpacity style={styles.button} onPress={() => {
            this.getCameraPermissions("scanning");
          }}>
            <Text style={styles.text}>Scan QR Code</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  button: {
    backgroundColor: "dodgerblue",
    padding: 20,
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontWeight: "bold",
  }
});