import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss'],
})
export class StructuralComponent implements OnInit {
  title = 'Structural Directives';

  isLoggedIn = false;
  username = 'thuanvm';

  login = () => {
    this.isLoggedIn = true;
  };

  logout = () => {
    this.isLoggedIn = false;
  };

  age = 0;
  rappers=["Đen vâu","Binz","BlackBi","Justa Tee"]
  constructor() {}

  ngOnInit(): void {}
}
