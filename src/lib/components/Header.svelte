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
			<a href="{base}/#ventures">Ventures & Services</a>
			<a href="{base}/#mobile-apps">iOS Mobile Apps</a>
			<a
				href="https://dobutsustationery.com"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-ext-link"
			>
				Dobutsu Stationery <span class="arrow-icon">↗</span>
			</a>
			<a href="{base}/app-support">App Support</a>
			<a href="{base}/privacy">Privacy</a>
			<a href="{base}/terms">Terms</a>
		</nav>

		<div class="header-right">
			<a href="{base}/#contact" class="btn btn-primary nav-btn">Contact Us</a>
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
			<a href="{base}/#ventures" onclick={toggleMenu}>Ventures & Services</a>
			<a href="{base}/#mobile-apps" onclick={toggleMenu}>iOS Mobile Apps</a>
			<a
				href="https://dobutsustationery.com"
				target="_blank"
				rel="noopener noreferrer"
				onclick={toggleMenu}
			>
				Dobutsu Stationery ↗
			</a>
			<a href="{base}/app-support" onclick={toggleMenu}>App Support</a>
			<a href="{base}/privacy" onclick={toggleMenu}>Privacy Policy</a>
			<a href="{base}/terms" onclick={toggleMenu}>Terms of Service</a>
			<a href="{base}/#contact" class="btn btn-primary" onclick={toggleMenu}>Contact Us</a>
		</div>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 100;
		background-color: var(--bg-nav);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom: 1px solid var(--border-light);
	}

	.header-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 84px;
	}

	.brand-link {
		display: flex;
		align-items: baseline;
		gap: 0.4rem;
	}

	.brand-mark {
		font-family: var(--font-sans);
		font-weight: 800;
		font-size: 1.35rem;
		letter-spacing: -0.03em;
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
		gap: 2.25rem;
	}

	.desktop-nav a {
		font-size: 0.88rem;
		font-weight: 500;
		color: var(--text-secondary);
		letter-spacing: -0.01em;
		position: relative;
	}

	.desktop-nav a:hover {
		color: var(--text-primary);
	}

	.nav-ext-link {
		color: var(--text-primary) !important;
		font-weight: 600 !important;
	}

	.arrow-icon {
		font-size: 0.8rem;
		opacity: 0.7;
	}

	.nav-btn {
		padding: 0.6rem 1.2rem;
		font-size: 0.85rem;
		border-radius: 6px;
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
		gap: 1.2rem;
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
