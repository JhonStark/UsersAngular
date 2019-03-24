import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

posts: Post[];

  constructor(private dataSent: DataService) { 
    this.dataSent.getData().subscribe(data => {
      this.posts = data;
    });
  }

  ngOnInit() {
  }

}
