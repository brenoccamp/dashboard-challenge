import App from './app';
import 'dotenv/config';

const PORT = Number(process.env.PORT) || 3001;

new App().start(PORT);
