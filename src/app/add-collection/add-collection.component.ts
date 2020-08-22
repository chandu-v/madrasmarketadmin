import { Component, OnInit,NgModule  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CollectionServiceService } from '../service/collection-service.service';
import { Collection } from '../bean/collection';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-collection',
  templateUrl: './add-collection.component.html',
  styleUrls: ['./add-collection.component.css']
})
export class AddCollectionComponent implements OnInit {
  parent_collection;
  name = new FormControl('');
  isHidden = true;
  collection_name = '';
  value = 'Clear me';
  parent_id ;
  constructor( private route: ActivatedRoute, private collectionService : CollectionServiceService) { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.route.params.subscribe(params=>{
      console.log(params);
      this.parent_id = params['id']
      if(this.parent_id == -1){
        this.parent_collection = "Root Collection";
      }else{
        this.collectionService.getCollectionById(this.parent_id)
        .subscribe(data=>{
          this.parent_collection = JSON.parse(JSON.stringify(data))['collection_name'];
        });
      }
    })
  }

  onSubmit() {
    if(this.name.value == ''){
      alert('Enter Some Value')
      return;
    }else{
      this.isHidden = false;
      console.log(this.parent_id)
      this.collectionService.addCollection( this.name.value,this.parent_id)
      .subscribe(data=>{
        console.log(data);
        this.isHidden = true;
        this.collection_name = null;
      });
    }
  }
}
