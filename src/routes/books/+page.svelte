<script lang="ts">
	import { onMount } from 'svelte';
	import { Table, TableBody, TableBodyRow,TableBodyCell,TableHead, TableHeadCell } from 'flowbite-svelte'

	let books = []
	onMount(async() => {
		try {
			const response = await fetch('/api/books')
			if(!response.ok){
				throw new Error(`HTTP Error`);
			}
			let res = await response.json();
			console.log(res);
			books = res.data;
		} catch (err) {
			console.log("Error");
			console.log(err)
		} finally {
			console.log("OK")
		}
	})
</script>

<div class="p-4">
	<Table>
		<TableHead>
			<TableHeadCell>Title</TableHeadCell>
			<TableHeadCell>Author</TableHeadCell>
			<TableHeadCell>Original Title</TableHeadCell>
			<TableHeadCell>Language</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each books as book (book.id)}
				<TableBodyRow>
					<TableBodyCell>{book.title}</TableBodyCell>
					<TableBodyCell>{book.author.author_name}</TableBodyCell>
					<TableBodyCell>{book.original_book.original_book_title}</TableBodyCell>
					<TableBodyCell>{book.language.language_description}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
