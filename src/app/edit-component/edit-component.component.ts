import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
  }

}
