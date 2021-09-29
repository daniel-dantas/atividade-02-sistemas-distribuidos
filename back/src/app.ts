import express, { Express, json } from "express";
import routes from "./routes";

interface IAppConfig {
	PORT: string | number;
}

class App {
	private main: Express;
	private readonly PORT;

	constructor({ PORT }: IAppConfig) {
		this.main = express();
		this.PORT = PORT;
		this.config();
		this.routes();
	}

	private config() {
		this.main.use(json());
	}

	private routes() {
		this.main.get("/api/v1", (req, res) => {
			return res.json({
				projectName: "API Spotify - SD"
			});
		});
		this.main.use("/api/v1", routes);
	}

	public listen() {
		this.main.listen(this.PORT, () => {
			console.log(`Server is open in ${this.PORT}`);
		});
	}
}

export default App;
