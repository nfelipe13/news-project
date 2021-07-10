import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  dataNews: any;
  dataNewsAutor: any;
  numberAutor: number = 0;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.listNews();
    this.listAutor();
    console.log('11data totalResults');
  }

  listNews() {
    // console.log(this.newsService.getNews())
    this.newsService.getNews().subscribe((data: any) => {
      console.log(data.totalResults, 'data totalResults1234');
      this.dataNews = data.totalResults;
    });
  }

  listAutor() {
    this.newsService.getNews().subscribe((data: any) => {
      console.log(data, 'd11');
      this.dataNewsAutor = data.articles;
      console.log(this.dataNewsAutor, 'd11111ata totalResults');
      // for ( let i = 0; i < data.articles[i].author; i++){
      //   console.log(data.articles[i], 'this.dataNewsAutor.author.length')
      // }

      for (let article of this.dataNewsAutor) {
        console.log(article.author, 'hola')
        this.numberAutor = article.author ? this.numberAutor+1 : this.numberAutor
        // console.log(article.author, 'hola')

      }
    });
  }
}
