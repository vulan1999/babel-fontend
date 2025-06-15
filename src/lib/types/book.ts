export interface Book {
	id: number;
	title: string;
	created_at: Date;
	updated_at: Date;
	author: {
		author_id: number;
		author_name: string;
	},
	language: {
		language_id: number;
		language_description: string;
	},
	original_book: {
		original_book_id: number;
		original_book_title: string;
	},
	tags: {
		tag_id: number;
		tag_description: string;
	}[]
}