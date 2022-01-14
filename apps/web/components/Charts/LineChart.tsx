import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const lineChartData = [
    {
        name: 'Mobile apps',
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
    },
    {
        name: 'Websites',
        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    },
];

const lineChartOptions: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
    },
    tooltip: {
        theme: 'dark',
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    xaxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
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
    grid: {
        strokeDashArray: 5,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.8,
            opacityTo: 0,
            stops: [],
        },
        colors: ['#FF0080', '#7928CA'],
    },
    colors: ['#FF0080', '#7928CA'],
};

const LineChart = () => {
    return (
        <ReactApexChart
            options={lineChartOptions}
            series={lineChartData}
            type="area"
            width="90%"
            height="100%"
        />
    );
};

export default LineChart;
