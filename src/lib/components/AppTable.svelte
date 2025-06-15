<script lang="ts">
	import { Table, TableBody, TableBodyRow,TableBodyCell,TableHead, TableHeadCell } from 'flowbite-svelte';
	import type { Header } from '$lib/types/table';

	export let stripe: boolean = false;
	export let hoverable: boolean = false;
	export let headers: Header[] = [];
	export let data: Record<string, any>[] = [];

	// Helper function to safely get nested properties from an object
	// E.g., getNestedProperty({'author': {'name': 'Alice'}}, 'author.name') would return 'Alice'
	function getNestedProperty(obj: Record<string, any>, path:string):any{
		if(!obj || path === '' || typeof obj !== 'object'){
			return undefined;
		}
		const parts = path.split(".");
		let current = obj;
		for (const part of parts){
			if (current && typeof current === 'object' && part in current) {
				current = current[part]
			} else {
				// Path not found or an intermediate part is not an object
				return undefined;
			}
		}
		return current;
	}
</script>

<Table striped={stripe} hoverable={hoverable}>
	<TableHead>
		{#each headers as header (header.id)}
		<TableHeadCell>{header.name}</TableHeadCell>
		{/each}
	</TableHead>
	<TableBody>
		{#each data as row (row.id)}
			<TableBodyRow>
				{#each headers as header (header.id)}
					<TableBodyCell>
						{getNestedProperty(row, header.key) ?? 'N/A'}
					</TableBodyCell>
				{/each}
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>