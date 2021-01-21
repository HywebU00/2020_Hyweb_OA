// Build the chart
Highcharts.chart("container", {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: null, //"Browser market shares in January, 2018",
  },
  tooltip: {
    pointFormat:
      "區間工時 : <b >{point.percentage:.1f}%</b><br>{series.name} : <b>{point.x}</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "工時比例",
      colorByPoint: true,
      data: [
        {
          name: "A00",
          y: 11.84,
          x: 341.5,
        },
        {
          name: "B00",
          y: 61.41,
          x: 141.5,
          sliced: true,
          selected: true,
        },
        {
          name: "B10",
          y: 11.84,
          x: 341.5,
        },
        {
          name: "B20",
          y: 10.85,
          x: 341.5,
        },
        {
          name: "D00",
          y: 4.67,
          x: 341.5,
        },
        {
          name: "J00",
          y: 4.18,
          x: 341.5,
        },
        {
          name: "K00",
          y: 1.64,
          x: 31.5,
        },
        {
          name: "M00",
          y: 1.6,
          x: 34,
        },
        {
          name: "U20",
          y: 1.2,
          x: 15,
        },
        {
          name: "W00",
          y: 2.61,
          x: 341.5,
        },
        {
          name: "Z00",
          y: 2.61,
          x: 45,
        },
      ],
    },
  ],
});
