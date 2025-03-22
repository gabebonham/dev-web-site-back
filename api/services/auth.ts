import { Request, Response } from 'express';
import { decrypt, encrypt, hash } from '../lib/JWT';
import bcrypt from 'bcrypt';
import prisma from '../db/PrismaDb';

// Login function
export async function login(req: Request, res: Response) {
	const user = req.body;
	const dbUser = await prisma.user.findFirst({
		where: { userName: user.userName },
	});

	if (!dbUser) {
		return res.status(403).json({ message: 'User not found' });
	}

	const isPasswordValid = await bcrypt.compare(
		user.password,
		dbUser.password,
	);
	if (!isPasswordValid) {
		return res.status(403).json({ message: 'Invalid password' });
	}

	const expires = new Date().setUTCFullYear(2050, 2, 2);
	const session = await encrypt({
		user: user,
		expires: expires,
	});

	res.json({ session, expires });
}

export async function authenticate(req: Request): Promise<boolean> {
	const session = req.headers.authorization;

	if (!session) {
		return false;
	}

	try {
		const decryptedSession = await decrypt(session);
		return !!decryptedSession; // Return true if session is valid
	} catch (error) {
		console.error('Authentication failed:', error);
		return false;
	}
}
