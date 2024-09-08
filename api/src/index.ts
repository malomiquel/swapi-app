import Hapi from '@hapi/hapi';
import { routes } from './routes';

const server = Hapi.server({
  port: 4000,
  host: '0.0.0.0',
  routes: {
    cors: true
  }
});

const start = async () => {

  server.route(routes)
  await server.start();

  console.log('server running at: ' + server.info.uri);
};

start();
