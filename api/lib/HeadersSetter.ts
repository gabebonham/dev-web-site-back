export function setHeaders(res) {
	res.setHeader(
		'Access-Control-Allow-Origin',
		'https://dev-web-site-front-production.up.railway.app/',
	); // Frontend domain
	res.setHeader('Access-Control-Allow-Credentials', 'true'); // Allow cookies (credentials)
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, OPTIONS,PATCH',
	); // Allow methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers in requests
	res.setHeader('Access-Control-Allow-Headers', 'authorization');
	res.setHeader('Accept', 'application/json');
}
