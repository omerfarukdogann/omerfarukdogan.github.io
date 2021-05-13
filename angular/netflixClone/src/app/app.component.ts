import { Component } from '@angular/core';
import { PageHomeComponent} from 'src/app/page-home/page-home.component';
import { PageContactComponent} from 'src/app/page-contact/page-contact.component';
import { PageCategoriesComponent} from 'src/app/page-categories/page-categories.component';
import { ComponentHeaderComponent} from 'src/app/component-header/component-header.component';
import { ComponentFooterComponent} from 'src/app/component-footer/component-footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'netflixClone';
  logo:string = "/src/includes/images/logo.png";
}
