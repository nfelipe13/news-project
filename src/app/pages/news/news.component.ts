import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  title = 'News';
  dataNews: any;
  datosCountry: any;
  datosCategory: any;
  verSeleccionCountry: string = '';
  verSeleccionCategory: string = '';
  searchCountry: string = '';
  searchCategory: string = '';
  searchQuery: string = '';
  searchQueryCountry: string = '';
  constructor(private http: HttpClient, private newsService: NewsService) {
    this.datosCountry = [
      'ae',
      'ar',
      'at',
      'au',
      'be',
      'bg',
      'br',
      'ca',
      'ch',
      'cn',
      'co',
      'cu',
      'cz',
      'de',
      'eg',
      'fr',
      'gb',
      'gr',
      'hk',
      'hu',
      'id',
      'ie',
      'il',
      'in',
      'it',
      'jp',
      'kr',
      'lt',
      'lv',
      'ma',
      'mx',
      'my',
      'ng',
      'nl',
      'no',
      'nz',
      'ph',
      'pl',
      'pt',
      'ro',
      'rs',
      'ru',
      'sa',
      'se',
      'sg',
      'si',
      'sk',
      'th',
      'tr',
      'tw',
      'ua',
      'us',
      've',
      'za',
    ];
    this.datosCategory = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ];
  }

  ngOnInit() {
    this.listNews();
  }

  capturarCategory() {
    this.verSeleccionCategory = this.searchCategory;
    this.newsService
      .getNewsByCategory(this.verSeleccionCategory)
      .subscribe((data: any) => {
        console.log(data, 'data');
        this.dataNews = data.articles;
        console.log(this.dataNews, 'dataNews');
      });
  }

  capturarCountry() {
    this.verSeleccionCountry = this.searchCountry;
    this.newsService
      .getNewsByCountry(this.verSeleccionCountry)
      .subscribe((data: any) => {
        console.log(data, 'data');
        this.dataNews = data.articles;
        console.log(this.dataNews, 'dataNews');
      });
  }

  querySearch() {
    this.newsService
      .getNewsBySearch(this.searchQuery)
      .subscribe((data: any) => {
        console.log(data, 'data');
        this.dataNews = data.articles;
        console.log(this.dataNews, 'dataNews');
      });
  }

  listNews() {
    this.newsService.getNews().subscribe((data: any) => {
      console.log(data, 'data');
      this.dataNews = data.articles;
      console.log(this.dataNews, 'dataNews');
    });
  }
}
