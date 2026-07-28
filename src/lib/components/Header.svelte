<script lang="ts">
	import { base } from '$app/paths';
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="site-header">
	<div class="container header-inner">
		<a href="{base}/" class="brand-link">
			<span class="brand-mark">SPNSS</span>
			<span class="brand-sub">EOOD</span>
		</a>

		<nav class="desktop-nav" aria-label="Main Navigation">
			<a href="{base}/consulting-and-translation">Consulting & Translation</a>
			<a href="{base}/mobile-apps">iOS Mobile Apps</a>
			<a href="{base}/stationery">Dobutsu Stationery</a>
			<a href="{base}/contact">Contact</a>
		</nav>

		<div class="header-right">
			<a
				href="https://dobutsustationery.com"
				target="_blank"
				rel="noopener noreferrer"
				class="store-link"
			>
				Store ↗
			</a>
			<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle menu">
				<svg
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					{#if isMenuOpen}
						<path d="M18 6L6 18M6 6l12 12" />
					{:else}
						<path d="M4 8h16M4 16h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div class="mobile-nav-panel">
			<a href="{base}/" onclick={toggleMenu}>Home Overview</a>
			<a href="{base}/consulting-and-translation" onclick={toggleMenu}>Consulting & Translation</a>
			<a href="{base}/mobile-apps" onclick={toggleMenu}>iOS Mobile Apps</a>
			<a href="{base}/stationery" onclick={toggleMenu}>Dobutsu Stationery</a>
			<a href="{base}/contact" onclick={toggleMenu}>Contact Info</a>
			<a href="{base}/privacy" onclick={toggleMenu}>Privacy Policy</a>
		</div>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--bg-nav);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-light);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 76px;
	}

	.brand-link {
		display: flex;
		align-items: baseline;
		gap: 0.4rem;
	}

	.brand-mark {
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 1.15rem;
		letter-spacing: -0.02em;
		color: var(--text-primary);
	}

	.brand-sub {
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		color: var(--text-muted);
		text-transform: uppercase;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.desktop-nav a {
		font-size: 0.78rem;
		font-weight: 500;
		color: var(--text-secondary);
		letter-spacing: -0.01em;
	}

	.desktop-nav a:hover {
		color: var(--text-primary);
	}

	.store-link {
		padding-bottom: 0.2rem;
		border-bottom: 1px solid var(--text-primary);
		font-size: 0.76rem;
		font-weight: 650;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		padding: 0.4rem;
	}

	.mobile-nav-panel {
		display: flex;
		flex-direction: column;
		padding: 1.5rem 2rem;
		background-color: var(--bg-card);
		border-bottom: 1px solid var(--border-light);
		gap: 1rem;
	}

	.mobile-nav-panel a {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--text-primary);
	}

	@media (max-width: 960px) {
		.desktop-nav {
			display: none;
		}
		.mobile-toggle {
			display: block;
		}
	}
</style>
