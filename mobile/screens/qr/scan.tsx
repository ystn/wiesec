import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import QrScanner from '@/components/QrScanner'
import { appendChild, selectChildren } from '@/store/slices/children'
import { useDispatch, useSelector } from 'react-redux'

const QrScanScreen = () => {
    const dispatch = useDispatch();
    const children = useSelector(selectChildren);
    const handleBarcodeScanned = (data: string) => {
        dispatch(appendChild({
            id: children?.avatars.length.toString() || '1',
            full_name: 'Jeff Bezos',
            image: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
        }))
        router.back()
    }

    return <QrScanner onBarcodeScanned={handleBarcodeScanned}/>
}

export default QrScanScreen