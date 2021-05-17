import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {IndexComponent} from './pages/index/index.component';

const routes: Routes = [
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'index',
        component: IndexComponent
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
