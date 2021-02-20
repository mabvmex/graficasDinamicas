import { Component } from '@angular/core';
// import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
// import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.css'],
})
export class LineaComponent {
  public lineChartData: Array<any> /* ChartDataSets[] */ = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Queso' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Tortilla' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Chorizo', /* yAxisID: 'y-axis-1', */ },
  ];

  public lineChartLabels: Array<any> /* Label[] */ = [ 
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
  ];

  // public lineChartOptions: (ChartOptions & { annotation: any }) = {
  public lineChartOptions = {
    responsive: true,
  };

  public lineChartColors: Array<any> /* Color[] */ = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)',
    },
    {
      // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
    },
  ];

  public lineChartLegend:boolean = true;
  public lineChartType:string /* ChartType */ = 'line';

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    // this.chart.update();
    // this.lineChartData = lineChartData;
  }

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
