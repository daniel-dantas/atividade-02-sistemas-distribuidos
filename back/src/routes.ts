import { Router } from "express";
import ArtistController from "./controllers/ArtistController";
import RecomandationController from "./controllers/RecomendationController";

const router = Router();

router.get("/artista/:name", ArtistController.search);
router.get("/recomendacao/:id", RecomandationController.index);

export default router;
