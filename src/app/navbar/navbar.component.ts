import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public _authService: AuthService) { }

  ngOnInit() {
    
      $('.dropdown').hover(
        function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
        },
        function () {
          $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
        }
      );

      $('.dropdown-menu').hover(
        function () {
          $(this).stop(true, true);
        },
        function () {
          $(this).stop(true, true).delay(200).fadeOut();
        }
      );
  }

}
