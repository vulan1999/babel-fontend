<script lang="ts">
  import { Navbar, NavBrand} from 'flowbite-svelte';
  import { Sidebar, SidebarGroup, SidebarItem} from 'flowbite-svelte';
  import { BookSolid, AdjustmentsHorizontalSolid, AddressBookSolid, HomeSolid} from "flowbite-svelte-icons";
</script>

<Navbar class="fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800">
  <NavBrand href="/">
    <img src="/icon.png" class="me-3 h-6 sm:h-9" alt="Your Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Babel Library
    </span>
  </NavBrand>
</Navbar>

<Sidebar class="fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    > 
    <SidebarGroup>
        <SidebarItem label="Home" href="/" active={true}>
          {#snippet icon()}
            <HomeSolid class="h-5 w-5"/>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Books" href="/books">
          {#snippet icon()}
            <BookSolid class="h-5 w-5"/>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Authors" href="/authors">
          {#snippet icon()}
            <AddressBookSolid class="h-5 w-5"/>
          {/snippet}
        </SidebarItem>
        <SidebarItem label="Settings" href="/settings">
          {#snippet icon()}
            <AdjustmentsHorizontalSolid class="h-5 w-5"/>
          {/snippet}
        </SidebarItem>
    </SidebarGroup>
</Sidebar>

<div class="p-4 mt-14 ml-64">
    <slot></slot>
</div>