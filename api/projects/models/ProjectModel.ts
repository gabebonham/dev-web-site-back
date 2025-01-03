export default class Project {
	id: number;
	name: string;
	description: string;
	link: string;
	inDev: boolean;
	constructor(
		id: number,
		name: string,
		description: string,
		link: string,
		inDev: boolean,
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.link = link;
		this.inDev = inDev;
	}
}
