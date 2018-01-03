import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RedditService } from '../../services/reddit.service';
import { DetailsPage } from '../details/details'

@Component({
  	selector: 'reddits',
  	templateUrl: 'reddits.html'
})
export class RedditsPage {
	items : any;
	category : any;
	limit : any;
	categories = [];
	constructor(public navCtrl: NavController, private redditService: RedditService ) {
		this.categories = [
			"Sports",
			"Food",
			"News",
			"Music",
			"Funny",
			"Gaming",
			"Ary"
		];
		this.getDefaults();
  	}

  	ngOnInit() {
  		this.getPosts( this.category , this.limit );
  	}

  	getDefaults(){
  		this.category = this.categories[0];
  		this.limit = 10;
  	}

  	getPosts(category, limit) {
  		this.redditService.getPosts(category, limit).subscribe( response => {
  			this.items = response.data.children;
  		});
  	}

  	viewItem(item){
  		console.log('Item:', item);
  		this.navCtrl.push( DetailsPage, {
  			item: item
  		} );
  	}

  	changeCategory(){
  		this.getPosts( this.category , this.limit )
  	}
}
