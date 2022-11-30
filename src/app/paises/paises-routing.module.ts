import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MainPaisesComponent } from './pages/main-paises/main-paises.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { LoginGuard } from '../login/guards/login.guard';

const routes: Routes = [
    {
        path: '',
        component: MainPaisesComponent,
        canLoad: [LoginGuard],
        canActivate: [LoginGuard],
        children: [
            {
                path: 'pais',
                component: PorPaisComponent,
                canLoad: []
            },
            {
                path: 'region',
                component: PorRegionComponent,
                canLoad: []
            },
            {
                path: 'capital',
                component: PorCapitalComponent
            },
            {
                path: 'pais/:id',
                component: VerPaisComponent
            },
            {
                path: '**',
                redirectTo: 'region'
            }
        ]
    }
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PaisesRoutingModule {}