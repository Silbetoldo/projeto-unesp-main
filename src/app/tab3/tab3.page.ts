
import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {
  
 
  constructor() {}

  ngOnInit() {
   
    this.initMap()
  }

  
  // Este exemplo cria um polígono simples representando o Triângulo das Bermudas.

  public initMap(): void {
    const map: google.maps.Map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 5,
        center: { lat:  -21.2074, lng:  -50.4315 },
        mapTypeId: "terrain",
      }
    );

    // Defina as coordenadas LatLng para o caminho do polígono.
    const ataNorte: google.maps.LatLngLiteral[] = [
      { lat: -21.1824, lng: -50.4394 },
      { lat: -21.1824, lng:  -50.4236 },
      { lat: -21.2203, lng: -50.4394 },
   //   { lat: -21.2203, lng: -50.4236},
    ];
    const ataSul: google.maps.LatLngLiteral[] = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    const ataLeste: google.maps.LatLngLiteral[] = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    const ataOeste: google.maps.LatLngLiteral[] = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];

    // Construa o polígono.
    const bermudaTriangle: google.maps.Polygon = new google.maps.Polygon({
      paths: ataNorte,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

     // Construa o polígono.
     const bermudaTriangle1: google.maps.Polygon = new google.maps.Polygon({
      paths: ataSul,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

     // Construa o polígono.
     const bermudaTriangle2: google.maps.Polygon = new google.maps.Polygon({
      paths: ataLeste,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

     // Construa o polígono.
     const bermudaTriangle3: google.maps.Polygon = new google.maps.Polygon({
      paths: ataOeste,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });

    bermudaTriangle.setMap(map);
  }
}