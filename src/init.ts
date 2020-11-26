import server from './server';

const port = Number(process.env.PORT) || 31413;

server.listen(port, () => { console.log(`Server is now listening on ::${port}!`); });
