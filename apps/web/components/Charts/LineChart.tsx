import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

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
    const lineChartData = [
        {
            name: 'Prev.Year Placed Students Record',
            data: [5, 7, 3, 10],
        },
        {
            name: 'Current Year Placed Students Record',
            data: [2, 5, 7, 8],
        },
    ];
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
