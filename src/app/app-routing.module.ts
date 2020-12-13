import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AddComponent} from './components/add/add.component';
import {DetailsComponent} from './components/details/details.component';
import {DeleteComponent} from './components/delete/delete.component';
import {UpdateComponent} from './components/update/update.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import {AdminComponent} from './components/admin/admin.component';
import {OrderComponent} from './components/order/order.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'shw/:id', component: DetailsComponent},
  {path: '404', component: NotfoundComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/add', component: AddComponent},
  {path: 'admin/delete/:id', component: DeleteComponent},
  {path: 'admin/update/:id', component: UpdateComponent},
  {path: 'admin/orders', component: OrderComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
