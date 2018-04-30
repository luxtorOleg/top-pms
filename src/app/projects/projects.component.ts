import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  username: String = '';
  ngOnInit() {
    this.router.params.subscribe(params =>
    this.username = params['username']);

  }

}
