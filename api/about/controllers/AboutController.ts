import { Response, Request } from 'express';
import { getAbout, updateAbout } from '../services/AboutService';

export async function getAboutController(req: Request, res: Response) {
	const about = await getAbout();
	console.log(about);
	res.send(JSON.stringify({ about: about }));
}

export async function updateAboutController(req: Request, res: Response) {
	const body = req.body;
	const about = await updateAbout(body.newAbout);
	res.send(JSON.stringify({ about: about }));
}
