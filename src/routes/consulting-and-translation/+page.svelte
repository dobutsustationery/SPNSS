<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Advisory & Language Services — SPNSS EOOD</title>
	<meta
		name="description"
		content="Business consulting, Bulgarian and English translation, and English-language instruction from SPNSS EOOD."
	/>
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Professional services</p>
		<h1>Clarity across business and language.</h1>
		<p class="lead">
			Focused support for organisations and individuals navigating international work, communication
			and change.
		</p>
	</div>
</section>

<section class="content-section">
	<div class="container content-grid">
		<div>
			<p class="eyebrow">Capabilities</p>
			<h2>Useful expertise, shaped around the brief.</h2>
		</div>
		<div class="service-list">
			<div class="service-item">
				<h3>Business advisory</h3>
				<p>
					Research, structured analysis and practical support for business planning, operations and
					cross-border projects.
				</p>
			</div>
			<div class="service-item">
				<h3>Translation</h3>
				<p>
					Careful translation and language review for business, technical and general materials in
					Bulgarian and English.
				</p>
			</div>
			<div class="service-item">
				<h3>English-language instruction</h3>
				<p>
					Individual and organisational English instruction shaped around professional goals,
					confident communication and real working contexts.
				</p>
			</div>
			<div class="service-item action">
				<p>Tell us what you are working on and we will confirm whether we are a good fit.</p>
				<a class="btn btn-primary" href="{base}/contact">Discuss an enquiry</a>
			</div>
		</div>
	</div>
</section>

<style>
	.action {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding-top: 2.5rem;
	}

	@media (max-width: 600px) {
		.action {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
