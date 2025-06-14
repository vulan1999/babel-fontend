/** @type {import('tailwindcss').Config} */
module.exports = {
	// 1. **Content Array:**
	//    This is the most critical part. It tells Tailwind CSS where to look for
	//    HTML, JavaScript, Svelte, and TypeScript files that use Tailwind classes.
	//    - './src/**/*.{html,js,svelte,ts}': Covers your main Svelte components and pages.
	//    - './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}': Includes Flowbite-Svelte components.
	//    - './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}': Includes the Flowbite-Svelte-Icons components.
	//    - './node_modules/flowbite/**/*.js': Includes Flowbite's JavaScript for dynamic components (like dropdowns, modals).
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}', // <-- Crucial for icons
		'./node_modules/flowbite/**/*.js' // <-- Crucial for Flowbite's JS interactions
	],
	theme: {
		// 2. **Extend Theme (Optional but common):**
		//    Use this section to extend Tailwind's default theme with your custom
		//    colors, fonts, spacing, breakpoints, etc., without overriding them.
		extend: {
			// Example: Adding a custom color
			// colors: {
			//   'primary-500': '#3b82f6',
			//   'secondary-500': '#8b5cf6',
			// },
			// Example: Custom font family
			// fontFamily: {
			//   inter: ['Inter', 'sans-serif'],
			// },
		},
	},
	// 3. **Plugins:**
	//    Include any Tailwind plugins you want to use.
	//    - require('flowbite/plugin'): Essential for Flowbite's JavaScript-driven
	//      components (e.g., modals, carousels, dropdowns).
	plugins: [
		require('flowbite/plugin') // <-- Essential for Flowbite functionality
	],
};