// app.config = {
//   rotate: 90,
//   align: 'left',
//   verticalAlign: 'middle',
//   position: 'insideBottom',
//   distance: 15,
//   onChange: function () {
//     const labelOption: BarLabelOption = {
//       rotate: app.config.rotate as BarLabelOption['rotate'],
//       align: app.config.align as BarLabelOption['align'],
//       verticalAlign: app.config
//         .verticalAlign as BarLabelOption['verticalAlign'],
//       position: app.config.position as BarLabelOption['position'],
//       distance: app.config.distance as BarLabelOption['distance']
//     };
//     myChart.setOption<echarts.EChartsOption>({
//       series: [
//         {
//           label: labelOption
//         },
//         {
//           label: labelOption
//         },
//         {
//           label: labelOption
//         },
//         {
//           label: labelOption
//         }
//       ]
//     });
//   }
// };

// type BarLabelOption = NonNullable<echarts.BarSeriesOption['label']>;

// const labelOption: BarLabelOption = {
//   show: true,
//   position: app.config.position as BarLabelOption['position'],
//   distance: app.config.distance as BarLabelOption['distance'],
//   align: app.config.align as BarLabelOption['align'],
//   verticalAlign: app.config.verticalAlign as BarLabelOption['verticalAlign'],
//   rotate: app.config.rotate as BarLabelOption['rotate'],
//   formatter: '{c}  {name|{a}}',
//   fontSize: 16,
//   rich: {
//     name: {}
//   }
// };

import React from 'react'

import './index.less'

import Charts from '/@/components/Charts'

const Index: React.FC = () => {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Forest', 'Steppe', 'Desert', 'Wetland']
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                data: ['2012', '2013', '2014', '2015', '2016']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Forest',
                type: 'bar',
                barGap: 0,
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390]
            },
            {
                name: 'Steppe',
                type: 'bar',
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290]
            },
            {
                name: 'Desert',
                type: 'bar',
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190]
            },
            {
                name: 'Wetland',
                type: 'bar',
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: [98, 77, 101, 99, 40]
            }
        ]
    }

    return (
        <div className="charts">
            <Charts options={option} />
        </div>
    )
}

export default Index
