import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pswmanAng';

  constructor(private router: Router) { }
  
  redir(path: String){
    this.router.navigate([`${path}`])
  }
}
