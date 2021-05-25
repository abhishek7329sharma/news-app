import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  title="Technology"
  news:any=[]
  constructor(
   private service:NewsapiService
  ) { }
  
  ngOnInit(): void {
    this.service.topTechHeading().subscribe(
      (data)=>{
        console.log(data)
        this.news=data.articles
      }
    )
  }

}
