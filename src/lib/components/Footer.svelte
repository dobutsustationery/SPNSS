<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer class="site-footer">
	<div class="container">
		<div class="footer-top">
			<div class="footer-brand-col">
				<div class="brand-title">SPNSS EOOD</div>
				<p class="brand-desc">
					Business consulting and language services, mobile application publishing, and Japanese
					stationery retail.
				</p>
				<address class="company-address">
					4 Hristo Belchev St., Floor 1<br />
					Sofia 1000, Bulgaria
				</address>
			</div>

			<div class="footer-nav-col">
				<span class="footer-heading">Business Areas</span>
				<ul>
					<li><a href="{base}/consulting-and-translation">Consulting & Translation</a></li>
					<li><a href="{base}/mobile-apps">Mobile Applications</a></li>
					<li><a href="{base}/stationery">Dobutsu Stationery</a></li>
				</ul>
			</div>

			<div class="footer-nav-col">
				<span class="footer-heading">Company</span>
				<p class="apple-dev-text">
					SPNSS EOOD<br />Registered in Sofia, Bulgaria
				</p>
				<ul>
					<li><a href="{base}/contact">Contact</a></li>
					<li><a href="{base}/privacy">Privacy Policy</a></li>
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} SPNSS EOOD. All rights reserved.</p>
			<div class="bottom-links">
				<a href="{base}/privacy">Privacy Policy</a>
				<a href="{base}/contact">Contact</a>
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
		grid-template-columns: 1.6fr 1fr 1fr;
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
