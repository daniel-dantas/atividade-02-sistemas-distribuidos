import { Request, Response } from "express";
import SpotifyService from "../services/spotify";

abstract class ArtistController {
	public static async search(req: Request, res: Response) {
		try {
			const { name } = req.params;

			const artists = await SpotifyService.searchArtist(name);

			return res.status(200).json(artists);
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}

export default ArtistController;
