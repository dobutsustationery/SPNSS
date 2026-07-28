<script lang="ts">
	import { base } from '$app/paths';
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="site-header">
	<div class="container header-content">
		<a href="{base}/" class="brand-logo">
			<span class="logo-box">SP</span>
			<div class="logo-text">
				<span class="logo-title">SPNSS EOOD</span>
				<span class="logo-subtitle">Corporate & Technology Services</span>
			</div>
		</a>

		<nav class="desktop-nav" aria-label="Main navigation">
			<a href="{base}/#services">Services</a>
			<a href="{base}/#mobile-apps">Mobile Apps</a>
			<a
				href="https://dobutsustationery.com"
				target="_blank"
				rel="noopener noreferrer"
				class="nav-ecommerce"
			>
				<span class="nav-icon">🛒</span> Dobutsu Stationery
			</a>
			<a href="{base}/app-support">App Support</a>
			<a href="{base}/privacy">Privacy Policy</a>
			<a href="{base}/terms">Terms</a>
			<a href="{base}/#contact" class="btn btn-primary nav-contact-btn">Contact Us</a>
		</nav>

		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle Navigation Menu">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				{#if isMenuOpen}
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				{:else}
					<line x1="3" y1="12" x2="21" y2="12"></line>
					<line x1="3" y1="6" x2="21" y2="6"></line>
					<line x1="3" y1="18" x2="21" y2="18"></line>
				{/if}
			</svg>
		</button>
	</div>

	{#if isMenuOpen}
		<div class="mobile-menu">
			<a href="{base}/#services" onclick={toggleMenu}>Services</a>
			<a href="{base}/#mobile-apps" onclick={toggleMenu}>Mobile Apps</a>
			<a
				href="https://dobutsustationery.com"
				target="_blank"
				rel="noopener noreferrer"
				onclick={toggleMenu}
			>
				🛒 Dobutsu Stationery
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
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--border-color);
		transition: all 0.3s ease;
	}

	.header-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
	}

	.brand-logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		color: var(--text-primary);
	}

	.logo-box {
		width: 42px;
		height: 42px;
		background: linear-gradient(135deg, var(--brand-primary), var(--brand-accent));
		color: white;
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 1.1rem;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 10px rgba(30, 64, 175, 0.2);
	}

	.logo-text {
		display: flex;
		flex-direction: column;
	}

	.logo-title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 1.15rem;
		letter-spacing: -0.01em;
		color: var(--text-primary);
		line-height: 1.2;
	}

	.logo-subtitle {
		font-size: 0.75rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	.desktop-nav {
		display: flex;
		align-items: center;
		gap: 1.75rem;
	}

	.desktop-nav a {
		font-weight: 500;
		font-size: 0.95rem;
		color: var(--text-secondary);
		transition: color 0.2s ease;
	}

	.desktop-nav a:hover {
		color: var(--brand-primary);
	}

	.nav-ecommerce {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		padding: 0.4rem 0.8rem;
		background-color: #fff7ed;
		border: 1px solid #ffedd5;
		border-radius: 20px;
		color: var(--brand-amber) !important;
		font-weight: 600 !important;
	}

	.nav-ecommerce:hover {
		background-color: #ffedd5;
		color: #c2410c !important;
	}

	.nav-contact-btn {
		padding: 0.5rem 1.2rem;
		font-size: 0.9rem;
	}

	.mobile-toggle {
		display: none;
		background: none;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		padding: 0.5rem;
	}

	.mobile-menu {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		background-color: var(--bg-card);
		border-bottom: 1px solid var(--border-color);
		gap: 1rem;
	}

	.mobile-menu a {
		font-weight: 500;
		color: var(--text-primary);
		padding: 0.5rem 0;
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
