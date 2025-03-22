import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from 'jose';

// Define the payload type for JWT
interface JWTPayload {
	user: {
		userName: string;
	};
	expires: number;
}

// Ensure the JWT key is defined
const JWT_KEY = process.env.JWT_KEY;
if (!JWT_KEY) {
	throw new Error('JWT_KEY environment variable is not defined');
}
const key = new TextEncoder().encode(JWT_KEY);

/**
 * Decrypt and verify a JWT session.
 * @param session - The JWT session token.
 * @returns The decrypted payload if valid, otherwise `null`.
 */
export async function decrypt(session: string): Promise<JWTPayload | null> {
	try {
		console.log('Decrypting session...');
		const { payload } = await jwtVerify(session, key);

		// Validate the payload structure
		if (
			typeof payload === 'object' &&
			payload !== null &&
			'user' in payload &&
			'expires' in payload
		) {
			return payload as any;
		} else {
			console.error('Invalid payload structure');
			return null;
		}
	} catch (error) {
		console.error('Failed to decrypt session:', error);
		return null;
	}
}

/**
 * Encrypt a payload into a JWT session.
 * @param payload - The payload to encrypt.
 * @returns The encrypted JWT session token.
 */
export async function encrypt(payload: JWTPayload): Promise<string> {
	try {
		console.log('Encrypting payload...');
		const expires = new Date().setUTCFullYear(2050, 2, 2); // Set expiration to 2050
		const token = await new SignJWT(payload as any)
			.setIssuedAt()
			.setExpirationTime(expires)
			.setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
			.sign(key);

		console.log('Payload encrypted successfully');
		return token;
	} catch (error) {
		console.error('Failed to encrypt payload:', error);
		throw new Error('Failed to encrypt payload');
	}
}

/**
 * Hash a value using bcrypt.
 * @param value - The value to hash.
 * @returns The hashed value.
 */
export async function hash(value: string): Promise<string> {
	try {
		console.log('Hashing value...');
		const hashedValue = await bcrypt.hash(value, 10); // Salt rounds: 10
		console.log('Value hashed successfully');
		return hashedValue;
	} catch (error) {
		console.error('Failed to hash value:', error);
		throw new Error('Failed to hash value');
	}
}
