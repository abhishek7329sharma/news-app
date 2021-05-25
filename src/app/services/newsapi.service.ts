import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(
    private http:HttpClient
  ) { }

  newsApiUrl='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=39cc40c563ad4857a344d533291a8574';
  techApiurl='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=39cc40c563ad4857a344d533291a8574'
  entertainmentApiurl='https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=39cc40c563ad4857a344d533291a8574'
  generalApiurl='https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=39cc40c563ad4857a344d533291a8574'
  healthApiurl='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=39cc40c563ad4857a344d533291a8574'
  scienceApiurl='https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=39cc40c563ad4857a344d533291a8574'
  sportsApiurl='https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=39cc40c563ad4857a344d533291a8574'

  topHeading():Observable<any>
  {
   return this.http.get(this.newsApiUrl)

  }
  topTechHeading():Observable<any>{
    return this.http.get(this.techApiurl)
  }
  entertainmentHeading():Observable<any>{
    return this.http.get(this.entertainmentApiurl)
  }
  generalHeading():Observable<any>{
    return this.http.get(this.generalApiurl)
  }
  healthHeading():Observable<any>{
    return this.http.get(this.healthApiurl)
  }
  scienceHeading():Observable<any>{
    return this.http.get(this.scienceApiurl)
  }
  sportsHeading():Observable<any>{
    return this.http.get(this.sportsApiurl)
  }


}
