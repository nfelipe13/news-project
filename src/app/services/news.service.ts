import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private baseURL = environment.apiURL;
  private key = environment.apiKey;
  constructor(private http: HttpClient) {
    console.log('new services2');
  }
  getNews() {
    console.log(this.baseURL)
    return this.http.get(this.baseURL + 'top-headlines?language=en&apiKey=' + this.key);
  }

  getNewsByCountry(country: string) {
    return this.http.get(this.baseURL + 'top-headlines?country='+country+'&apiKey=' + this.key);
  }
  getNewsByCategory(category: string) {
    return this.http.get(this.baseURL + 'top-headlines?category='+category+'&apiKey=' + this.key);
  }
  getNewsBySearch(query: string) {
    return this.http.get(this.baseURL + 'everything?q='+query+'&from=2021-07-01&sortBy=popularity&apiKey=' + this.key);
  }

  

}
