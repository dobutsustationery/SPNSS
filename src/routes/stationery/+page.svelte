<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Dobutsu Stationery — SPNSS EOOD</title>
	<meta
		name="description"
		content="Dobutsu Stationery, the Japanese stationery retail business operated by SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Specialist retail</p>
		<h1>Good tools make everyday work better.</h1>
		<p class="lead">
			Dobutsu Stationery is our independent store for Japanese pens, paper and desk goods chosen for
			the pleasure and utility they bring to daily life.
		</p>
	</div>
</section>

<section class="content-section">
	<div class="container content-grid">
		<div>
			<p class="eyebrow">Dobutsu Stationery</p>
			<h2>A focused store with a point of view.</h2>
		</div>
		<div>
			<div class="service-list">
				<div class="service-item">
					<h3>Selected in Japan</h3>
					<p>
						A changing edit of writing instruments, notebooks, paper and practical desk objects from
						established and lesser-known Japanese makers.
					</p>
				</div>
				<div class="service-item">
					<h3>Chosen for use</h3>
					<p>
						We value materials, function and lasting design over novelty. Every product should feel
						good to own and useful to keep.
					</p>
				</div>
				<div class="service-item">
					<h3>Operated by SPNSS EOOD</h3>
					<p>
						Dobutsu Stationery is a distinct retail brand operated as part of the SPNSS portfolio.
					</p>
				</div>
			</div>
			<div class="links">
				<a
					class="btn btn-primary"
					href="https://dobutsustationery.com"
					target="_blank"
					rel="noopener noreferrer">Visit the store ↗</a
				>
				<a class="btn btn-secondary" href="{base}/contact">Retail enquiries</a>
			</div>
		</div>
	</div>
</section>

<style>
	.links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
		padding-top: 2.5rem;
	}
</style>
