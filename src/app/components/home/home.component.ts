import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  countries:any = []
  allSports:any = []
  allPlayers:any = []
  players:any = []
  imagePlayer:string = ''
  namePlayer:string = ''
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public service: AuthGuardService
  ) {
    this.homeForm = this.fb.group({
      country: [''],
      sport: [''],
      player:['']
    });
  }

  ngOnInit() {
    registerLocaleData(localeEs, 'es');
    this.loadCountries()
    this.loadSports()
    this.loadPlayers()
  }

  loadCountries(){
    this.countries = this.service.getCountries()
  }
  
  loadSports(){
    this.allSports = this.service.getSports()
  }

  loadPlayers(){
    this.allPlayers = this.service.getPlayers()
  }

  searchPlayers(){
    this.imagePlayer = ''
    this.namePlayer = ''
    this.players = []
    this.homeForm.get("player").setValue('')
    let country = this.homeForm.get("country").value
    let sport = this.homeForm.get("sport").value
    let search = this.allPlayers.filter(p=> p.country_code == country && p.sport_code == sport)

    this.players = search.slice()
  }

  selectPlayer(){
    let player = this.allPlayers.find(p=> p.player_code == this.homeForm.get("player").value)
    if(player != undefined){
      this.imagePlayer = player.url_image
      this.namePlayer = player.name
    }
    
  }

  downloadImage(){

    this.service.exportFile(this.imagePlayer,this.namePlayer+'.jpg')

  }
}
