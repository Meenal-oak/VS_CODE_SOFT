const express = require('express');

const app = express();
const PORT = 8001;

app.listen(PORT, () => Console.LOG('Server Started at PORT:${PORT}'))
