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
		<span class="badge badge-blue">Legal & Compliance</span>
		<h1>Privacy Policy</h1>
		<p class="header-desc">
			Effective Date: July 28, 2026 | Data Controller: SPNSS EOOD (Sofia, Bulgaria)
		</p>
	</div>
</section>

<section class="legal-content-section">
	<div class="container">
		<div class="legal-card card">
			<div class="legal-block">
				<h2>1. Overview & Data Controller</h2>
				<p>
					This Privacy Policy outlines how <strong>SPNSS EOOD</strong> ("Company", "we", "us", or
					"our"), a registered entity under Bulgarian law at
					<em>4 Hristo Belchev St., Floor 1, Sofia 1000, Bulgaria</em>, collects, uses, and protects
					information gathered through our official corporate website and mobile applications
					published on the Apple App Store.
				</p>
				<p>
					We are committed to safeguarding personal data in accordance with the General Data
					Protection Regulation (GDPR) (EU 2016/679) and Apple Developer Program Guidelines.
				</p>
			</div>

			<div class="legal-block">
				<h2>2. Information We Collect</h2>
				<h3>2.1 Corporate Website Inquiries</h3>
				<p>
					When you submit a contact form or inquiry regarding our business consulting, translation,
					ESL services, or mobile applications, we collect your name, email address, inquiry
					category, and message content.
				</p>
				<h3>2.2 Mobile Applications (iOS)</h3>
				<p>
					Our mobile applications published on the Apple App Store are designed with privacy by
					default:
				</p>
				<ul>
					<li>
						<strong>Account Data:</strong> If an app requires account creation, we collect your email
						address and display name.
					</li>
					<li>
						<strong>Technical Diagnostics:</strong> Anonymous crash reports and performance metrics collected
						via Apple's native diagnostic frameworks to resolve software bugs.
					</li>
					<li>
						<strong>In-App Purchases:</strong> All financial transactions are processed securely by Apple
						App Store billing. We do not store or process credit card details.
					</li>
				</ul>
				<h3>2.3 E-Commerce Operations</h3>
				<p>
					For purchases made via our Japanese stationery storefront (<a
						href="https://dobutsustationery.com"
						target="_blank"
						rel="noopener noreferrer">dobutsustationery.com</a
					>), transactional data is governed by the store's dedicated checkout privacy terms.
				</p>
			</div>

			<div class="legal-block">
				<h2>3. Purpose and Legal Basis for Processing</h2>
				<p>We process personal information under the following legal bases:</p>
				<ul>
					<li>
						<strong>Contractual Necessity:</strong> To deliver requested consulting, translation, ESL
						services, or mobile app features.
					</li>
					<li>
						<strong>Legitimate Interests:</strong> To maintain, secure, and optimize our corporate services
						and application stability.
					</li>
					<li>
						<strong>Compliance with Legal Obligations:</strong> To comply with EU statutory accounting
						and tax regulations.
					</li>
				</ul>
			</div>

			<div class="legal-block">
				<h2>4. Data Retention & Third-Party Disclosure</h2>
				<p>
					We do not sell, rent, or trade your personal data to third parties. We retain personal
					data only for as long as necessary to fulfill the operational purposes described in this
					policy, or as required by applicable Bulgarian tax and corporate laws.
				</p>
			</div>

			<div class="legal-block">
				<h2>5. User Rights Under GDPR & Apple Guidelines</h2>
				<p>
					Under EU Data Protection legislation and Apple App Store policies, you hold the following
					rights:
				</p>
				<ul>
					<li>
						<strong>Right of Access:</strong> Request a copy of the personal data we hold about you.
					</li>
					<li>
						<strong>Right to Rectification:</strong> Request correction of inaccurate personal data.
					</li>
					<li>
						<strong>Right to Erasure (Account Deletion):</strong> Request complete deletion of your account
						and personal data.
					</li>
					<li>
						<strong>Right to Restrict Processing:</strong> Request restrictions on processing your data.
					</li>
				</ul>
				<p>
					To exercise any of these rights, please submit a request to <a
						href="mailto:privacy@spnss.com">privacy@spnss.com</a
					>
					or visit our <a href="{base}/app-support">iOS App Support Portal</a>.
				</p>
			</div>

			<div class="legal-block">
				<h2>6. Contact Privacy Officer</h2>
				<address class="legal-address-box">
					<strong>SPNSS EOOD — Data Protection Officer</strong><br />
					4 Hristo Belchev St., Floor 1<br />
					Sofia 1000, Bulgaria<br />
					Direct Email: <a href="mailto:privacy@spnss.com">privacy@spnss.com</a><br />
					App Support: <a href="mailto:support@spnss.com">support@spnss.com</a>
				</address>
			</div>
		</div>
	</div>
</section>

<style>
	.page-header {
		background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
		padding: 3.5rem 0 2rem;
		border-bottom: 1px solid var(--border-color);
	}

	.page-header h1 {
		font-family: var(--font-heading);
		font-size: 2.75rem;
		font-weight: 800;
		color: var(--text-primary);
		margin: 0.75rem 0 0.5rem;
	}

	.header-desc {
		font-size: 0.95rem;
		color: var(--text-muted);
	}

	.legal-content-section {
		padding: 3.5rem 0;
	}

	.legal-card {
		max-width: 900px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 2.25rem;
	}

	.legal-block h2 {
		font-family: var(--font-heading);
		font-size: 1.4rem;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid var(--border-color);
	}

	.legal-block h3 {
		font-size: 1.05rem;
		color: var(--brand-primary);
		margin: 1rem 0 0.4rem;
	}

	.legal-block p {
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.legal-block ul {
		padding-left: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.legal-block li {
		font-size: 0.93rem;
		color: var(--text-secondary);
		margin-bottom: 0.4rem;
		line-height: 1.5;
	}

	.legal-address-box {
		font-style: normal;
		font-size: 0.93rem;
		color: var(--text-secondary);
		background-color: var(--bg-main);
		padding: 1.25rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		margin-top: 0.75rem;
		line-height: 1.6;
	}
</style>
