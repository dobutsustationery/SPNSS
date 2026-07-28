<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer class="site-footer">
	<div class="container">
		<div class="footer-grid">
			<div class="footer-col brand-col">
				<div class="footer-logo">
					<span class="logo-box">SP</span>
					<span class="logo-title">SPNSS EOOD</span>
				</div>
				<p class="company-desc">
					Premier European corporate consulting, language translation & ESL training, mobile app
					development studio, and operator of Japanese stationery e-commerce.
				</p>
				<address class="footer-address">
					<strong>SPNSS EOOD</strong><br />
					4 Hristo Belchev St., Floor 1<br />
					Sofia 1000, Bulgaria
				</address>
			</div>

			<div class="footer-col">
				<h4>Business Operations</h4>
				<ul>
					<li><a href="{base}/#services">Consulting & Advisory</a></li>
					<li><a href="{base}/#services">Translation & ESL Services</a></li>
					<li><a href="{base}/#mobile-apps">iOS Mobile App Studio</a></li>
					<li>
						<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
							>Japanese Stationery E-Commerce</a
						>
					</li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Support & Developer</h4>
				<ul>
					<li><a href="{base}/app-support">iOS App Support Portal</a></li>
					<li><a href="{base}/privacy">Privacy Policy</a></li>
					<li><a href="{base}/terms">Terms of Service</a></li>
					<li><a href="{base}/#contact">Contact Corporate Support</a></li>
				</ul>
			</div>

			<div class="footer-col">
				<h4>Apple Developer Status</h4>
				<div class="apple-badge-card">
					<span class="apple-icon"></span>
					<div>
						<strong>Apple Developer Member</strong>
						<p>
							Verified corporate developer entity publishing mobile applications on the iOS App
							Store.
						</p>
					</div>
				</div>
				<p class="support-email">
					Direct Support: <a href="mailto:support@spnss.com">support@spnss.com</a>
				</p>
			</div>
		</div>

		<div class="footer-bottom">
			<p>
				&copy; {new Date().getFullYear()} SPNSS EOOD. All rights reserved. Registered in Sofia, Bulgaria.
			</p>
			<div class="footer-bottom-links">
				<a href="{base}/privacy">Privacy</a>
				<a href="{base}/terms">Terms</a>
				<a href="{base}/app-support">App Support</a>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		background-color: #ffffff;
		border-top: 1px solid var(--border-color);
		padding: 4rem 0 2rem;
		margin-top: auto;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1.25fr 1.25fr 1.5fr;
		gap: 3rem;
		margin-bottom: 3.5rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.logo-box {
		width: 36px;
		height: 36px;
		background: var(--brand-primary);
		color: white;
		font-family: var(--font-heading);
		font-weight: 800;
		border-radius: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.95rem;
	}

	.logo-title {
		font-family: var(--font-heading);
		font-weight: 700;
		font-size: 1.2rem;
		color: var(--text-primary);
	}

	.company-desc {
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 1.25rem;
	}

	.footer-address {
		font-style: normal;
		font-size: 0.88rem;
		color: var(--text-muted);
		line-height: 1.5;
		background-color: var(--bg-main);
		padding: 0.75rem 1rem;
		border-radius: 8px;
		border: 1px solid var(--border-color);
	}

	.footer-col h4 {
		font-family: var(--font-heading);
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 1.25rem;
	}

	.footer-col ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.footer-col ul a {
		font-size: 0.9rem;
		color: var(--text-secondary);
		transition: color 0.2s ease;
	}

	.footer-col ul a:hover {
		color: var(--brand-primary);
	}

	.apple-badge-card {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		background-color: var(--bg-accent-soft);
		border: 1px solid #bfdbfe;
		padding: 1rem;
		border-radius: 12px;
		margin-bottom: 1rem;
	}

	.apple-icon {
		font-size: 1.5rem;
		line-height: 1;
		color: #1e293b;
	}

	.apple-badge-card strong {
		display: block;
		font-size: 0.85rem;
		color: var(--brand-primary);
		margin-bottom: 0.25rem;
	}

	.apple-badge-card p {
		font-size: 0.78rem;
		color: var(--text-secondary);
		line-height: 1.35;
	}

	.support-email {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.footer-bottom {
		border-top: 1px solid var(--border-color);
		padding-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.85rem;
		color: var(--text-muted);
		flex-wrap: wrap;
		gap: 1rem;
	}

	.footer-bottom-links {
		display: flex;
		gap: 1.5rem;
	}

	.footer-bottom-links a {
		color: var(--text-muted);
	}

	.footer-bottom-links a:hover {
		color: var(--brand-primary);
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 600px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
