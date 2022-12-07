import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos de terceros

import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { InputbarComponent } from './components/inputbar/inputbar.component';
import { TabledataComponent } from './components/tabledata/tabledata.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MainPaisesComponent } from './pages/main-paises/main-paises.component';
import { MaterialModule } from '../Material/material.module';


@NgModule({
  declarations: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    InputbarComponent,
    TabledataComponent,
    MainPaisesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    
  ]
})
export class PaisesModule { }
