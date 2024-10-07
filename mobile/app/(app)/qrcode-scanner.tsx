import QrScanner from "@/components/QrScanner";
import { router } from "expo-router";

export default function QRCode() {
    const handleBarcodeScanned = (data: string) => {
        router.back()
    }

    return <QrScanner onBarcodeScanned={handleBarcodeScanned}/>
}
