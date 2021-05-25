import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="Top headlines"
  news:any=[]
  constructor(
   private service:NewsapiService
  ) { }

  ngOnInit(): void {
    this.service.topHeading().subscribe(
      (data)=>{
        console.log(data)
        this.news=data.articles
      }
    )
  }

}
