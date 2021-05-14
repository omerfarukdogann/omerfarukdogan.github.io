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
  logo  = "../assets/images/logo.png";
  coverAvengers  = "../assets/images/movies/cover-avengers.jpg";
  coverBatman  = "../assets/images/movies/cover-batman.jpg";
  coverDeadpool  = "../assets/images/movies/cover-deadpool.jpg";
  coverEsaretinBedeli  = "../assets/images/movies/cover-esaretin-bedeli.jpg";
  coverFightClub  = "../assets/images/movies/cover-fight-club.jpg";
  coverForrestGump  = "../assets/images/movies/cover-forrest-gump.jpg";
  coverParasite  = "../assets/images/movies/cover-gisaengchung.jpg";
  coverGodfather  = "../assets/images/movies/cover-godfather.jpg";
  coverGreenMile  = "../assets/images/movies/cover-green-mile.jpg";
  coverInception  = "../assets/images/movies/cover-inception.jpg";
  coverInterstellar  = "../assets/images/movies/cover-interstellar.jpg";
  coverJoker  = "../assets/images/movies/cover-joker.jpg";
  coverLeon  = "../assets/images/movies/cover-leon.jpg";
  coverMatrix  = "../assets/images/movies/cover-matrix.jpg";
  coverSpiderman  = "../assets/images/movies/cover-spiderman.jpg";
}
