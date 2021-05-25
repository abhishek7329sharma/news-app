import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';
@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  title="Sports"
  news:any=[]
  constructor(
    private service:NewsapiService
  ) { }

  ngOnInit(): void {
    this.service.sportsHeading().subscribe(
      (data)=>{
        console.log(data)
        this.news=data.articles
      }
    )
  }

}
