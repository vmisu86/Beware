import {Component, OnInit} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {AddPlacePage} from "../add-place/add-place";
import {Place} from "../../model/place";
import {PlacesService} from "../../services/places";
import {PlacePage} from "../place/place";
import {UrgentPage} from "../urgent/urgent";
import {ClassicPage} from "../classic/classic";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage implements OnInit{
	addPlacePage = AddPlacePage;
	urgentPage = UrgentPage;
	classicPage = ClassicPage;
	places: Place[] = [];

	constructor(public modalCtrl: ModalController,
	            private placesService: PlacesService) {

	}

	ngOnInit(){
		this.placesService.fetchPlaces()
			.then(
				(places: Place[]) => this.places = places
			)
	}

	ionViewWillEnter() {
		this.places = this.placesService.loadPlaces();
	}

	onOpenPlace(place: Place, index: number) {
		const modal = this.modalCtrl.create(PlacePage, {place: place, index: index});
		modal.present();

	}

}
