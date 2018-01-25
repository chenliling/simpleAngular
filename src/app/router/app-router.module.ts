import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from '../pages/index/index.component';
import {DemoComponent} from '../pages/demo/demo.component';
import {HomeComponent} from '../pages/home/home.component';


const routes: Routes = [
    {path: 'demo', component: DemoComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', component: IndexComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRouterModule {
}
