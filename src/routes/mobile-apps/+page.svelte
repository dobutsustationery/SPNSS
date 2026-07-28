<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Mobile Applications — SPNSS EOOD</title>
	<meta
		name="description"
		content="Mobile applications developed, published and supported by SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Software</p>
		<h1>Mobile applications</h1>
		<p class="lead">Applications developed and published by SPNSS EOOD.</p>
	</div>
</section>

<section class="content-section compact">
	<div class="container content-grid">
		<h2>Activities</h2>
		<div class="service-list">
			<div class="service-item">
				<h3>Application development</h3>
				<p>Product design and software development for mobile applications.</p>
			</div>
			<div class="service-item">
				<h3>Publishing</h3>
				<p>App Store distribution under the SPNSS EOOD legal entity.</p>
			</div>
			<div class="service-item">
				<h3>User support</h3>
				<p>Technical support, privacy enquiries and data deletion requests.</p>
			</div>
			<nav class="page-actions" aria-label="Mobile application information">
				<a class="btn btn-primary" href="{base}/app-support">App support</a>
				<a href="{base}/privacy">Privacy policy →</a>
				<a href="{base}/terms">Terms →</a>
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
		gap: 1.5rem;
		padding-top: 2rem;
		font-size: 0.82rem;
		font-weight: 650;
	}

	@media (max-width: 600px) {
		.page-actions {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
