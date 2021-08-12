import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meals';
  showList = false;
  mealList :any = [];
  categories :any = [];
  searchbyname="";
  searchbyfirstletter="";
  
  constructor(public http:HttpClient) {
  }

  searchByName(searchTerm:any){
    this.getData('https://www.themealdb.com/api/json/v1/1/search.php?s='+searchTerm).subscribe((res: any) => {
      console.log(res);
      this.showList = true;
      this.mealList = res.meals
    })
  }
  
  searchByFirstLetter(searchTerm:any){
    this.getData('https://www.themealdb.com/api/json/v1/1/search.php?f='+searchTerm).subscribe((res: any) => {
      console.log(res);
      this.showList = true;
      this.mealList = res.meals
    })
  }

  getallMeals(){
    this.getData('https://www.themealdb.com/api/json/v1/1/categories.php').subscribe((res: any) => {
      console.log(res);
      this.categories = res.categories
    })
  }
  
  // sends request to fetch data from server
  public getData(url:string): Observable<any> {
    return this.http.get(url);
  }
}
