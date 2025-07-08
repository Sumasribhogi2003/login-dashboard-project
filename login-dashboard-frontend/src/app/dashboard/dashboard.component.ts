import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  public chartType: ChartType = 'bar';

  public chartData: ChartDataset<'bar'>[] = [
    {
      data: [10, 13, 7],
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'], // green, orange, red
      barThickness: 80,
      borderRadius: 6
    }
  ];

  public chartLabels: string[] = ['Open', 'In Progress', 'Closed'];

  public chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // ✅ REMOVE clickable legend
      title: {
        display: true,
        text: 'Ticket Status Overview',
        font: { size: 18 }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } }
      },
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5, font: { size: 12 } },
        grid: { color: '#eee' }
      }
    }
  };
}
