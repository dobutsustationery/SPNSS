<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer class="site-footer">
	<div class="container">
		<div class="footer-top">
			<div class="footer-brand-col">
				<div class="brand-title">SPNSS EOOD</div>
				<p class="brand-desc">
					An independent Sofia company working across professional services, mobile products and
					specialist retail.
				</p>
				<address class="company-address">
					4 Hristo Belchev St., Floor 1<br />
					Sofia 1000, Bulgaria
				</address>
			</div>

			<div class="footer-nav-col">
				<span class="footer-heading">Ventures</span>
				<ul>
					<li><a href="{base}/consulting-and-translation">Advisory & Language</a></li>
					<li><a href="{base}/mobile-apps">Mobile Products</a></li>
					<li><a href="{base}/stationery">Dobutsu Stationery</a></li>
					<li>
						<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
							>Dobutsu Stationery ↗</a
						>
					</li>
				</ul>
			</div>

			<div class="footer-nav-col">
				<span class="footer-heading">Developer & Support</span>
				<ul>
					<li><a href="{base}/app-support">iOS App Support Portal</a></li>
					<li><a href="{base}/privacy">Privacy Policy</a></li>
					<li><a href="{base}/terms">Terms of Service</a></li>
					<li><a href="{base}/contact">Contact</a></li>
				</ul>
			</div>

			<div class="footer-nav-col">
				<span class="footer-heading">Company</span>
				<p class="apple-dev-text">
					SPNSS EOOD<br />Registered in Sofia, Bulgaria
				</p>
				<p class="contact-email">
					Support: <a href="mailto:support@spnss.com">support@spnss.com</a>
				</p>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} SPNSS EOOD. All rights reserved.</p>
			<div class="bottom-links">
				<a href="{base}/privacy">Privacy Policy</a>
				<a href="{base}/terms">Terms of Service</a>
				<a href="{base}/app-support">App Support</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: var(--bg-card);
		border-top: 1px solid var(--border-light);
		padding: 4.5rem 0 2rem;
		margin-top: auto;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1.6fr 1fr 1fr 1fr;
		gap: 3.5rem;
		margin-bottom: 4rem;
	}

	.brand-title {
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 1.1rem;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.brand-desc {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 1.25rem;
		max-width: 380px;
	}

	.company-address {
		font-style: normal;
		font-size: 0.85rem;
		color: var(--text-muted);
		line-height: 1.5;
	}

	.footer-heading {
		display: block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-primary);
		margin-bottom: 1.25rem;
	}

	.footer-nav-col ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.footer-nav-col ul a {
		font-size: 0.88rem;
		color: var(--text-secondary);
	}

	.footer-nav-col ul a:hover {
		color: var(--text-primary);
	}

	.apple-dev-text {
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 0.75rem;
	}

	.contact-email {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.contact-email a {
		color: var(--text-primary);
		font-weight: 500;
	}

	.footer-bottom {
		border-top: 1px solid var(--border-light);
		padding-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.82rem;
		color: var(--text-muted);
		flex-wrap: wrap;
		gap: 1rem;
	}

	.bottom-links {
		display: flex;
		gap: 1.5rem;
	}

	.bottom-links a {
		color: var(--text-muted);
	}

	.bottom-links a:hover {
		color: var(--text-primary);
	}

	@media (max-width: 900px) {
		.footer-top {
			grid-template-columns: 1fr 1fr;
			gap: 2.5rem;
		}
	}

	@media (max-width: 600px) {
		.footer-top {
			grid-template-columns: 1fr;
		}
	}
</style>
