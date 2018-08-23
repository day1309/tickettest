const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('URL', "http://localhost:4200");

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: app.get('URL')}));

// Routes
app.use('/api/tickets' ,require('./routes/tickets.routes'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});