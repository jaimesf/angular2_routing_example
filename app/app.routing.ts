import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example/example.component'
import { OtherComponent } from './other/other.component'
import { MainComponent } from './main/main.component'



const appRoutes: Routes = [
    {
        path: '',
        component: MainComponent
    },
  {
    path: 'example',
    component: ExampleComponent
},
  {
    path: 'other/:name',
    component: OtherComponent
},
{
    path: 'another',
    redirectTo: '/example',
    pathMatch: 'full'
},
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
