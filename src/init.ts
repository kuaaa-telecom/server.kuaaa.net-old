// Entry point of KUAAA Server.
import server from './server';

const port: Number = Number(process.env.PORT) || 31413;

const init: String = `
Hello KUAAA. \n
Server is listening on 0.0.0.0::${port}.
`;

server.listen(port, (): void => { console.log(init); });
