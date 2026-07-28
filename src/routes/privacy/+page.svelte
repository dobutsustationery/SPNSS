<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Privacy Policy — SPNSS EOOD</title>
	<meta
		name="description"
		content="Privacy Policy for SPNSS EOOD website and published iOS mobile applications. Compliant with EU GDPR and Apple App Store Review Guidelines."
	/>
</svelte:head>

<section class="page-header">
	<div class="container">
		<span class="tag-label">Legal & Compliance</span>
		<h1>Privacy Policy</h1>
		<p class="header-desc">
			Effective Date: July 28, 2026 &bull; Data Controller: SPNSS EOOD (Sofia, Bulgaria)
		</p>
	</div>
</section>

<section class="legal-body">
	<div class="container">
		<div class="legal-card card">
			<div class="legal-section">
				<h2>1. Overview & Data Controller</h2>
				<p>
					This Privacy Policy outlines how <strong>SPNSS EOOD</strong> ("Company", "we", "us", or
					"our"), registered under Bulgarian corporate law at
					<em>4 Hristo Belchev St., Floor 1, Sofia 1000, Bulgaria</em>, processes and protects
					information gathered through our official corporate website and mobile applications
					published on the Apple App Store.
				</p>
				<p>
					We adhere strictly to the EU General Data Protection Regulation (GDPR) (EU 2016/679) and
					Apple Developer Program Guidelines.
				</p>
			</div>

			<div class="legal-section">
				<h2>2. Information We Process</h2>
				<h3>2.1 Corporate Website Inquiries</h3>
				<p>
					When submitting inquiries regarding corporate consulting, translation, ESL services, or
					mobile apps, we process your name, contact email address, inquiry category, and message
					details.
				</p>
				<h3>2.2 Mobile Applications (iOS)</h3>
				<p>
					Mobile applications published on the Apple App Store are engineered with privacy by
					design:
				</p>
				<ul>
					<li>
						<strong>Account Data:</strong> If user authentication is required, we process your email address
						and display name.
					</li>
					<li>
						<strong>System Diagnostics:</strong> Anonymous crash logs collected via Apple's native diagnostic
						frameworks to maintain app stability.
					</li>
					<li>
						<strong>In-App Purchases:</strong> Billing is processed securely by Apple App Store infrastructure.
						We do not collect or store financial credentials.
					</li>
				</ul>
				<h3>2.3 E-Commerce Operations</h3>
				<p>
					Orders processed via our Japanese stationery storefront (<a
						href="https://dobutsustationery.com"
						target="_blank"
						rel="noopener noreferrer">dobutsustationery.com</a
					>) are governed by dedicated checkout privacy terms.
				</p>
			</div>

			<div class="legal-section">
				<h2>3. Legal Basis for Processing</h2>
				<p>We process personal data under the following legal bases:</p>
				<ul>
					<li>
						<strong>Performance of Contract:</strong> To deliver requested consulting, translation, ESL
						services, or mobile app functionality.
					</li>
					<li>
						<strong>Legitimate Interests:</strong> To secure, maintain, and optimize our digital services
						and application software.
					</li>
					<li>
						<strong>Legal Compliance:</strong> To satisfy statutory accounting, tax, and corporate record
						obligations in Bulgaria and the EU.
					</li>
				</ul>
			</div>

			<div class="legal-section">
				<h2>4. Data Retention & Third-Party Disclosure</h2>
				<p>
					We do not sell, rent, or monetize personal data to third parties. We retain personal data
					strictly for as long as necessary to fulfill operational purposes, or as mandated by
					statutory Bulgarian law.
				</p>
			</div>

			<div class="legal-section">
				<h2>5. Your Rights Under GDPR & Apple Guidelines</h2>
				<p>
					Under European Data Protection law and Apple App Store policies, you hold the following
					rights:
				</p>
				<ul>
					<li><strong>Right of Access:</strong> Request a copy of personal data held about you.</li>
					<li>
						<strong>Right to Rectification:</strong> Request correction of inaccurate records.
					</li>
					<li>
						<strong>Right to Erasure (Account Deletion):</strong> Request permanent deletion of account
						data.
					</li>
					<li>
						<strong>Right to Restriction:</strong> Request restrictions on processing activities.
					</li>
				</ul>
				<p>
					To exercise your rights, contact <a href="mailto:privacy@spnss.com">privacy@spnss.com</a>
					or visit our <a href="{base}/app-support">iOS App Support Portal</a>.
				</p>
			</div>

			<div class="legal-section">
				<h2>6. Contact Data Protection Officer</h2>
				<address class="legal-address-box">
					<strong>SPNSS EOOD &bull; Data Protection Officer</strong><br />
					4 Hristo Belchev St., Floor 1<br />
					Sofia 1000, Bulgaria<br />
					Privacy Contact: <a href="mailto:privacy@spnss.com">privacy@spnss.com</a><br />
					App Support: <a href="mailto:support@spnss.com">support@spnss.com</a>
				</address>
			</div>
		</div>
	</div>
</section>

<style>
	.page-header {
		padding: 5rem 0 3rem;
		border-bottom: 1px solid var(--border-light);
		background-color: var(--bg-main);
	}

	.page-header h1 {
		font-size: 2.75rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.header-desc {
		font-size: 0.92rem;
		color: var(--text-muted);
	}

	.legal-body {
		padding: 4.5rem 0;
	}

	.legal-card {
		max-width: 880px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.legal-section h2 {
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid var(--border-light);
	}

	.legal-section h3 {
		font-size: 1rem;
		font-weight: 700;
		color: var(--text-primary);
		margin: 1rem 0 0.35rem;
	}

	.legal-section p {
		font-size: 0.93rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.legal-section ul {
		padding-left: 1.25rem;
		margin-bottom: 0.75rem;
	}

	.legal-section li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.35rem;
		line-height: 1.5;
	}

	.legal-address-box {
		font-style: normal;
		font-size: 0.9rem;
		color: var(--text-secondary);
		background-color: var(--bg-main);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-light);
		margin-top: 0.75rem;
		line-height: 1.6;
	}
</style>
