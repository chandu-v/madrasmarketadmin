import { Component, OnInit,NgModule  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CollectionServiceService } from '../service/collection-service.service';
import { Collection } from '../bean/collection';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  name = new FormControl('');
  isHidden = true;
  collection_name = '';
  value = 'Clear me';
  constructor(private collectionService : CollectionServiceService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.name.value == ''){
      alert('Enter Some Value')
      return;
    }else{
      this.isHidden = false;
      this.collectionService.addCollection( this.name.value)
      .subscribe(data=>{
        console.log(data);
        this.isHidden = true;
        this.collection_name = null;
      });
    }
  }
}
