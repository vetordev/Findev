import express from 'express';

interface IServer {
   app: express.Application;

   init(listen: number): void;
}

export default IServer;