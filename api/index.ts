import dotenv from 'dotenv'
import server from './source/Server';


dotenv.config();
server.init(Number(process.env.SERVER_PORT));

