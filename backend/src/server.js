const app = require('./app');
require('dotenv').config();

const PORT = process.env.APP_PORT || 3333;

app.listen(3333, () => console.log(`Server running um port ${PORT}`));
