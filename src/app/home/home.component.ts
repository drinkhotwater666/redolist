import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private message: NzMessageService, private router: Router) { }

  isCollapsed = false;
  // content
  name = ''

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
    this.message.info('Logout successfully');
  }

  ngOnInit() {
  }

}
