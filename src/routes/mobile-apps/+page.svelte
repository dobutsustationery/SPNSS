<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Mobile Products — SPNSS EOOD</title>
	<meta
		name="description"
		content="Mobile applications developed, published and supported by SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Mobile products</p>
		<h1>Small, purposeful software.</h1>
		<p class="lead">
			We create and operate independent mobile applications with an emphasis on usefulness, privacy
			and careful product support.
		</p>
	</div>
</section>

<section class="content-section">
	<div class="container content-grid">
		<div>
			<p class="eyebrow">Our approach</p>
			<h2>Products made to earn their place.</h2>
		</div>
		<div class="service-list">
			<div class="service-item">
				<h3>Considered product design</h3>
				<p>Clear interfaces and restrained feature sets designed around a specific, useful job.</p>
			</div>
			<div class="service-item">
				<h3>Responsible publishing</h3>
				<p>
					SPNSS EOOD is the legal publisher of its applications and maintains transparent privacy,
					terms and support information.
				</p>
			</div>
			<div class="service-item">
				<h3>Ongoing support</h3>
				<p>
					Questions, technical issues and data requests are handled through our dedicated support
					channel.
				</p>
			</div>
			<div class="links">
				<a class="btn btn-primary" href="{base}/app-support">Open app support</a>
				<a class="btn btn-secondary" href="{base}/privacy">Read our privacy policy</a>
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
