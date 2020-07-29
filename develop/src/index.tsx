// import * as React from "react";
// import * as ReactDom from "react-dom";
import { toNumber } from "lodash";
import { Chart } from '@antv/g2';
import {
  VisualizationBase,
  IKeyValues,
  OutputMode,
  IDataset
} from '@qn-pandora/visualization-sdk'

export default class VisualizationStore extends VisualizationBase {
  chart: Chart | null = null
  getInitialDataParams() {
    return {
      outputMode: OutputMode.JsonRows,
      count: 10000
    }
  }

  getData(dataset: IDataset, range: string) {
    const { fields, rows } = dataset
    const arr: IKeyValues = []
    const rangeNumber = range.split('-') as any
    rows.slice(rangeNumber[0] || 0, rangeNumber[1] || 10).forEach((line) => {
      line.forEach((item, index) => {
        if (index !== 0) {
          arr.push({
            group: line[0],
            x: fields[index].name,
            y: item
          })
        }
      })
    })
    return arr
  }

  getStyle(style: string) {
    return window.getComputedStyle(this.element, null).getPropertyValue(style)
  }

  updateView(dataset: IDataset, config: IKeyValues) {
    if (dataset.fields.length < 0) {
      return
    }
    const { cols, type, arrangement, labelOffset, labelRotate, showLabel, height, range, padding, showTitle } = config
    const data = this.getData(dataset, range) as any
    const fields = arrangement === 'rect' ? [null, 'group'] as any : ['group'] as any
    this.element.innerHTML = ''
    const chartDom = document.createElement('div')
    chartDom.id = 'chart'
    chartDom.style.overflow = 'scroll'
    chartDom.style.width = 'inherit'
    chartDom.style.height = 'inherit'
    const width = this.getStyle('width')
    this.element.appendChild(chartDom)
    this.chart = new Chart({
      container: chartDom,
      autoFit: false,
      width: toNumber(width.replace('px', '')),
      height,
      padding: 30
    });
    this.chart.data(data);
    this.chart.scale({
      x: {
        sync: true
      },
      y: {
        sync: true
      },
      group: {
        sync: true
      }
    });
    this.chart.axis('x', showLabel === 'true' ? {
      label: {
        offset: labelOffset,
        autoRotate: false,
        rotate: labelRotate,
        autoEllipsis: true
      },
    } : false)
    this.chart.facet(arrangement, {
      fields,
      cols: arrangement === 'rect' ? undefined : cols,
      padding,
      showTitle: showTitle === 'true' || showTitle === true ? true : false,
      rowTitle: {
        style: {
          fontSize: 12,
          textAlign: 'right',
        },
      },
      eachView(view: any) {
        const item = type === 'line' ? view.line() : view.point()
        item
          .position('x*y')
          .color('group')
          .shape('circle')
          .style({ fillOpacity: 0.3, stroke: null })
          .size(3)
      }
    });
    this.chart.tooltip({
      showTitle: true,
      crosshairs: {
        line: {
          style: {
            lineDash: [2],
          }
        },
        text: {
          position: 'end',
          offset: 5,
          autoRotate: false,
          style: {
            fontSize: 14,
          }
        },
      },
    });
    this.chart.render();
  }
}
