import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, Validators, FormControl} from '@angular/forms';
import { CollectionServiceService } from '../service/collection-service.service';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  name = new FormControl('');

  constructor(private collectionService : CollectionServiceService) { }

  ngOnInit(): void {
    
  }

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  onSubmit(){
    console.log(this.name);
  }
}
