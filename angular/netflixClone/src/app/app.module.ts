import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageContactComponent } from './page-contact/page-contact.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { ComponentFooterComponent } from './component-footer/component-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageContactComponent,
    PageCategoriesComponent,
    ComponentHeaderComponent,
    ComponentFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
