import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

  // export(){
  //   this.countriesService.exportFile().subscribe(data => {
  //     saveAs(data , 'solicitudFisica.pdf')
  //   }, error => {
  //     console.log(error);
  //   })
  // }

}
