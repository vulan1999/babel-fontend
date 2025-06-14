<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async() => {
		try {
			const response = await fetch('/books')
			if(!response.ok){
				throw new Error(`HTTP Error`);
			}
			books = await response.json();
			console.log(books);
		} catch (e) {
			console.log("Error");
		} finally {
			console.log("OK")
		}
	})
</script>

<h1>Hello Books</h1>