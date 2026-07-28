<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href={favicon} />
	<title>SPNSS EOOD — Corporate Consulting, Mobile Apps & E-Commerce</title>
	<meta
		name="description"
		content="Official website of SPNSS EOOD, Sofia Bulgaria. Corporate consulting, translation & ESL services, iOS mobile app development, and operator of Japanese stationery e-commerce at dobutsustationery.com."
	/>
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>
	main {
		flex: 1;
	}
</style>
