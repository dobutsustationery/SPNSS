<script lang="ts">
	import { base } from '$app/paths';

	const divisions = [
		{
			number: '01',
			title: 'Advisory & language services',
			copy: 'Practical business support, professional translation and English-language instruction for organisations working across borders.',
			href: `${base}/consulting-and-translation`,
			link: 'View professional services'
		},
		{
			number: '02',
			title: 'Mobile products',
			copy: 'Independent mobile applications designed, published and supported by SPNSS EOOD for the Apple ecosystem.',
			href: `${base}/mobile-apps`,
			link: 'View mobile products'
		},
		{
			number: '03',
			title: 'Specialist retail',
			copy: 'Dobutsu Stationery is our dedicated destination for carefully selected Japanese writing tools, paper and desk goods.',
			href: `${base}/stationery`,
			link: 'About Dobutsu Stationery'
		}
	];
</script>

<svelte:head>
	<title>SPNSS EOOD — An independent company in Sofia</title>
	<meta
		name="description"
		content="SPNSS EOOD is a Sofia-based company working across professional services, mobile products and specialist Japanese stationery retail."
	/>
</svelte:head>

<section class="hero">
	<div class="container hero-grid">
		<div>
			<p class="eyebrow">Independent company · Sofia, Bulgaria</p>
			<h1>Different fields.<br />One considered approach.</h1>
		</div>
		<div class="hero-copy">
			<p>
				SPNSS EOOD develops a small portfolio of services and products: business and language
				consulting, mobile applications, and specialist retail.
			</p>
			<a class="text-link" href="{base}/contact">Start a conversation <span>↗</span></a>
		</div>
	</div>
</section>

<section class="divisions" aria-labelledby="divisions-title">
	<div class="container">
		<div class="section-heading">
			<p class="eyebrow">What we do</p>
			<h2 id="divisions-title">Three distinct areas of work</h2>
		</div>
		<div class="division-list">
			{#each divisions as division (division.number)}
				<a class="division" href={division.href}>
					<span class="number">{division.number}</span>
					<div>
						<h3>{division.title}</h3>
						<p>{division.copy}</p>
					</div>
					<span class="division-link">{division.link} <span aria-hidden="true">→</span></span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="company">
	<div class="container company-grid">
		<div>
			<p class="eyebrow light">The company</p>
			<h2>Built for useful, lasting work.</h2>
		</div>
		<div class="company-copy">
			<p>
				Our business lines are independent, but share the same priorities: clarity, care and
				responsible delivery. We work from Sofia with clients and customers in Europe and beyond.
			</p>
			<dl>
				<div>
					<dt>Registered entity</dt>
					<dd>SPNSS EOOD</dd>
				</div>
				<div>
					<dt>Based in</dt>
					<dd>Sofia, Bulgaria</dd>
				</div>
				<div>
					<dt>Working across</dt>
					<dd>Services, software & retail</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<section class="closing">
	<div class="container closing-inner">
		<div>
			<p class="eyebrow">Enquiries</p>
			<h2>Have a project in mind?</h2>
		</div>
		<a class="btn btn-primary" href="{base}/contact">Contact SPNSS</a>
	</div>
</section>

<style>
	.hero {
		padding: clamp(6rem, 12vw, 10rem) 0 clamp(5rem, 9vw, 8rem);
	}

	.hero-grid,
	.company-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
	}

	h1 {
		max-width: 820px;
		font-family: var(--font-serif);
		font-size: clamp(4rem, 8.5vw, 7.6rem);
		font-weight: 400;
		letter-spacing: -0.055em;
		line-height: 0.92;
	}

	.hero-copy {
		padding-bottom: 0.5rem;
	}

	.hero-copy p {
		margin-bottom: 2rem;
		font-size: 1.08rem;
		color: var(--text-secondary);
	}

	.text-link {
		display: inline-flex;
		gap: 0.65rem;
		align-items: center;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid var(--text-primary);
		font-size: 0.9rem;
		font-weight: 650;
	}

	.divisions {
		padding: clamp(5rem, 9vw, 8rem) 0;
		background: var(--bg-card);
		border-block: 1px solid var(--border-light);
	}

	.section-heading {
		display: grid;
		grid-template-columns: 1fr 2fr;
		margin-bottom: 4rem;
	}

	.section-heading h2,
	.company h2,
	.closing h2 {
		font-family: var(--font-serif);
		font-size: clamp(2.8rem, 5vw, 4.5rem);
		font-weight: 400;
		letter-spacing: -0.04em;
		line-height: 1;
	}

	.division-list {
		border-top: 1px solid var(--border-strong);
	}

	.division {
		display: grid;
		grid-template-columns: 0.45fr 1.55fr 0.9fr;
		gap: 2rem;
		align-items: start;
		padding: 2.6rem 0;
		border-bottom: 1px solid var(--border-light);
	}

	.division:hover {
		color: var(--text-primary);
	}

	.number,
	.division-link {
		font-size: 0.78rem;
		font-weight: 650;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.number {
		color: var(--text-muted);
	}

	.division h3 {
		margin-bottom: 0.65rem;
		font-size: 1.35rem;
		font-weight: 650;
		letter-spacing: -0.025em;
	}

	.division p {
		max-width: 600px;
		color: var(--text-secondary);
		font-size: 0.95rem;
	}

	.division-link {
		text-align: right;
	}

	.company {
		padding: clamp(6rem, 10vw, 9rem) 0;
		background: var(--ink);
		color: white;
	}

	.company-grid {
		align-items: start;
	}

	.company-copy > p {
		color: rgba(255, 255, 255, 0.68);
		font-size: 1.05rem;
		margin-bottom: 3rem;
	}

	dl div {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
		padding: 1rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.16);
		font-size: 0.85rem;
	}

	dt {
		color: rgba(255, 255, 255, 0.5);
	}

	dd {
		text-align: right;
	}

	.closing {
		padding: 5rem 0;
	}

	.closing-inner {
		display: flex;
		justify-content: space-between;
		align-items: end;
		gap: 2rem;
	}

	@media (max-width: 760px) {
		.hero-grid,
		.company-grid,
		.section-heading {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.division {
			grid-template-columns: 3rem 1fr;
		}

		.division-link {
			grid-column: 2;
			text-align: left;
		}

		.closing-inner {
			align-items: start;
			flex-direction: column;
		}
	}
</style>
