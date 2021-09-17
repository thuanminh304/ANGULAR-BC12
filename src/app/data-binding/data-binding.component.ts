import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  title = 'DATA BINDING';
  fullName = 'Thuan Minh';
  age = 18;
  isMarried = false;
  user = {
    username: 'thuanvm',
    email: 'thuanvm.ssi@gmail.com',
    role: true,
  };
  imgSrc =
    'https://photo-cms-nghenhinvietnam.zadn.vn/Uploaded/trunghieu/2020_03_03/tuong_lai_cua_thor_sau_khi_endgame_ket_thuc__2__ZTIC_SSQY.jpg';

  isDisable = true;
  email = '';
  clickMe = () => {
    alert('Clicked!');
  };
  getEmail = (event: any) => {
    this.email = event.target.value;
    console.log(this.email)
  };
  constructor() {}

  ngOnInit(): void {}
}
