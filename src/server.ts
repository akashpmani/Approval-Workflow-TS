import app from './app';
import ensureDbConnection from 'src/models/base';

const PORT = 3000;

(async () => {
    try {
        await ensureDbConnection();
        console.clear();

        app.listen(PORT, () => {
            console.log(`Server is Listening on port ${PORT}`);
        });
    } catch (error) {
        console.error('Unable to start server.');
        console.error(error);
    }
})();