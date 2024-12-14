import { SignJWT, jwtVerify, jwtDecrypt, JWTDecryptGetKey } from 'jose';
import bcrypt from 'bcrypt';
import 'dotenv';

export async function decrypt(session) {
	const p = process.env.JWT_KEY as string;
	console.log(p);
	const key = new TextEncoder().encode(p);
	console.log(key);
	const keyResolver: JWTDecryptGetKey = async (header, token) => {
		return key; // Return the key for decryption
	};
	try {
		console.log('decrypt');
		const a = await jwtVerify(session, key, {
			algorithms: ['HS256'],
		});
		console.log(a);
		return true;
	} catch (e) {
		return false;
	}
}
export async function encrypt(payload) {
	const p = process.env.JWT_KEY as string;
	console.log(p);
	const key = new TextEncoder().encode(p);
	console.log(key);
	const keyResolver: JWTDecryptGetKey = async (header, token) => {
		return key; // Return the key for decryption
	};
	return await new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('1day')
		.sign(key);
}

export async function hash(value) {
	return await bcrypt.hash(value, 10);
}
