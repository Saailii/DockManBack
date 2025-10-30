import config from "./src/config/config.js";
import express from 'express';
const router = express();
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.listen(config.port, () => {
    console.log(`Docker Man listening on port ${config.port}`);
});
