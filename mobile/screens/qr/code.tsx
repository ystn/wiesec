import { View, Text } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { useTailwind } from 'tailwind-rn'
import Screen from '../Screen'

const QRCodeScreen = () => {
    const tw = useTailwind();
    return (
        <Screen>
            <View style={tw('flex-1 w-full items-center justify-center')}>
                <QRCode value="http://awesome.link.qr" size={300} />
            </View>
        </Screen>
    )
}

export default QRCodeScreen
