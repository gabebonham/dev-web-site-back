export async function setHeaders(req, res) {
	const a = (await req.headers).host as string;
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app',
	); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Headers, authorization, Authorization, host',
	);
	res.setHeader('Accept', 'application/json');
}
function getCookie(value) {
	if (!value) {
		console.log('No cookies found');
		return null;
	}
	const list = value.split(';');
	const listDict = list.map((i) => {
		const newList = i.split('=');
		return { key: newList[0], value: newList[1] };
	});
	const session = listDict.filter((i) => i.key == 'host')[0];
	if (session) {
		console.log('Session value:', session.value);
		return session.value;
	} else {
		console.log('Session cookie not found');
		return null;
	}
}
