import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const BarChart = ({ branch, students, placed }) => {
    const category = branch.filter((v, i) => branch.indexOf(v) === i);
    const totalStudents = category.map((b) => students[b]);

    const placedStudents = category.map(
        (b) =>
            placed[b].placed.reduce((a, b) => (a[b] = a[b] + 1 || 1) && a, [])
                .Placed
    );

    const barChartData = [
        {
            name: 'Total No.of Students',
            data: totalStudents,
        },
        {
            name: 'Placed Students',
            data: placedStudents,
        },
    ];

    const barChartOptions: ApexOptions = {
        colors: ['#FF0080', '#7928CA'],
        chart: {
            toolbar: {
                show: false,
            },
            foreColor: '#c8cfca',
        },
        tooltip: {
            theme: 'dark',
        },
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
