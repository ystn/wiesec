import { View, Text } from 'react-native'
import React from 'react'
import Screen from './Screen'
import QrScanner from '@/components/QrScanner'
import HapticsScreen from '@/components/sandbox/Haptics'
import QRCodeScreen from './qr/code'
// import QRCode from 'react-native-qrcode-svg';

const Sandbox = () => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';
  return (
    // <Screen>
      // <Text>Sandbox</Text>
      // <HapticsScreen />
      <QRCodeScreen />
      // <QrScanner />
      // <QRCode
    //   value="Just some string value"
    //   logo={{uri: base64Logo}}
    //   logoSize={30}
    //   logoBackgroundColor='transparent'
    // />
    // </Screen>
  )
}

export default Sandbox
