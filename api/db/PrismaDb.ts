import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';
import { Pool } from '@neondatabase/serverless';

// WebSocket is not needed for Vercel Serverless Functions
// import ws from 'ws';
// neonConfig.webSocketConstructor = ws;

// Disable querying over fetch (not needed for Vercel Serverless Functions)
// neonConfig.poolQueryViaFetch = true;

// Type definitions
declare global {
	var prisma: PrismaClient | undefined;
}

const connectionString = `${process.env.STORAGE_DATABASE_URL}`;

const pool = new Pool({ connectionString });
const adapter = new PrismaNeon(pool);

// Use global.prisma to avoid creating multiple instances in development
const prisma = global.prisma || new PrismaClient({ adapter });

global.prisma = prisma;

export default prisma;
