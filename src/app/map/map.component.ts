import { Component, OnInit } from '@angular/core';
declare let L;
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const map = L.map('mappa').setView([45.9626, 12.6563], 13);

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=WqOR2uVZ6nBDzILfkTKa', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      }).addTo(map);
    
    L.Routing.control({
       waypoints: [
          L.latLng(45.965092, 12.643569),
          L.latLng(45.964318, 12.647447)
      ],
      routeWhileDragging: true
    }).addTo(map);
    
    L.marker([45.963077, 12.652999],).addTo(map);

    L.marker([45.963087, 12.652001],).addTo(map);;


  }

}
