import { PrismaClient } from '@prisma/client';
import { decrypt, encrypt, hash } from '../lib/JWT';
import bcrypt from 'bcrypt';
import prisma from '../../db/PrismaDb';

export async function login(user) {
	const userIsValid = await verifyUser(user);
	if (userIsValid) {
		const expires = new Date().setUTCFullYear(2050, 2, 2);
		const session = await createSession(user, expires);
		return {
			session: session,
			expires,
		};
	} else {
		return false;
	}
}
export async function verifyUser(user) {
	const dbUser = await prisma.user.findFirst({
		where: { userName: user.userName },
	});
	console.log(dbUser);
	console.log(user);
	return await compareUsers(user, dbUser);
}

async function compareUsers(incomingUser, dbUser) {
	const a = await bcrypt.compare(incomingUser.password, dbUser.password);
	console.log(await hash(incomingUser.password));
	return a;
}

export async function createSession(user, expires) {
	return await encrypt({
		user: user,
		expires: expires,
	});
}

export async function authenticate(session) {
	console.log('service' + session);
	const decryptedSession = await decrypt(session);
	return decryptedSession;
}
