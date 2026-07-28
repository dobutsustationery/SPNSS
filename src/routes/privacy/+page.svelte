<svelte:head>
	<title>Privacy Policy — SPNSS EOOD</title>
	<meta name="description" content="Privacy policy for SPNSS EOOD mobile applications." />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Last updated 28 July 2026</p>
		<h1>Privacy Policy</h1>
	</div>
</section>

<section class="policy">
	<div class="container policy-grid">
		<div>
			<h2>SPNSS EOOD</h2>
			<address>4 Hristo Belchev St., Floor 1<br />Sofia 1000, Bulgaria</address>
			<a href="mailto:elpis@spnss.com">elpis@spnss.com</a>
		</div>

		<div class="sections">
			<section>
				<h2>GDPR Compliance</h2>
				<p>
					SPNSS EOOD processes personal data in accordance with the EU General Data Protection
					Regulation (GDPR).
				</p>
			</section>

			<section>
				<h2>Information We Process</h2>
				<p>
					When you contact us, we process your email address and message to respond to your enquiry.
					Our apps may receive diagnostic information supplied by Apple when you choose to share it.
					Any additional data used by a specific app is disclosed in that app and its App Store
					privacy information.
				</p>
			</section>

			<section>
				<h2>Use and Sharing</h2>
				<p>
					We use information only to provide support, operate the relevant app and meet legal
					obligations. We do not sell personal data. Service providers may process data only as
					required to provide their service and under equivalent data-protection obligations.
				</p>
			</section>

			<section>
				<h2>Retention and Your Rights</h2>
				<p>
					We keep personal data only as long as needed for these purposes or required by law. You
					may request access, correction or deletion, withdraw consent, or object to processing by
					emailing us. If an SPNSS app offers account creation, account deletion is available within
					that app.
				</p>
			</section>
		</div>
	</div>
</section>

<style>
	.policy {
		padding: 3.5rem 0 5rem;
	}

	.policy-grid {
		display: grid;
		grid-template-columns: 0.65fr 1.5fr;
		gap: clamp(3rem, 8vw, 8rem);
	}

	.policy-grid > div:first-child h2 {
		font-size: 1rem;
		margin-bottom: 0.6rem;
	}

	address,
	.policy-grid > div:first-child a,
	.sections p {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-style: normal;
	}

	.policy-grid > div:first-child a {
		display: inline-block;
		margin-top: 1rem;
		text-decoration: underline;
	}

	.sections {
		border-top: 1px solid var(--border-strong);
	}

	.sections section {
		display: grid;
		grid-template-columns: 0.6fr 1.4fr;
		gap: 2rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--border-light);
	}

	.sections h2 {
		font-size: 0.95rem;
	}

	@media (max-width: 700px) {
		.policy-grid,
		.sections section {
			grid-template-columns: 1fr;
		}

		.sections section {
			gap: 0.6rem;
		}
	}
</style>
