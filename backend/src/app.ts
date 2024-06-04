import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import ErrorHandler from './middlewares/ErrorHandler';
import routes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.configureCookies();

    this.routes();

    this.app.get('/', (_req, res) => res.json({ status: 'Server are running' }));

    this.middlewares();

  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }
  public configureCookies(): void {
    this.app.use(
      cors({
        credentials: true,
        origin: ['http://localhost:3000'],
      })
    );
  }

  private middlewares(): void {
    this.app.use(ErrorHandler)
  }

  private routes(): void {
    this.app.use(routes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const { app } = new App(); // Usada apenas pelos tests
