import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as FileSaver from 'file-saver';
import country from 'src/assets/country.json';
import sport from 'src/assets/sport.json';
import player from 'src/assets/player.json';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private http: HttpClient) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return true

  }

  getCountries(){
    return country;
  }
  getSports(){
    return sport;
  }
  getPlayers(){
    return player;
  }

  exportFile(img,name) {
    this.http
    .get(img, { responseType: 'blob' })
    .subscribe(file => {
      FileSaver.saveAs(file, name);
    });
  }
}
