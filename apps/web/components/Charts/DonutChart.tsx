import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const donutChartData = [44, 55, 17];

const donutChartOptions: ApexOptions = {
    chart: {
        type: 'donut',
        foreColor: '#c8cfca',
    },
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 100,
                },
                legend: {
                    position: 'bottom',
                },
            },
        },
    ],
    colors: ['#FF0080', '#7928CA', '#000'],
    labels: ['Not Eligible', 'Eligible', 'Placed'],
};

const DonutChart = ({ data }) => {
    return (
        <Box py="1rem" height={{ sm: '200px' }} width="70%" position="relative">
            <ReactApexChart
                options={donutChartOptions}
                series={data}
                type="donut"
                height={250}
            />
        </Box>
    );
};

export default DonutChart;
