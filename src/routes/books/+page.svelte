<script lang="ts">
	import { onMount } from 'svelte';
	import type { Book } from '$lib/types/book';
	import type { Header } from '$lib/types/table';
	import AppTable from '$lib/components/AppTable.svelte';

	let books: Book[] = []
	interface ApiResponse{
		code: number;
		message: string;
		data: Book[]
	}

	let res:ApiResponse

	onMount(async() => {
		try {
			const response = await fetch('/api/books')
			if(!response.ok){
				throw new Error(`HTTP Error`);
			}
			res = await response.json();
			if (res.code !== 200) {
				throw new Error("API error")
			}
			books = res.data;
		} catch (err) {
			console.log("Error");
			console.log(err)
		} finally {
			console.log("OK");
			console.log(books);
		}
	})

	let header: Header[] = [
		{
			id: 1,
			name: 'ID',
			key: 'id'
		},
		{
			id: 2,
			name: 'Title',
			key: 'title'
		},
		{
			id: 3,
			name: 'Author',
			key: 'author.author_name'
		},
		{
			id: 4,
			name: 'Original Title',
			key: 'original_book.original_book_title'
		},
		{
			id: 5,
			name: 'Language',
			key: 'language.language_description'
		},
	]
</script>

<div class="p-4">
	<AppTable
		headers={header}
		data={books}
	/>
</div>
