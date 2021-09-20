const express = require('express');
const sequelize = require('./database/db');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
require('./database/sequelize.relations');

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(morgan('dev')); /* console: PUT, POST, DELETE, GET /route/ - - ms - - */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api', require('./routes/load.route'));
app.use('/api', require('./routes/driver.route'));
app.use('/api', require('./routes/supplier.route'));
app.use('/api', require('./routes/status-load.route'));
app.use('/api', require('./routes/usuario.route'));

app.listen(app.get('port'), async () => {
    console.log('Server on port: ', app.get('port'));
    try {
        await sequelize.authenticate();
        await sequelize.sync({force:false});
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});