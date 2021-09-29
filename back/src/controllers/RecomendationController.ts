import { Request, Response } from "express";
import SpotifyService from "../services/spotify";

abstract class RecomandationController {
	public static async index(req: Request, res: Response) {
		try {
			const { id } = req.params;

			const recomendations = await SpotifyService.getRecomendations(id);

			return res.status(200).json(recomendations);
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}

export default RecomandationController;
