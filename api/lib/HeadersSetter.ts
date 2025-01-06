export async function setHeaders(req, res) {
	res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Headers, Authorization, cookie, Set-Cookie',
	);
	res.setHeader('Accept', 'application/json');
}
