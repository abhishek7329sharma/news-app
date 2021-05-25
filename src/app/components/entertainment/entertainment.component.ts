import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {
title="Entertainment"
news:any=[]
constructor(
 private service:NewsapiService
) { }

ngOnInit(): void {
  this.service.entertainmentHeading().subscribe(
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
