export default class extends scanscreen extends React.Component {
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData:'',
            buttonState: 'normal'
        }
    }
}
getCameraPermission(){

}

handleBarCodeScanner(){

}
import { Text,View, TouchableOpacity,Image,StyleSheet } from 'react-native'

<TouchableOpacity 
onPress={this.getCameraPermissions}
style= {StyleSheetList.scanButton}
title= "Bar Code Scanner">
    <Text style={StyleSheetList.buttonText}> Scan QR Code </Text>
</TouchableOpacity>