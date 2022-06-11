import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularStickyThingsModule} from '@w11k/angular-sticky-things';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { StickyBelowViewDirective } from './sticky-below-view.directive';
import { WindowScrollService } from './window-scroll.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



//SERVICES
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
 
    StickyBelowViewDirective
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularStickyThingsModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    BrowserModule.withServerTransition({appId: 'zerviz'}),
    NgbModule
  ],
  providers: [
    WindowScrollService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
