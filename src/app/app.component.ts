import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    

    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
   
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'panda';
  scroll$: any;

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event) {
    // console.log(event.type);
      // localStorage.setItem('sesion',JSON.stringify(event.type));
      // localStorage.clear();
  }
}
