export default class Blog {
	id: number;
	title: string;
	body: string;
	imageName: string;

	constructor(
		title: string,
		body: string,
		imageName: string,
		id: number,
	) {
		this.id = id;
		this.title = title;
		this.body = body;
		this.imageName = imageName;
	}
}
