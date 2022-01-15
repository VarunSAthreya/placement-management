import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const progressChartData = [
    {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
];

const progressChartOptions: ApexOptions = {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: [
            'South Korea',
            'Canada',
            'United Kingdom',
            'Netherlands',
            'Italy',
            'France',
            'Japan',
            'United States',
            'China',
            'Germany',
        ],
        labels: {
            style: {
                colors: '#c8cfca',
                fontSize: '12px',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: '#c8cfca',
                fontSize: '12px',
            },
        },
    },
    legend: {
        show: false,
    },
    colors: ['#7928CA'],
};

const ProgressChart = () => {
    return (
        <Box
            py="1rem"
            height={{ sm: '220px' }}
            width="100%"
            position="relative"
        >
            <ReactApexChart
                options={progressChartOptions}
                series={progressChartData}
                type="bar"
                height={300}
            />
        </Box>
    );
};

export default ProgressChart;
