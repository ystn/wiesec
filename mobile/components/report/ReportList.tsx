import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn';
import Report from './Report';

interface ReportListProps {
    title?: string;
    reports: Report[]
}

const ReportList = ({title, reports}: ReportListProps) => {
    const tw = useTailwind();
    return (
      <View style={tw('flex-1 w-full py-4')}>
        {title && <Text style={tw('font-bold text-2xl text-white')}>{title}</Text>}
        {reports.map((report, index) => (
            <Report report={report} key={index} />
        ))}
      </View>
    )
}

export default ReportList