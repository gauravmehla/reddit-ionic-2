import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RedditService } from '../../services/reddit.service';
import { DetailsPage } from '../details/details'

@Component({
  	selector: 'settings',
  	templateUrl: 'settings.html'
})
export class SettingsPage {
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

  	getDefaults(){
  		this.category = this.categories[0];
  		this.limit = 10;
  	}
}
