import { Route } from "@angular/router";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { EchartComponent } from "./echart/echart.component";
import { ApexchartComponent } from "./apexchart/apexchart.component";
import { NgxchartComponent } from "./ngxchart/ngxchart.component";
import { GaugeComponent } from "./gauge/gauge.component";
import { Page404Component } from "app/authentication/page404/page404.component";

export const CHART_ROUTE: Route[] = [
  {
    path: "",
    redirectTo: "echart",
    pathMatch: "full",
  },
  {
    path: "echart",
    component: EchartComponent,
  },
  {
    path: "apex",
    component: ApexchartComponent,
  },
  {
    path: "chartjs",
    component: ChartjsComponent,
  },
  {
    path: "ngx-charts",
    component: NgxchartComponent,
  },
  {
    path: "gauge",
    component: GaugeComponent,
  },
  { path: '**', component: Page404Component },
];
