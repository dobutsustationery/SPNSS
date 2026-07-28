<script lang="ts">
	import { base } from '$app/paths';

	let formState = $state({
		name: '',
		email: '',
		service: 'consulting',
		message: '',
		submitted: false
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (formState.name && formState.email && formState.message) {
			formState.submitted = true;
		}
	}
</script>

<svelte:head>
	<title>SPNSS EOOD — Corporate Consulting, Mobile Apps & E-Commerce</title>
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
	<div class="container hero-container">
		<div class="hero-content">
			<div class="hero-badges">
				<span class="badge badge-blue">Sofia, Bulgaria</span>
				<span class="badge badge-emerald">Apple Developer Partner</span>
				<span class="badge badge-amber">E-Commerce Operator</span>
			</div>

			<h1 class="hero-title">SPNSS EOOD.</h1>
			<p class="hero-subtitle">
				Empowering global businesses with expert corporate consulting, multilingual translation &
				ESL education, innovative iOS mobile app development, and premium Japanese stationery
				e-commerce.
			</p>

			<div class="hero-actions">
				<a href="#services" class="btn btn-primary">Our Services</a>
				<a href="{base}/app-support" class="btn btn-secondary">iOS App Support</a>
				<a
					href="https://dobutsustationery.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-accent"
				>
					Visit Dobutsu Stationery ↗
				</a>
			</div>
		</div>

		<div class="hero-card-widget card">
			<div class="widget-header">
				<span class="widget-icon">🏢</span>
				<div>
					<h3>Corporate Identity</h3>
					<p class="widget-tag">Registered Bulgarian EOOD Company</p>
				</div>
			</div>

			<address class="legal-address">
				<strong>SPNSS EOOD</strong><br />
				4 Hristo Belchev St.<br />
				Floor 1<br />
				Sofia 1000<br />
				Bulgaria
			</address>

			<div class="widget-divider"></div>

			<div class="widget-stats">
				<div class="stat-item">
					<span class="stat-num">3</span>
					<span class="stat-label">Core Divisions</span>
				</div>
				<div class="stat-item">
					<span class="stat-num">100%</span>
					<span class="stat-label">Apple Compliant</span>
				</div>
				<div class="stat-item">
					<span class="stat-num">24h</span>
					<span class="stat-label">Support SLA</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Company Verification & Apple Developer Section -->
<section class="apple-dev-section">
	<div class="container">
		<div class="apple-card card">
			<div class="apple-grid">
				<div class="apple-info">
					<div class="apple-tag-box">
						<span class="apple-symbol"></span>
						<span class="apple-tag-text">Apple Developer Account Verification</span>
					</div>
					<h2>Published Mobile App Identity & Governance</h2>
					<p>
						SPNSS EOOD is a registered corporate developer under the Apple Developer Program. We
						build, manage, and publish native mobile software applications on the Apple App Store.
					</p>
					<div class="apple-features">
						<div class="apple-feature-item">
							<span class="check-icon">✓</span>
							<div>
								<strong>App Store Review Compliance</strong>
								<p>
									Verified legal publisher details, privacy protections, and user data safeguards.
								</p>
							</div>
						</div>
						<div class="apple-feature-item">
							<span class="check-icon">✓</span>
							<div>
								<strong>Dedicated User & Technical Support</strong>
								<p>Public support endpoint and ticketing SLA for all published iOS applications.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="apple-cta-box">
					<h3>iOS App Reviewer Quick Links</h3>
					<p>Required documentation for Apple App Review and App Store guidelines compliance:</p>
					<div class="apple-links-list">
						<a href="{base}/app-support" class="apple-link-card">
							<span class="link-title">App Support Portal</span>
							<span class="link-desc">Contact support, FAQs, & bug reporting</span>
						</a>
						<a href="{base}/privacy" class="apple-link-card">
							<span class="link-title">App Privacy Policy</span>
							<span class="link-desc">GDPR & App Store privacy disclosure</span>
						</a>
						<a href="{base}/terms" class="apple-link-card">
							<span class="link-title">Terms of Service</span>
							<span class="link-desc">User agreements & app licensing terms</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services / Business Pillars Section -->
<section id="services" class="services-section">
	<div class="container">
		<div class="section-header">
			<span class="badge badge-blue">Our Business Pillars</span>
			<h2>Comprehensive Services & Global Ventures</h2>
			<p>
				SPNSS EOOD operates across corporate consulting, software engineering, and international
				retail trade.
			</p>
		</div>

		<div class="services-grid">
			<!-- Pillar 1: Consulting, Translation & ESL -->
			<div class="service-card card">
				<div class="card-icon-box icon-blue">
					<span>🌐</span>
				</div>
				<h3>Consulting, Translation & ESL</h3>
				<p class="service-lead">
					Empowering organizations through strategic corporate advisory, precision language
					translation, and corporate ESL education.
				</p>
				<ul class="service-list">
					<li>
						<strong>Management & Business Advisory:</strong> Operational strategy, market expansion, and
						compliance guidance in Bulgaria and the EU.
					</li>
					<li>
						<strong>Multilingual Translation:</strong> Professional technical, legal, and business translation
						(English, Bulgarian, Japanese).
					</li>
					<li>
						<strong>ESL Training Services:</strong> Tailored English as a Second Language curriculum and
						tutoring for corporate teams and executives.
					</li>
				</ul>
			</div>

			<!-- Pillar 2: Mobile App Development -->
			<div id="mobile-apps" class="service-card card">
				<div class="card-icon-box icon-emerald">
					<span>📱</span>
				</div>
				<h3>Mobile Application Development</h3>
				<p class="service-lead">
					Engineering elegant, high-performance mobile applications for iOS and Apple platforms.
				</p>
				<ul class="service-list">
					<li>
						<strong>Native iOS Engineering:</strong> Swift & SwiftUI application development built for
						performance, security, and battery efficiency.
					</li>
					<li>
						<strong>UX/UI Design & Product Development:</strong> Human Interface Guidelines compliant
						design tailored for mobile users.
					</li>
					<li>
						<strong>App Lifecycle & Publishing:</strong> Complete management of App Store submission,
						CI/CD deployment, and ongoing maintenance.
					</li>
				</ul>
				<div class="card-footer-link">
					<a href="{base}/app-support">Learn more about our iOS Mobile Apps & Support →</a>
				</div>
			</div>

			<!-- Pillar 3: E-Commerce Japanese Stationery -->
			<div class="service-card card highlight-card">
				<div class="card-icon-box icon-amber">
					<span>✏️</span>
				</div>
				<div class="card-top-tag">E-Commerce Operation</div>
				<h3>Dobutsu Stationery</h3>
				<p class="service-lead">
					Direct-to-consumer e-commerce business bringing authentic, premium Japanese stationery to
					enthusiasts worldwide.
				</p>
				<ul class="service-list">
					<li>
						<strong>Curated Japanese Imports:</strong> Premium pens, specialized notebooks, high-grade
						papers, and desk accessories imported directly from Japan.
					</li>
					<li>
						<strong>Storefront Destination:</strong> Operational retail store hosted at
						<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
							>dobutsustationery.com</a
						>.
					</li>
					<li>
						<strong>Global Fulfillment:</strong> Fast, reliable international shipping with dedicated
						customer care.
					</li>
				</ul>
				<div class="card-action-btn">
					<a
						href="https://dobutsustationery.com"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-accent w-full"
					>
						Visit dobutsustationery.com ↗
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact & Address Section -->
<section id="contact" class="contact-section">
	<div class="container">
		<div class="contact-grid">
			<div class="contact-info">
				<span class="badge badge-blue">Get In Touch</span>
				<h2>Contact SPNSS EOOD</h2>
				<p class="contact-desc">
					Whether you require business consulting, translation services, mobile application
					collaboration, or stationery inquiries, our team is ready to assist.
				</p>

				<div class="contact-details-box card">
					<div class="detail-row">
						<span class="detail-icon">📍</span>
						<div>
							<strong>Registered Address</strong>
							<address>
								SPNSS EOOD.<br />
								4 Hristo Belchev St.<br />
								Floor 1<br />
								Sofia 1000<br />
								Bulgaria
							</address>
						</div>
					</div>

					<div class="detail-row">
						<span class="detail-icon">✉️</span>
						<div>
							<strong>Corporate & App Support Email</strong>
							<p><a href="mailto:support@spnss.com">support@spnss.com</a></p>
						</div>
					</div>

					<div class="detail-row">
						<span class="detail-icon">🛍️</span>
						<div>
							<strong>Stationery E-Commerce</strong>
							<p>
								<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
									>dobutsustationery.com</a
								>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="contact-form-container card">
				<h3>Send Us a Message</h3>
				{#if formState.submitted}
					<div class="success-message">
						<span class="success-icon">✓</span>
						<h4>Thank You for Contacting SPNSS EOOD!</h4>
						<p>We have received your message and will respond within 24–48 business hours.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="contact-form">
						<div class="form-group">
							<label for="name">Your Name / Organization</label>
							<input
								type="text"
								id="name"
								bind:value={formState.name}
								required
								placeholder="Jane Doe"
							/>
						</div>

						<div class="form-group">
							<label for="email">Email Address</label>
							<input
								type="email"
								id="email"
								bind:value={formState.email}
								required
								placeholder="jane@company.com"
							/>
						</div>

						<div class="form-group">
							<label for="service">Inquiry Category</label>
							<select id="service" bind:value={formState.service}>
								<option value="consulting">Corporate Consulting & Advisory</option>
								<option value="translation">Translation & ESL Services</option>
								<option value="mobile">Mobile App Development & Support</option>
								<option value="stationery">Japanese Stationery / Dobutsu Inquiry</option>
								<option value="other">General Inquiry</option>
							</select>
						</div>

						<div class="form-group">
							<label for="message">Message</label>
							<textarea
								id="message"
								bind:value={formState.message}
								rows="4"
								required
								placeholder="How can SPNSS EOOD assist you?"
							></textarea>
						</div>

						<button type="submit" class="btn btn-primary w-full">Send Message</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero-section {
		padding: 4.5rem 0 3.5rem;
		background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
		border-bottom: 1px solid var(--border-color);
	}

	.hero-container {
		display: grid;
		grid-template-columns: 1.25fr 1fr;
		gap: 3.5rem;
		align-items: center;
	}

	.hero-badges {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
		margin-bottom: 1.25rem;
	}

	.hero-title {
		font-family: var(--font-heading);
		font-size: 3.25rem;
		font-weight: 800;
		color: var(--text-primary);
		line-height: 1.1;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.hero-subtitle {
		font-size: 1.15rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.hero-card-widget {
		background: var(--bg-card);
		border-color: #cbd5e1;
		position: relative;
	}

	.widget-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.widget-icon {
		font-size: 2.25rem;
	}

	.widget-header h3 {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text-primary);
	}

	.widget-tag {
		font-size: 0.85rem;
		color: var(--brand-accent);
		font-weight: 600;
	}

	.legal-address {
		font-style: normal;
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.6;
		padding: 1rem;
		background-color: var(--bg-accent-soft);
		border-radius: var(--radius-md);
		border-left: 4px solid var(--brand-primary);
	}

	.widget-divider {
		height: 1px;
		background-color: var(--border-color);
		margin: 1.5rem 0;
	}

	.widget-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		text-align: center;
	}

	.stat-num {
		display: block;
		font-family: var(--font-heading);
		font-weight: 800;
		font-size: 1.4rem;
		color: var(--brand-primary);
	}

	.stat-label {
		font-size: 0.75rem;
		color: var(--text-muted);
		font-weight: 600;
		text-transform: uppercase;
	}

	/* Apple Dev Section */
	.apple-dev-section {
		padding: 3.5rem 0;
	}

	.apple-card {
		background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
		border: 1px solid #bae6fd;
	}

	.apple-grid {
		display: grid;
		grid-template-columns: 1.3fr 1fr;
		gap: 3rem;
	}

	.apple-tag-box {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.85rem;
		background-color: #0f172a;
		color: white;
		border-radius: 9999px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.apple-symbol {
		font-size: 1.1rem;
	}

	.apple-info h2 {
		font-family: var(--font-heading);
		font-size: 1.85rem;
		color: var(--text-primary);
		margin-bottom: 1rem;
	}

	.apple-info p {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.apple-features {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.apple-feature-item {
		display: flex;
		gap: 0.75rem;
		align-items: flex-start;
	}

	.check-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24px;
		height: 24px;
		background-color: var(--brand-emerald);
		color: white;
		border-radius: 50%;
		font-size: 0.8rem;
		font-weight: 800;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.apple-cta-box {
		background-color: var(--bg-card);
		padding: 1.75rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		box-shadow: var(--shadow-sm);
	}

	.apple-cta-box h3 {
		font-family: var(--font-heading);
		font-size: 1.15rem;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.apple-cta-box p {
		font-size: 0.85rem;
		color: var(--text-muted);
		margin-bottom: 1rem;
	}

	.apple-links-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.apple-link-card {
		display: flex;
		flex-direction: column;
		padding: 0.75rem 1rem;
		background-color: var(--bg-main);
		border: 1px solid var(--border-color);
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.apple-link-card:hover {
		background-color: var(--bg-accent-soft);
		border-color: var(--brand-accent);
	}

	.link-title {
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--brand-primary);
	}

	.link-desc {
		font-size: 0.78rem;
		color: var(--text-muted);
	}

	/* Services Section */
	.services-section {
		padding: 4.5rem 0;
		background-color: var(--bg-main);
	}

	.section-header {
		text-align: center;
		max-width: 700px;
		margin: 0 auto 3.5rem;
	}

	.section-header h2 {
		font-family: var(--font-heading);
		font-size: 2.25rem;
		font-weight: 800;
		color: var(--text-primary);
		margin: 0.75rem 0;
	}

	.section-header p {
		font-size: 1.05rem;
		color: var(--text-secondary);
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.service-card {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.card-icon-box {
		width: 54px;
		height: 54px;
		border-radius: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
	}

	.icon-blue {
		background-color: #dbeafe;
	}

	.icon-emerald {
		background-color: #d1fae5;
	}

	.icon-amber {
		background-color: #ffedd5;
	}

	.service-card h3 {
		font-family: var(--font-heading);
		font-size: 1.35rem;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.service-lead {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 1.25rem;
		line-height: 1.5;
	}

	.service-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
		margin-bottom: 1.5rem;
	}

	.service-list li {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.service-list strong {
		color: var(--text-primary);
	}

	.highlight-card {
		border-color: #fed7aa;
		background: linear-gradient(180deg, #ffffff 0%, #fff7ed 100%);
	}

	.card-top-tag {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		background-color: var(--brand-amber);
		color: white;
		padding: 0.2rem 0.6rem;
		border-radius: 9999px;
	}

	.card-footer-link {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid var(--border-color);
		font-size: 0.88rem;
		font-weight: 600;
	}

	.card-action-btn {
		margin-top: auto;
	}

	.w-full {
		width: 100%;
	}

	/* Contact Section */
	.contact-section {
		padding: 4.5rem 0;
		background-color: #ffffff;
		border-top: 1px solid var(--border-color);
	}

	.contact-grid {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 3.5rem;
	}

	.contact-info h2 {
		font-family: var(--font-heading);
		font-size: 2.25rem;
		font-weight: 800;
		color: var(--text-primary);
		margin: 0.75rem 0 1rem;
	}

	.contact-desc {
		font-size: 1.05rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}

	.contact-details-box {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.detail-row {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.detail-icon {
		font-size: 1.5rem;
	}

	.detail-row strong {
		display: block;
		font-size: 0.95rem;
		color: var(--text-primary);
		margin-bottom: 0.25rem;
	}

	.detail-row address,
	.detail-row p {
		font-style: normal;
		font-size: 0.9rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	/* Form */
	.contact-form-container h3 {
		font-family: var(--font-heading);
		font-size: 1.35rem;
		color: var(--text-primary);
		margin-bottom: 1.5rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.form-group label {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-color);
		border-radius: var(--radius-md);
		font-family: var(--font-sans);
		font-size: 0.95rem;
		background-color: var(--bg-main);
		color: var(--text-primary);
		transition: border-color 0.2s ease;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--border-focus);
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
	}

	.success-message {
		text-align: center;
		padding: 2.5rem 1.5rem;
	}

	.success-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 56px;
		height: 56px;
		background-color: var(--brand-emerald);
		color: white;
		font-size: 1.75rem;
		font-weight: 800;
		border-radius: 50%;
		margin-bottom: 1rem;
	}

	.success-message h4 {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
	}

	.success-message p {
		font-size: 0.95rem;
		color: var(--text-secondary);
	}

	/* Responsive */
	@media (max-width: 990px) {
		.hero-container,
		.apple-grid,
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.services-grid {
			grid-template-columns: 1fr;
		}

		.hero-title {
			font-size: 2.5rem;
		}
	}
</style>
