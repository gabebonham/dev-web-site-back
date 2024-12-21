export function setHeaders(res) {
	res.setHeader('Access-Control-Allow-Headers', 'authorization'); // Allow these headers in requests

	res.setHeader('Accept', 'application/json');
}
