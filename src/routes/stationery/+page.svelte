<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Dobutsu Stationery — SPNSS EOOD</title>
	<meta
		name="description"
		content="Dobutsu Stationery, the Japanese stationery retailer operated by SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Retail</p>
		<h1>Dobutsu Stationery</h1>
		<p class="lead">Japanese stationery retail operated by SPNSS EOOD.</p>
	</div>
</section>

<section class="content-section compact">
	<div class="container content-grid">
		<h2>Product Range</h2>
		<div class="service-list">
			<div class="service-item">
				<h3>Writing Instruments</h3>
				<p>Pens, pencils, inks and related accessories from Japanese manufacturers.</p>
			</div>
			<div class="service-item">
				<h3>Paper Products</h3>
				<p>Notebooks, loose-leaf paper, planners and correspondence goods.</p>
			</div>
			<div class="service-item">
				<h3>Desk Goods</h3>
				<p>Tools, storage and accessories for writing and office use.</p>
			</div>
			<nav class="page-actions" aria-label="Dobutsu Stationery links">
				<a
					class="btn btn-primary"
					href="https://dobutsustationery.com"
					target="_blank"
					rel="noopener noreferrer">Visit the store ↗</a
				>
				<a href="{base}/contact">Company contact →</a>
			</nav>
		</div>
	</div>
</section>

<style>
	.compact {
		padding-top: 3.5rem;
	}

	.page-actions {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		padding-top: 2rem;
		font-size: 0.82rem;
		font-weight: 650;
	}
</style>
