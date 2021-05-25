import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  title="Science"
  news:any=[]
  constructor(
   private service:NewsapiService
  ) { }

  ngOnInit(): void {
    this.service.scienceHeading().subscribe(
      (data)=>{
        console.log(data)
        this.news=data.articles
      }
    )
  }

}
