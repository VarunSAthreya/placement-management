import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const ProgressChart = ({ selected, category }) => {
    const progressChartData = [
        {
            data: selected,
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
            categories: category,
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
        tooltip: {
            theme: 'dark',
        },
        legend: {
            show: false,
        },
        colors: ['#7928CA'],
    };

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
