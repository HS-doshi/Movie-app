import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { DetailsMoviesComponent } from './details-movies/details-movies.component';
import { DetailsReviewsComponent } from './details-reviews/details-reviews.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { ModalComponent } from './modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    NotAuthorizedComponent,
    SearchComponent,
    LoaderComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
