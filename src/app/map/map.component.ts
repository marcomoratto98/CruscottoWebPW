import { Component, OnInit } from '@angular/core';
declare let L;
import 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-icon.png';
import { HttpClient } from '@angular/common/http';
import { Marker, Data } from '../marker';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) { }

  list: Marker[]=[];
  list1: Marker[]=[];

  ngOnInit() {
    const map = L.map('mappa').setView([45.9626, 12.6563], 18);

    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=WqOR2uVZ6nBDzILfkTKa', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      }).addTo(map);
    
      this.list1.forEach(element => {
        //L.marker([element.lat, element.lon],).addTo(map);  

        L.Routing.control({
          waypoints: [
         
             L.latLng(element.lat, element.lon),
             //L.latLng(45.964318, 12.647447)
         ],
         routeWhileDragging: true
       }).addTo(map);

      });

    /*L.Routing.control({
       waypoints: [
      
          L.latLng(45.965092, 12.643569),
          L.latLng(45.964318, 12.647447)
      ],
      routeWhileDragging: true
    }).addTo(map);*/
    
    this.list.forEach(element => {
      L.marker([element.lat, element.lon],).addTo(map);  
    });
/*
    L.marker([45.963077, 12.652999],).addTo(map);

    L.marker([45.963087, 12.652001],).addTo(map);;
*/
    

  }


  Get(){
    this.http.get<Data>("http://localhost:3000/api/data")
    .subscribe((data) => {
      this.list = data.list;
    });
  }

  GetbyId(){
    this.http.get<Data>("http://localhost:3000/api/data/1")
    .subscribe((data) => {
      this.list1 = data.list;
    });
  }



}
