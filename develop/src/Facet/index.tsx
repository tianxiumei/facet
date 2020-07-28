// import * as React from "react";
// // import { Chart } from '@antv/g2';
// import *  as bizcharts from 'bizcharts';
// import { IDataset, IKeyValues } from "@qn-pandora/visualization-sdk";
// interface IFacetProps {
//   dataset: IDataset,
//   config: IKeyValues
//   width: number
//   data: IKeyValues
// }


// export class Facet extends React.Component<IFacetProps, any> {
//   // chart: Chart | null = null
//   container: HTMLElement | null = null

//   getData = (dataset: IDataset, facetNumber: number) => {
//     const { fields, rows } = dataset
//     const arr: IKeyValues = []
//     rows.slice(0, facetNumber).forEach((line) => {
//       line.forEach((item, index) => {
//         if (index !== 0) {
//           arr.push({
//             group: line[0],
//             x: fields[index].name,
//             y: item
//           })
//         }
//       })
//     })
//     return arr
//   }


//   init = () => {
//     // const { width, config } = this.props
//     // const { cols, type, arrangement, labelOffset, labelRotate, showLabel, height, range, showCrosshairs } = config
//     // const data = this.getData(this.props.dataset, range) as any
//     // const fields = arrangement === 'rect' ? [null, 'group'] as any : ['group'] as any
//     // const chartDom = document.createElement('div')
//     // chartDom.id = 'chart'
//     // chartDom.style.overflow = 'scroll'
//     // chartDom.style.width = 'inherit'
//     // chartDom.style.height = 'inherit'
//     // this.container!.appendChild(chartDom)
//     // this.chart = new Chart({
//     //   container: chartDom,
//     //   autoFit: false,
//     //   width,
//     //   height,
//     //   padding: 30
//     // });
//     // this.chart.data(data);
//     // this.chart.scale({
//     //   x: {
//     //     sync: true
//     //   },
//     //   y: {
//     //     sync: true
//     //   },
//     //   group: {
//     //     sync: true
//     //   }
//     // });
//     // this.chart.axis('x', showLabel === 'true' ? {
//     //   label: {
//     //     offset: labelOffset,
//     //     autoRotate: false,
//     //     rotate: labelRotate,
//     //     autoEllipsis: true
//     //   },
//     // } : false)

//     // this.chart.facet(arrangement, {
//     //   fields,
//     //   cols: arrangement === 'rect' ? undefined : cols,
//     //   padding: 30,
//     //   eachView(view: any) {
//     //     const item = type === 'line' ? view.line() : view.point()
//     //     item
//     //       .position('x*y')
//     //       .color('group')
//     //       .shape('circle')
//     //       .style({ fillOpacity: 0.3, stroke: null })
//     //       .size(3)
//     //   }
//     // });
//     // this.chart.tooltip({
//     //   showCrosshairs: showCrosshairs === 'true' ? true : false, // 展示 Tooltip 辅助线
//     //   showTitle: true,
//     //   crosshairs: {
//     //     line: {
//     //       style: {
//     //         lineDash: [2],
//     //       }
//     //     },
//     //     text: {
//     //       position: 'end',
//     //       offset: 5,
//     //       autoRotate: false,
//     //       style: {
//     //         fontSize: 14,
//     //       }
//     //     },
//     //   },
//     // });
//     // this.chart.render();
//   }
//   componentDidMount() {
//     this.init()
//   }
//   render() {
//     const scale = {
//       group: {
//         sync: true,
//         tickCount: 11,
//       },
//       x: {
//         sync: true,
//       },
//       y: {
//         sync: true,
//       },
//     };
//     const Chart = bizcharts.Chart
//     // const Line = bizcharts.Line
//     // const Point = bizcharts.Point
//     return <Chart height={600}
//       data={this.props.data}
//       scale={scale}
//       autoFit
//       padding={50}>
//       {/* <Line position="x*y" />
//       <Point position="x*y" /> */}
//     </Chart>
//   }
// }