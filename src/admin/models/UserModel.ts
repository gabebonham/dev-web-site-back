export default class User {
	id: number;
	userName: string;
	password: string;
	lastSession: string;
	constructor(
		userName: string,
		id: number,
		password: string,
		lastSession: string,
	) {
		this.id = id;
		this.userName = userName;
		this.password = password;
		this.lastSession = lastSession;
	}
}
