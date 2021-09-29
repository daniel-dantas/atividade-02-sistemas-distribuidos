import axios from "axios";
import IArtist from "../interfaces/IArtist";
import DotEnv from "dotenv";

DotEnv.config();

abstract class SpotifyService {
	private static api = axios.create({
		baseURL: "https://api.spotify.com/v1",
		headers: {
			Authorization: "Bearer " + process.env.SPOTIFY_TOKEN
		}
	});

	public static async searchArtist(artistName: string) {
		const response = await this.api.get(`/search?q=${artistName}&type=artist`);

		const artists: IArtist[] = response?.data?.artists?.items;

		return artists;
	}

	public static async getRecomendations(idArtist: string) {
		const response = await this.api.get(
			`/recommendations?seed_artists=${idArtist}`
		);

		const recomendations: IArtist[] = response.data?.tracks?.map(
			(track: any) => {
				return track?.album?.artists;
			}
		);

		return recomendations;
	}
}

export default SpotifyService;
