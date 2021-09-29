import App from "./app";
import DotEnv from "dotenv";

DotEnv.config();

const application = new App({ PORT: process.env.PORT || 8000 });

application.listen();
