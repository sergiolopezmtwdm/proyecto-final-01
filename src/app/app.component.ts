import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();

declare var App:/*tipo de variable (cualquiera) -->*/any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'APP-FINAL-PROJECT-MTWDM2020';

  closeResult: string;

  constructor(private modalService: NgbModal) { }

  isUserAuthenticated() {
    const token: string = localStorage.getItem("jwt");
    const isExpired = helper.isTokenExpired(token);
    if (token && !isExpired) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit() {
    // Load SideBar Script
    App.init();
  }

}
