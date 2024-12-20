import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';
export async function decrypt(session) {
	const key = new TextEncoder().encode('grote');
	try {
		console.log('decrypt');
		const { payload } = await jwtVerify(session, key);
		return true;
	} catch (e) {
		return false;
	}
}
export async function encrypt(payload) {
	const key = new TextEncoder().encode('grote');
	console.log(new Date().setUTCFullYear(2050, 2, 2));
	return await new SignJWT(payload)
		.setIssuedAt()
		.setExpirationTime(new Date().setUTCFullYear(2050, 2, 2))
		.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
		.sign(key);
}

export async function hash(value) {
	return await bcrypt.hash(value, 10);
}
