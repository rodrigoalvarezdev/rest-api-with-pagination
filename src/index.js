import app from './app';
import './database';

app.listen(app.get('port'));
console.log(`server corriendo en puerto ${app.get('port')}`);