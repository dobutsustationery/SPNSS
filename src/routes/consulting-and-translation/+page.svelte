<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Consulting & Translation — SPNSS EOOD</title>
	<meta
		name="description"
		content="Business consulting, Bulgarian–English translation and English instruction from SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Professional services</p>
		<h1>Consulting & translation</h1>
		<p class="lead">Services for companies, organisations and individual professionals.</p>
	</div>
</section>

<section class="content-section compact">
	<div class="container content-grid">
		<h2>Services</h2>
		<div class="service-list">
			<div class="service-item">
				<h3>Business consulting</h3>
				<p>Business research, planning, operational analysis and cross-border project support.</p>
			</div>
			<div class="service-item">
				<h3>Translation</h3>
				<p>Bulgarian–English translation and review for business and general materials.</p>
			</div>
			<div class="service-item">
				<h3>English instruction</h3>
				<p>Individual and organisational instruction for professional English communication.</p>
			</div>
			<nav class="page-actions" aria-label="Next steps">
				<a class="btn btn-primary" href="{base}/contact">Service enquiry</a>
				<a href="{base}/mobile-apps">Mobile applications →</a>
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
