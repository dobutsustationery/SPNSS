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
	<title>SPNSS EOOD — Services, Apps & Retail</title>
	<meta
		name="description"
		content="SPNSS EOOD provides consulting and language services, publishes mobile applications, and operates Dobutsu Stationery."
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
