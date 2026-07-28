<svelte:head>
	<title>Contact — SPNSS EOOD</title>
	<meta name="description" content="Contact SPNSS EOOD in Sofia, Bulgaria." />
</svelte:head>

<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Contact</p>
		<h1>Let’s talk about the work.</h1>
		<p class="lead">
			Choose the address that best matches your enquiry. A short description of what you need will
			help us respond clearly.
		</p>
	</div>
</section>

<section class="content-section">
	<div class="container contact-grid">
		<div class="contact-block">
			<p class="eyebrow">General & professional services</p>
			<a class="email" href="mailto:support@spnss.com">support@spnss.com</a>
			<p>For company, consulting, translation and language-service enquiries.</p>
		</div>
		<div class="contact-block">
			<p class="eyebrow">Mobile application support</p>
			<a class="email" href="mailto:support@spnss.com?subject=Mobile%20app%20support"
				>support@spnss.com</a
			>
			<p>Include the application name, device model and a brief description of the issue.</p>
		</div>
		<div class="contact-block">
			<p class="eyebrow">Privacy</p>
			<a class="email" href="mailto:privacy@spnss.com">privacy@spnss.com</a>
			<p>For privacy questions, access requests and account or data deletion requests.</p>
		</div>
		<address class="address">
			<p class="eyebrow">Registered office</p>
			<strong>SPNSS EOOD</strong><br />
			4 Hristo Belchev St., Floor 1<br />
			Sofia 1000, Bulgaria
		</address>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		border-top: 1px solid var(--border-strong);
	}

	.contact-block,
	.address {
		min-height: 250px;
		padding: 2.5rem 2.5rem 2.5rem 0;
		border-bottom: 1px solid var(--border-light);
	}

	.contact-block:nth-child(even),
	.address {
		padding-left: 2.5rem;
		border-left: 1px solid var(--border-light);
	}

	.email {
		display: inline-block;
		margin: 1rem 0 1.5rem;
		font-family: var(--font-serif);
		font-size: clamp(1.7rem, 3vw, 2.5rem);
		letter-spacing: -0.035em;
	}

	.contact-block p:last-child,
	.address {
		color: var(--text-secondary);
		font-size: 0.92rem;
		font-style: normal;
	}

	.address strong {
		color: var(--text-primary);
	}

	@media (max-width: 700px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}

		.contact-block,
		.contact-block:nth-child(even),
		.address {
			min-height: 0;
			padding: 2rem 0;
			border-left: 0;
		}
	}
</style>
