const josnserver = require("json-server");
const server = josnserver.create();
const route = josnserver.router('courses.json');
const jsondefaults = josnserver.defaults();
const cors = require('cors');

server.use(cors());
server.use(route);
server.use(jsondefaults);

const PORT = 3000;
const HOST = 'localhost';

// user npm run server to run project 
// run server from package.json
server.listen(PORT,()=>{
    console.log(`Server is running on: http://${HOST}:${PORT}`);
})

