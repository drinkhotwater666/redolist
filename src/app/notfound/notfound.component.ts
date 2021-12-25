import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  time = 5
  ngOnInit(): void {
    let id = setInterval(() => {
      this.time--
      console.log(this.time);

      if (this.time == 0) {
        clearInterval(id)
        this.router.navigate(['/login'])
      }
    }, 1000)
  }

}
