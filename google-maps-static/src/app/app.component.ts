import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'google-maps-project';
  center: google.maps.LatLngLiteral = {lat: 18.2208, lng: -66.5901};
  zoom = 8; // Nivel de zoom inicial
  initialCenter: google.maps.LatLngLiteral = {lat: 18.2208, lng: -66.5901}; // Coordenadas iniciales
  initialZoom = 8; // Nivel de zoom inicial
  barranquitasCoordinates: google.maps.LatLngLiteral = {lat: 18.18662, lng: -66.30628}; // Coordenadas para el punto A
  adjuntasCoordinates: google.maps.LatLngLiteral = {lat: 18.16274, lng: -66.72212};  // Coordenadas para el punto B

  mapOptions: google.maps.MapOptions = {
    zoomControl: false, // Desactiva los controles de zoom
    scrollwheel: false, // Desactiva el zoom con el scroll del mouse
    disableDoubleClickZoom: true, // Desactiva el zoom con doble clic
    draggable: false, // Desactiva la posibilidad de arrastrar el mapa
    fullscreenControl: false, // Desactiva el control de pantalla completa
    keyboardShortcuts: false, // Desactiva los atajos de teclado
    streetViewControl: false, // Desactiva el control de Street View
    mapTypeControl: false, // Desactiva el control del tipo de mapa
    styles: [
      {
        featureType: 'poi', // Desactiva los puntos de interés
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'transit', // Desactiva las estaciones de transporte
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road', // Asegúrate de que las calles sean visibles
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'road', // Asegúrate de que los nombres de las calles sean visibles
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'administrative.land_parcel', // Desactiva los límites de las parcelas
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      }
    ]
  };

  markerClicked(coordinates: google.maps.LatLngLiteral) {
    this.center = coordinates;
    this.zoom = 19; // Nivel de zoom para mostrar las calles
  }

  resetMap() {
    this.center = this.initialCenter;
    this.zoom = this.initialZoom;
  }
}
