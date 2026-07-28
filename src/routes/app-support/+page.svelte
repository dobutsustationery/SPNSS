<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>iOS App Support & Developer Portal — SPNSS EOOD</title>
	<meta
		name="description"
		content="Official Apple App Store support portal for iOS mobile applications published by SPNSS EOOD."
	/>
</svelte:head>

<section class="support-header">
	<div class="container">
		<span class="tag-label">Apple App Store Developer Portal</span>
		<h1>iOS Mobile Application Support Hub</h1>
		<p class="support-lead">
			Technical support and data request information for mobile applications published by SPNSS
			EOOD.
		</p>
	</div>
</section>

<section class="support-body">
	<div class="container">
		<div class="support-grid">
			<!-- Main Column -->
			<div class="support-main">
				<div class="card form-card">
					<h2>Contact Mobile App Support</h2>
					<p class="form-sub">
						Email our support team with the application name, your device model, iOS version and a
						short description of the issue.
					</p>
					<a
						class="btn btn-primary"
						href="mailto:support@spnss.com?subject=Mobile%20app%20support%20request"
						>Email support@spnss.com</a
					>
				</div>

				<!-- App Store Reviewer Notice -->
				<div class="card notice-card">
					<span class="tag-label">App Store Reviewer Notice</span>
					<h3>Developer Identity & Review Guidelines</h3>
					<p>
						This is the support destination for applications published on the App Store by SPNSS
						EOOD.
					</p>
					<div class="details-grid">
						<div>
							<span class="detail-label">Legal Corporate Entity</span>
							<p>SPNSS EOOD</p>
						</div>
						<div>
							<span class="detail-label">Registered Address</span>
							<p>4 Hristo Belchev St., Floor 1, Sofia 1000, Bulgaria</p>
						</div>
						<div>
							<span class="detail-label">Developer Support Contact</span>
							<p><a href="mailto:support@spnss.com">support@spnss.com</a></p>
						</div>
						<div>
							<span class="detail-label">Support Response SLA</span>
							<p>Within 24–48 Business Hours</p>
						</div>
					</div>
				</div>

				<!-- User Account & Data Deletion -->
				<div class="card deletion-card">
					<h3>User Account & Data Deletion Requests</h3>
					<p>
						In compliance with Apple App Store Guideline 5.1.1(v) and EU GDPR regulations, users may
						request deletion of account data associated with any SPNSS EOOD application:
					</p>
					<ol class="deletion-list">
						<li>
							Email <a href="mailto:support@spnss.com?subject=Data%20Deletion%20Request"
								>support@spnss.com</a
							>
							with the subject line <code>Data Deletion Request</code>.
						</li>
						<li>Specify your account email or registered username in the application.</li>
						<li>
							Our privacy team will process and permanently remove your data within 30 days and send
							confirmation upon completion.
						</li>
					</ol>
					<a href="{base}/privacy" class="privacy-link">Read our full Privacy Policy &rarr;</a>
				</div>
			</div>

			<!-- Sidebar Column -->
			<div class="support-sidebar">
				<div class="card sidebar-card">
					<h3>Frequently Asked Questions</h3>

					<div class="faq-block">
						<h4>How do I report an iOS app issue?</h4>
						<p>
							Submit a support ticket using the form on this page or email <a
								href="mailto:support@spnss.com">support@spnss.com</a
							> with your iOS version and device model.
						</p>
					</div>

					<div class="faq-block">
						<h4>What is the support response SLA?</h4>
						<p>
							Our team in Sofia responds to technical support inquiries within 24–48 business hours.
						</p>
					</div>

					<div class="faq-block">
						<h4>How is my personal data handled?</h4>
						<p>
							We process minimal operational data required for application functionality and do not
							sell user data. Review our <a href="{base}/privacy">Privacy Policy</a>.
						</p>
					</div>
				</div>

				<div class="card sidebar-card">
					<h3>SPNSS EOOD Operations</h3>
					<ul class="sidebar-nav">
						<li>
							<a href="{base}/consulting-and-translation">Advisory & Language Services</a>
						</li>
						<li>
							<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
								>Dobutsu Stationery E-Commerce ↗</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.support-header {
		padding: 5rem 0 3.5rem;
		border-bottom: 1px solid var(--border-light);
		background-color: var(--bg-main);
	}

	.support-header h1 {
		font-size: 2.75rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.support-lead {
		font-size: 1.1rem;
		color: var(--text-secondary);
		max-width: 720px;
		line-height: 1.6;
	}

	.support-body {
		padding: 4.5rem 0;
	}

	.support-grid {
		display: grid;
		grid-template-columns: 1.8fr 1fr;
		gap: 3rem;
	}

	.support-main {
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.form-card h2 {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.35rem;
	}

	.form-sub {
		font-size: 0.92rem;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}

	.notice-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.notice-card p {
		font-size: 0.92rem;
		color: var(--text-secondary);
		line-height: 1.55;
	}

	.details-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border-light);
	}

	.detail-label {
		display: block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: var(--text-muted);
		margin-bottom: 0.2rem;
	}

	.details-grid p {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.deletion-card h3 {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.deletion-list {
		padding-left: 1.25rem;
		margin: 1rem 0;
	}

	.deletion-list li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.4rem;
		line-height: 1.5;
	}

	.privacy-link {
		font-size: 0.88rem;
		font-weight: 600;
	}

	.support-sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.sidebar-card h3 {
		font-size: 1.15rem;
		font-weight: 700;
		margin-bottom: 1.25rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--border-light);
	}

	.faq-block {
		margin-bottom: 1.25rem;
	}

	.faq-block h4 {
		font-size: 0.92rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
	}

	.faq-block p {
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.sidebar-nav {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.sidebar-nav a {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	@media (max-width: 900px) {
		.support-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
