import { app } from "./app";
import { settings } from "./settings/settings";


app.listen(settings.port, () => {
    console.log(`Server listen port: ${settings.port}`);
});