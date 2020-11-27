// Entry point of KUAAA Server.
import server from './server';

const port = process.env.PORT || 31413;

const init = `
Hello KUAAA. \n
Server is listening on 0.0.0.0::${port}.
`;

server.listen(port, (): void => { console.log(init); });
