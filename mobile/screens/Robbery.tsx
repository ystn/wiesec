import { markers } from '@/assets/markers';
import { selectLocation } from '@/store/slices/location';
import React from 'react'
import { Alert, SafeAreaView, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux';
import { useTailwind } from 'tailwind-rn'

const RobberyScreen = () => {
    const tw = useTailwind();
    function handleMarkerSelected(marker: any) {
        Alert.alert(marker.name, marker.message)
    }
    return (
        <MapView style={tw('flex-1 w-full h-full')} showsUserLocation followsUserLocation>
            <View style={tw('mx-4 top-12 bg-red-950/90 border-red-500 border-2 rounded-full h-14 items-center justify-center')}>
                <Text style={tw('text-white font-bold')}>You are in a danger zone!</Text>
            </View>
            {markers.map((marker, index) => (
                <Marker key={index}  coordinate={marker} onPress={() => handleMarkerSelected(marker)}/>
            ))}
        </MapView>
    )
}

export default RobberyScreen