import app from './app';
import ensureDbConnection from 'src/models/base';

const PORT = 3000;

(async () => {
    try {
        const isConnected = await ensureDbConnection();
        if (!isConnected) {
            throw new Error('Db connection unavailable');
        }
        console.clear();

        app.listen(PORT, () => {
            console.log(`Server-Auth is Listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start server.');
        console.error(error);
    }
})();