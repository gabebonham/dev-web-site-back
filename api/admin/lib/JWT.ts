import { SignJWT, jwtVerify } from 'jose';
import bcrypt from 'bcrypt';

const key = new TextEncoder().encode(process.env.JWT_KEY);

export async function decrypt(session) {
	try {
		console.log(session);
		const { payload } = await jwtVerify(session.session, key, {
			algorithms: ['HS256'],
		});
		console.log(payload);
		return payload;
	} catch (e) {
		return null;
	}
}
export async function encrypt(payload) {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('1day')
		.sign(key);
}

export async function hash(value) {
	return await bcrypt.hash(value, 10);
}
