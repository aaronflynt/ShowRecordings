export interface Show {
	name: string;
	shows: Show[];
	files: ShowFile[];
}

export interface ShowFile {
	name: string;
	size: number;
	modified: number;
	url: string;
}