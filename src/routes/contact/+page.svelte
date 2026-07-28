<svelte:head>
	<title>Contact — SPNSS EOOD</title>
	<meta name="description" content="Contact SPNSS EOOD in Sofia, Bulgaria." />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Contact</p>
		<h1>Contact</h1>
	</div>
</section>

<section class="contact">
	<div class="container contact-grid">
		<div>
			<p class="label">Email</p>
			<a class="email" href="mailto:elpis@spnss.com">elpis@spnss.com</a>
			<p class="note">
				For service enquiries, mobile application support, feedback and privacy requests.
			</p>
		</div>
		<address>
			<p class="label">Registered office</p>
			<strong>SPNSS EOOD</strong><br />
			4 Hristo Belchev St., Floor 1<br />
			Sofia 1000, Bulgaria<br />
			Telephone Number: <a href="tel:+359876771135">+359876771135</a><br />
			VAT Number: BG205669335
		</address>
	</div>
</section>

<style>
	.contact {
		padding: 3.5rem 0 5rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-strong);
	}

	.label {
		margin-bottom: 0.8rem;
		color: var(--text-muted);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.email {
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4vw, 3.5rem);
		letter-spacing: -0.04em;
	}

	.note {
		max-width: 500px;
		margin-top: 1.2rem;
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	address {
		color: var(--text-secondary);
		font-size: 0.9rem;
		font-style: normal;
	}

	address strong {
		color: var(--text-primary);
	}

	@media (max-width: 650px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
