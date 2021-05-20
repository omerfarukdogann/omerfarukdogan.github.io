import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from 'src/app/page-home/page-home.component';
import { PageContactComponent } from 'src/app/page-contact/page-contact.component';
import { PageCategoriesComponent } from 'src/app/page-categories/page-categories.component';
import { ComponentHeaderComponent } from 'src/app/component-header/component-header.component';
import { ComponentFooterComponent } from 'src/app/component-footer/component-footer.component';

const routes: Routes = [
  { path: 'index', component: PageHomeComponent },
  { path: 'categories', component: PageCategoriesComponent, pathMatch: 'full' },
  { path: 'contact', component: PageContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
