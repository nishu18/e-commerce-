import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ItemComponent } from './component/item/item.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageComponent } from './component/page/page.component';
// import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  { path: "product", component: ProductComponent },
  { path: "contact", component: ContactComponent },
  { component: HomeComponent, path: "home", },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'edit/:id', component: EditComponent },
  { path: 'page/:id', component: PageComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
