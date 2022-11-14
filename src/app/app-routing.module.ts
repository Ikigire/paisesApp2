import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './paises/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './paises/pages/por-region/por-region.component';
import { PorCapitalComponent } from './paises/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './paises/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'paises/pais',
    component: PorPaisComponent
  },
  {
    path: "paises/pais/:id",
    component: VerPaisComponent
  },
  {
    path: 'paises/region',
    component: PorRegionComponent
  },
  {
    path: 'paises/capital',
    component: PorCapitalComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }