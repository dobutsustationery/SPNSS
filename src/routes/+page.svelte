<script lang="ts">
	import { base } from '$app/paths';

	const divisions = [
		{
			title: 'Consulting & translation',
			services: 'Business advisory, Bulgarian–English translation and English instruction.',
			href: `${base}/consulting-and-translation`
		},
		{
			title: 'Mobile applications',
			services: 'Development, publishing and support for SPNSS mobile products.',
			href: `${base}/mobile-apps`
		},
		{
			title: 'Dobutsu Stationery',
			services: 'Online retail of Japanese pens, paper, notebooks and desk goods.',
			href: `${base}/stationery`
		}
	];
</script>

<svelte:head>
	<title>SPNSS EOOD — Services, Apps & Retail</title>
	<meta
		name="description"
		content="SPNSS EOOD provides consulting and language services, publishes mobile applications, and operates Dobutsu Stationery."
	/>
</svelte:head>

<section class="intro">
	<div class="container intro-grid">
		<div>
			<p class="eyebrow">SPNSS EOOD · Sofia, Bulgaria</p>
			<h1>Services, software and specialist retail.</h1>
		</div>
		<p class="summary">
			SPNSS EOOD is a Bulgarian company providing consulting and language services, publishing
			mobile applications, and operating Dobutsu Stationery.
		</p>
	</div>
</section>

<section class="directory" aria-labelledby="directory-title">
	<div class="container">
		<h2 id="directory-title">Business areas</h2>
		<div class="division-grid">
			{#each divisions as division (division.title)}
				<a class="division" href={division.href}>
					<h3>{division.title}</h3>
					<p>{division.services}</p>
					<span>Details →</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<section class="facts">
	<div class="container facts-grid">
		<dl>
			<div>
				<dt>Registered entity</dt>
				<dd>SPNSS EOOD</dd>
			</div>
			<div>
				<dt>Registered office</dt>
				<dd>4 Hristo Belchev St., Floor 1, Sofia 1000, Bulgaria</dd>
			</div>
		</dl>
		<div class="actions">
			<a class="btn btn-primary" href="{base}/contact">Contact</a>
			<a class="btn btn-secondary" href="{base}/app-support">App support</a>
		</div>
	</div>
</section>

<style>
	.intro {
		padding: clamp(3.5rem, 7vw, 5.5rem) 0;
		border-bottom: 1px solid var(--border-light);
	}

	.intro-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.5fr) minmax(280px, 0.7fr);
		gap: clamp(3rem, 8vw, 8rem);
		align-items: end;
	}

	h1 {
		max-width: 850px;
		font-family: var(--font-serif);
		font-size: clamp(3.4rem, 6.3vw, 5.6rem);
		font-weight: 400;
		letter-spacing: -0.055em;
		line-height: 0.93;
	}

	.summary {
		color: var(--text-secondary);
		font-size: 1.02rem;
	}

	.directory {
		padding: clamp(3.5rem, 6vw, 5rem) 0;
		background: var(--bg-card);
		border-bottom: 1px solid var(--border-light);
	}

	h2 {
		margin-bottom: 1.75rem;
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		text-transform: uppercase;
	}

	.division-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		border-top: 1px solid var(--border-strong);
	}

	.division {
		display: flex;
		min-height: 230px;
		flex-direction: column;
		padding: 1.75rem;
		border-right: 1px solid var(--border-light);
	}

	.division:first-child {
		padding-left: 0;
	}

	.division:last-child {
		padding-right: 0;
		border-right: 0;
	}

	.division h3 {
		margin-bottom: 0.75rem;
		font-size: 1.2rem;
		letter-spacing: -0.025em;
	}

	.division p {
		color: var(--text-secondary);
		font-size: 0.9rem;
	}

	.division span {
		margin-top: auto;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.facts {
		padding: 3rem 0;
	}

	.facts-grid {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 3rem;
	}

	dl {
		width: min(100%, 690px);
	}

	dl div {
		display: grid;
		grid-template-columns: 180px 1fr;
		gap: 1rem;
		padding: 0.7rem 0;
		border-top: 1px solid var(--border-light);
		font-size: 0.82rem;
	}

	dt {
		color: var(--text-muted);
	}

	.actions {
		display: flex;
		gap: 0.6rem;
		flex-shrink: 0;
	}

	@media (max-width: 760px) {
		.intro-grid,
		.division-grid {
			grid-template-columns: 1fr;
		}

		.intro-grid {
			gap: 2rem;
		}

		.division {
			min-height: 0;
			padding: 1.5rem 0;
			border-right: 0;
			border-bottom: 1px solid var(--border-light);
		}

		.division span {
			margin-top: 1.5rem;
		}

		.facts-grid {
			align-items: start;
			flex-direction: column;
		}

		dl div {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}
	}
</style>
