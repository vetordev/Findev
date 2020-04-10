import express from 'express';
import http from 'http';

interface IServer {
   app: express.Application;
   server: http.Server;
   
   init(listen: number): void;
}

export default IServer;