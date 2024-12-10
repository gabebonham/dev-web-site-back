export default class Message {
	id: number;
	msg: string;
	email: string;
	scheduled: Date;
	createdAt: Date;
	isNew: boolean;
	constructor(
		id: number,
		msg: string,
		email: string,
		scheduled: Date,
		createdAt: Date,
		isNew: boolean,
	) {
		this.id = id;
		this.msg = msg;
		this.email = email;
		this.scheduled = scheduled;
		this.createdAt = createdAt;
		this.isNew = isNew;
	}
}
