export function setHeaders(req, res) {
	res.setHeader('Access-Control-Allow-Origin', req.headers.get('host')); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type, Access-Control-Allow-Headers, authorization, Authorization',
	);
	res.setHeader('Accept', 'application/json');
}
