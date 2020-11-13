/* Enum */
export enum ProjectStatus {
	ACTIVE = 'active',
	FINISHED = 'finished'
}

/* Project Model*/
export class Project {
	constructor(
		public id: string,
		public title: string,
		public description: string,
		public people: number,
		public status: ProjectStatus
	) {
	}
}
