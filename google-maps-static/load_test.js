import http from 'k6/http';
import { check, sleep } from 'k6';
import { Counter } from 'k6/metrics';

// Definir un contador global para las solicitudes
export let requestCount = new Counter('requests');

export let options = {
  stages: [
    { duration: '1m', target: 10000 }, // Subida de 0 a 10,000 usuarios en 1 minuto
    { duration: '5m', target: 10000 }, // Mantener 10,000 usuarios durante 5 minutos
    { duration: '1m', target: 0 }, // Reducción a 0 usuarios en 1 minuto
  ],
};

export default function () {
  // Realizar una solicitud HTTP GET
  let res = http.get('https://maps.googleapis.com/maps/api/staticmap?center=18.2208,-66.5901&zoom=8&size=600x300&markers=color:red%7Clabel:A%7C18.18662,-66.30628&markers=color:blue%7Clabel:B%7C18.16274,-66.72212&key=AIzaSyD838uS1TiTSUE_FmckhJSSn6D4rNw4rE4');
  
  // Incrementar el contador de solicitudes
  requestCount.add(1);

  // Verificar que la respuesta tiene un estado 200
  check(res, {
    'status was 200': (r) => r.status == 200,
  });

  // Esperar 1 segundo antes de la próxima iteración
  sleep(1);
}
