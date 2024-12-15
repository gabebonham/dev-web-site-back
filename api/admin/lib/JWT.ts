import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';
export async function decrypt(session) {
	const key = new TextEncoder().encode('grote');
	try {
		console.log('decrypt');
		const a = await jwtVerify(session, key);
		return true;
	} catch (e) {
		return false;
	}
}
export async function encrypt(payload) {
	const key = new TextEncoder().encode('grote');
	return await new SignJWT(payload)
		.setIssuedAt()
		.setExpirationTime('1h')
		.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
		.sign(key);
}

export async function hash(value) {
	return await bcrypt.hash(value, 10);
}
