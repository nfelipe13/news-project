import { Component } from '@angular/core';
import { NewsService } from './services/news.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'newsapi';

  constructor(private http: HttpClient,
    private newsService: NewsService
  ){// this.newsService.getNews()
  }


  ngOnInit(){
    // this.getNews();
  }

  // getNews() {
  //   const baseURL = environment.apiURL;
  //   const container = document.querySelector('#new-article');
  //   let contentHtml = '';
  //   fetch(baseURL)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json, 'res json');
  //       for (const articles of json.articles) {
  //         let urlArticle = articles.url;
  //         contentHtml+= `
  //           <div class="col-md-4">
  //             <a href="${urlArticle}" target="_blank">
  //               <img src="${articles.urlToImage}" alt="${articles.title}" class="img-articles">
  //             </a>
  //             <h3 class="title">${articles.title}</h3>
  //           </div>`;
  //       }
  //       container!.innerHTML = contentHtml;
  //     });
  // }
}
