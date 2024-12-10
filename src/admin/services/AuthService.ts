import { PrismaClient } from '@prisma/client';
import { decrypt, encrypt, hash } from '../lib/JWT';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const cookie = {
	name: 'session',
	options: { httpOnly: true, secure: true, sameSite: 'lax', path: '/' },
	duration: 24 * 60 * 60 * 1000,
};

export async function login(user) {
	const userIsValid = await verifyUser(user);
	if (userIsValid) {
		const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
		const session = await createSession(user, expires);
		return {
			session: session,
			...cookie.options,
			expires,
		};
	}
	return null;
}
export async function verifyUser(user) {
	const dbUser = await prisma.user.findUnique({
		where: { userName: user.userName },
	});
	console.log(dbUser);
	return compareUsers(user, dbUser);
}

async function compareUsers(incomingUser, dbUser) {
	if (dbUser) {
		const a = bcrypt.compare(
			incomingUser.password,
			dbUser.password,
		);
		console.log(await hash(incomingUser.password));
		return a;
	} else {
		return false;
	}
}

export async function createSession(user, expires) {
	return await encrypt({
		user: user,
		expires: expires,
	});
}

export async function authenticate(session) {
	try {
		console.log(session + 'ui');
		const decryptedSession = await decrypt(JSON.parse(session));
		if (decryptedSession) {
			return true;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
}
