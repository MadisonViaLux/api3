const server = require('./api/server');


const port = 7777
server.listen(port, () => console.log(`\n API on port ${port}\n`))