import 'reflect-metadata';
import app from './app';
import ensureDbConnection from 'models/base';

const PORT = 3000;

(async () => {
    if (!ensureDbConnection()) {
        throw new Error('Db connection not ');
    }
    try {
        console.clear();

        app.listen(PORT, () => {
            console.log(`Server-Auth is Listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect.');
        console.error(error);
    }
})()