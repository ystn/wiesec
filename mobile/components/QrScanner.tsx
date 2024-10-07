import { TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarcodeScanningResult, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import Button from './atoms/button';
import Text from './atoms/text';
import { useTailwind } from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { QrScannerProps } from '@/types/props';
import { router } from 'expo-router';

const QrScanner = ({onBarcodeScanned}: QrScannerProps) => {
    const tw = useTailwind();
    const [scanned, setScanned] = useState(false);

    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
        <View style={tw('flex-1 justify-center')}>
            <Text style={tw('text-center pb-4')}>We need your permission to show the camera</Text>
            <Button onPress={requestPermission} title="grant permission" />
        </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function handleGoBack() {
      router && router.back();
    }

    function handleBarcodeScan(scanningResult: BarcodeScanningResult) {
      setScanned(true);
      const data = scanningResult.data;
      onBarcodeScanned?.(data);
      console.log(data);
    }

    return (
        <View style={tw('flex-1 justify-center')}>
          <CameraView style={tw('flex-1')} facing={facing} onBarcodeScanned={handleBarcodeScan} barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}>
            <View style={tw('flex-1 flex-row bg-transparent m-8')}>
              <TouchableOpacity style={tw('self-end p-3 items-center justify-start rounded-full bg-black opacity-70')} onPress={handleGoBack}>
                <Ionicons name='arrow-back' color={'white'} size={24} />
              </TouchableOpacity>
              {/* <TouchableOpacity style={tw('self-end p-3 items-center rounded-full bg-black opacity-50')} onPress={toggleCameraFacing}>
                <Ionicons name='camera-reverse-outline' color={'white'} size={24} />
                <Text style={tw('font-bold text-white')}>Flip Camera</Text>
              </TouchableOpacity> */}
            </View>
          </CameraView>
        </View>
      );

//     useEffect(() => {
//         const getBarCodeScannerPermissions = async () => {
//           const { status } = await BarCodeScanner.requestPermissionsAsync();
//           setHasPermission(status === 'granted');
//         };

//         getBarCodeScannerPermissions();
//       }, []);
//   return (
//     <View>
//       <Text>QrScanner</Text>
//     </View>
// )
}

export default QrScanner
