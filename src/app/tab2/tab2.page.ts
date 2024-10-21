import { Component } from '@angular/core';
import { photoService } from '../services/photo.service'; // Asegúrate de que este camino sea correcto

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public photoService: photoService) { // Asegúrate de que sea "PhotoService"
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
