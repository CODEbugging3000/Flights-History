import app from "./app";
import config from "./config/config";
import { loadFlightsData } from "./db/dataSource";

app.listen(config.port, async () => {
    console.log(`API rodando em http://localhost:${config.port}/flights`);
    await loadFlightsData();
})