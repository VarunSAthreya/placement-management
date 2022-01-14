import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const barChartData = [
    {
        name: 'member',
        data: [64, 55, 21, 18, 76, 41, 44, 14, 66, 32],
    },
    {
        name: 'Partcipants',
        data: [53, 32, 42, 22, 29, 80, 16, 49, 78, 11],
    },
];

const barChartOptions: ApexOptions = {
    colors: ['#FF0080', '#7928CA'],
    // chart: {
    //   height: "100%"
    // },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                position: 'top',
            },
        },
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff'],
        },
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff'],
    },
    xaxis: {
        categories: ['a', 'b', 'c', 'd', 'f', 'h', 'i', 'j', 'k', 'l'],
    },
    legend: {
        position: 'right',
        markers: {
            width: 24,
            height: 24,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 2,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0,
        },
    },
};

const BarChart = () => {
    return (
        <Box
            py="1rem"
            height={{ sm: '200px', lg: '400px' }}
            width="120%"
            position="relative"
        >
            <Chart
                options={barChartOptions}
                series={barChartData}
                type="bar"
                width="100%"
                height="100%"
            />
        </Box>
    );
};

export default BarChart;
