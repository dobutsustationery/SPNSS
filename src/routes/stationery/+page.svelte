<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Dobutsu Stationery — SPNSS EOOD</title>
	<meta
		name="description"
		content="Dobutsu Stationery sells Japanese pens, markers, stickers and paper goods imported from Japan and dispatched from Europe."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Retail</p>
		<h1>Dobutsu Stationery</h1>
		<p class="lead">
			An online shop for Japanese stationery. Products are imported from Japan and dispatched from
			Europe.
		</p>
	</div>
</section>

<section class="content-section compact">
	<div class="container content-grid">
		<h2>Product Range</h2>
		<div class="service-list">
			<div class="service-item">
				<h3>Pens & Markers</h3>
				<p>Japanese pens, fineliners, markers and writing sets.</p>
			</div>
			<div class="service-item">
				<h3>Stickers & Paper Goods</h3>
				<p>Stickers, memo pads, cards and decorative paper.</p>
			</div>
			<div class="service-item">
				<h3>Journalling & Correspondence</h3>
				<p>Materials for journalling and collage, together with Japanese letter sets.</p>
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
