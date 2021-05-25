import { Component, OnInit } from '@angular/core';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  title="General"
  news:any=[]
constructor(
 private service:NewsapiService
) { }

ngOnInit(): void {
  this.service.generalHeading().subscribe(
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
