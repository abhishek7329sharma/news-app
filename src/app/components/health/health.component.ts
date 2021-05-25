import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {
  title="Health"
  news:any=[]
  constructor(
   private service:NewsapiService
  ) { }
  
  ngOnInit(): void {
    this.service.healthHeading().subscribe(
      (data)=>{
        console.log(data)
        this.news=data.articles
      },
      (err)=>{
  console.log('err in link');
      }
    )
  }
}
