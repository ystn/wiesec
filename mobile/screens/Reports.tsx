import { SafeAreaView, ScrollView, View } from 'react-native'
import React from 'react'
import { reports } from '@/assets/reports'
import ReportList from '@/components/report/ReportList'
import { useTailwind } from 'tailwind-rn'

const ReportsScreen = () => {
    const tw = useTailwind();
    return (
        <SafeAreaView style={tw('flex-1')}>
            <ScrollView>
                <View style={tw('px-8 pt-4')}>
                    <ReportList title='Yours' reports={reports} />
                    <ReportList title='Tim Cook' reports={reports} />
                    <ReportList title='Thomas Eddison' reports={reports} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ReportsScreen