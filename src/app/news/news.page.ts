import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  data: any;
  constructor(private newsService: NewsService, private router: Router ) { }

  ngOnInit() {
  	this.newsService.getData('everything?q=apple&from=2019-05-02&to=2019-05-02&sortBy=popularity').subscribe(data => {
  		this.data = data;
      console.log(data);
  	})
  }

  gotoSingleNews(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
