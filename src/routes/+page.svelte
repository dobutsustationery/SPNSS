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
	<div class="container hero-layout">
		<div class="hero-main">
			<span class="tag-label">Sofia, Bulgaria &bull; Corporate Entity</span>
			<h1 class="hero-title">SPNSS EOOD.</h1>
			<p class="hero-lead">
				Strategic business consulting, multilingual translation & ESL instruction, mobile app
				engineering for iOS, and curated Japanese stationery e-commerce.
			</p>

			<div class="hero-cta-group">
				<a href="#ventures" class="btn btn-primary">Explore Ventures</a>
				<a href="{base}/app-support" class="btn btn-secondary">iOS App Support Portal</a>
				<a
					href="https://dobutsustationery.com"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-outline"
				>
					Dobutsu Stationery ↗
				</a>
			</div>
		</div>

		<div class="hero-aside card">
			<span class="tag-label">Legal Registration</span>
			<h3 class="aside-title">SPNSS EOOD</h3>
			<address class="legal-address">
				4 Hristo Belchev St.<br />
				Floor 1<br />
				Sofia 1000<br />
				Bulgaria
			</address>

			<div class="aside-divider"></div>

			<div class="aside-metrics">
				<div class="metric-item">
					<span class="metric-val">EU &bull; BG</span>
					<span class="metric-lbl">Jurisdiction</span>
				</div>
				<div class="metric-item">
					<span class="metric-val">iOS &bull; App Store</span>
					<span class="metric-lbl">Apple Developer</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Ventures & Business Pillars -->
<section id="ventures" class="ventures-section">
	<div class="container">
		<div class="section-intro">
			<span class="tag-label">Core Business Divisions</span>
			<h2>Ventures & Capabilities</h2>
		</div>

		<div class="pillars-grid">
			<!-- Pillar 1 -->
			<div class="pillar-card card">
				<div class="pillar-num">01</div>
				<h3>Consulting, Translation & ESL</h3>
				<p class="pillar-summary">
					Empowering international organizations through strategic advisory, legal and technical
					translation, and corporate language instruction.
				</p>
				<ul class="pillar-list">
					<li>
						<strong>Corporate Advisory:</strong> Business strategy, operations, and EU market entry guidance.
					</li>
					<li>
						<strong>Multilingual Translation:</strong> High-precision translation covering Bulgarian,
						English, and Japanese.
					</li>
					<li>
						<strong>ESL Instruction:</strong> Customized English curriculum and executive language tutoring.
					</li>
				</ul>
			</div>

			<!-- Pillar 2 -->
			<div id="mobile-apps" class="pillar-card card">
				<div class="pillar-num">02</div>
				<h3>Mobile Application Engineering</h3>
				<p class="pillar-summary">
					Architecting refined, high-performance mobile software applications built specifically for
					the Apple iOS ecosystem.
				</p>
				<ul class="pillar-list">
					<li>
						<strong>Native iOS Development:</strong> Swift and SwiftUI applications designed for elegance,
						speed, and privacy.
					</li>
					<li>
						<strong>UI/UX Design:</strong> Human Interface Guidelines compliant user experiences.
					</li>
					<li>
						<strong>Lifecycle & Support:</strong> Complete App Store deployment, maintenance, and user
						support.
					</li>
				</ul>
				<div class="pillar-link">
					<a href="{base}/app-support">iOS App Support Portal & Reviewer Hub &rarr;</a>
				</div>
			</div>

			<!-- Pillar 3 -->
			<div class="pillar-card card pillar-highlight">
				<div class="pillar-num num-accent">03</div>
				<h3>Dobutsu Stationery E-Commerce</h3>
				<p class="pillar-summary">
					Operating a direct-to-consumer e-commerce brand bringing authentic, high-grade Japanese
					stationery to global customers.
				</p>
				<ul class="pillar-list">
					<li>
						<strong>Curated Imports:</strong> Premium pens, notebooks, and specialized paper imported
						from Japan.
					</li>
					<li>
						<strong>Online Storefront:</strong> Hosted and operating at
						<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
							>dobutsustationery.com</a
						>.
					</li>
					<li>
						<strong>Global Retail:</strong> Direct shipping, inventory care, and international customer
						service.
					</li>
				</ul>
				<div class="pillar-action">
					<a
						href="https://dobutsustationery.com"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-primary w-full"
					>
						Visit dobutsustationery.com ↗
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Apple Developer Account & Compliance Hub -->
<section class="apple-compliance-section">
	<div class="container">
		<div class="compliance-card card">
			<div class="compliance-content">
				<div class="compliance-header">
					<span class="tag-label">Apple Developer Account Verification</span>
					<h2>Mobile Application Publishing & Governance</h2>
				</div>
				<p class="compliance-lead">
					SPNSS EOOD is an official corporate member of the Apple Developer Program. We maintain
					rigorous standards of software performance, data privacy, and customer support for all
					mobile applications published under our legal name on the iOS App Store.
				</p>

				<div class="compliance-grid">
					<div class="comp-col">
						<h4>Legal Publisher Identity</h4>
						<p>Registered Entity: <strong>SPNSS EOOD</strong></p>
						<p>Sofia 1000, Bulgaria</p>
					</div>
					<div class="comp-col">
						<h4>Developer Support SLA</h4>
						<p>Target Response: <strong>24–48 Business Hours</strong></p>
						<p>Direct Email: <a href="mailto:support@spnss.com">support@spnss.com</a></p>
					</div>
					<div class="comp-col">
						<h4>App Store Review Documentation</h4>
						<div class="comp-links">
							<a href="{base}/app-support">App Support Portal</a>
							<a href="{base}/privacy">Privacy Policy</a>
							<a href="{base}/terms">Terms of Service</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="contact-section">
	<div class="container">
		<div class="contact-layout">
			<div class="contact-info">
				<span class="tag-label">Direct Communication</span>
				<h2>Get in Touch</h2>
				<p class="contact-intro">
					For corporate consulting inquiries, language services, mobile app development, or
					e-commerce questions, please reach out directly.
				</p>

				<div class="address-box card">
					<h4>Headquarters & Address</h4>
					<address class="legal-address">
						<strong>SPNSS EOOD</strong><br />
						4 Hristo Belchev St.<br />
						Floor 1<br />
						Sofia 1000<br />
						Bulgaria
					</address>
					<p class="email-line">Email: <a href="mailto:support@spnss.com">support@spnss.com</a></p>
					<p class="store-line">
						E-Commerce: <a
							href="https://dobutsustationery.com"
							target="_blank"
							rel="noopener noreferrer">dobutsustationery.com</a
						>
					</p>
				</div>
			</div>

			<div class="contact-form-card card">
				<h3>Send a Request</h3>
				{#if formState.submitted}
					<div class="form-feedback">
						<h4>Message Received</h4>
						<p>
							Thank you for reaching out. Our team in Sofia will respond within 24–48 business
							hours.
						</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="inquiry-form">
						<div class="field-group">
							<label for="name">Name / Organization</label>
							<input
								type="text"
								id="name"
								bind:value={formState.name}
								required
								placeholder="Full Name"
							/>
						</div>

						<div class="field-group">
							<label for="email">Email Address</label>
							<input
								type="email"
								id="email"
								bind:value={formState.email}
								required
								placeholder="email@company.com"
							/>
						</div>

						<div class="field-group">
							<label for="service">Inquiry Category</label>
							<select id="service" bind:value={formState.service}>
								<option value="consulting">Corporate Consulting & Advisory</option>
								<option value="translation">Translation & ESL Services</option>
								<option value="mobile">iOS Mobile App Development & Support</option>
								<option value="stationery">Japanese Stationery / Dobutsu Inquiry</option>
							</select>
						</div>

						<div class="field-group">
							<label for="message">Message</label>
							<textarea
								id="message"
								bind:value={formState.message}
								rows="4"
								required
								placeholder="How can SPNSS EOOD assist you?"
							></textarea>
						</div>

						<button type="submit" class="btn btn-primary w-full">Submit Message</button>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	/* Hero Section */
	.hero-section {
		padding: 5.5rem 0 4.5rem;
		border-bottom: 1px solid var(--border-light);
		background-color: var(--bg-main);
	}

	.hero-layout {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero-title {
		font-family: var(--font-sans);
		font-size: 3.5rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text-primary);
		line-height: 1.08;
		margin-bottom: 1.5rem;
	}

	.hero-lead {
		font-size: 1.15rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2.25rem;
		font-weight: 400;
		max-width: 580px;
	}

	.hero-cta-group {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.hero-aside {
		background-color: var(--bg-card);
	}

	.aside-title {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.legal-address {
		font-style: normal;
		font-size: 0.95rem;
		color: var(--text-secondary);
		line-height: 1.6;
	}

	.aside-divider {
		height: 1px;
		background-color: var(--border-light);
		margin: 1.5rem 0;
	}

	.aside-metrics {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.metric-val {
		display: block;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.metric-lbl {
		font-size: 0.75rem;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	/* Ventures Section */
	.ventures-section {
		padding: 5.5rem 0;
	}

	.section-intro {
		margin-bottom: 3.5rem;
	}

	.section-intro h2 {
		font-size: 2.25rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--text-primary);
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.pillar-card {
		display: flex;
		flex-direction: column;
	}

	.pillar-num {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--text-muted);
		margin-bottom: 1rem;
		letter-spacing: 0.05em;
	}

	.pillar-card h3 {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
		letter-spacing: -0.01em;
	}

	.pillar-summary {
		font-size: 0.92rem;
		color: var(--text-secondary);
		line-height: 1.55;
		margin-bottom: 1.25rem;
	}

	.pillar-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.pillar-list li {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.pillar-link {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid var(--border-light);
		font-size: 0.85rem;
		font-weight: 600;
	}

	.pillar-highlight {
		background-color: #fafaf9;
		border-color: rgba(0, 0, 0, 0.12);
	}

	.num-accent {
		color: var(--accent-gold);
	}

	.pillar-action {
		margin-top: auto;
	}

	.w-full {
		width: 100%;
	}

	/* Apple Compliance Section */
	.apple-compliance-section {
		padding: 2rem 0 5.5rem;
	}

	.compliance-card {
		background-color: var(--bg-card);
		border: 1px solid var(--border-light);
	}

	.compliance-header h2 {
		font-size: 1.85rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 0.75rem;
	}

	.compliance-lead {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 850px;
		margin-bottom: 2rem;
	}

	.compliance-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		padding-top: 2rem;
		border-top: 1px solid var(--border-light);
	}

	.comp-col h4 {
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.comp-col p {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}

	.comp-links {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.comp-links a {
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.comp-links a:hover {
		color: var(--text-secondary);
	}

	/* Contact Section */
	.contact-section {
		padding: 5.5rem 0;
		background-color: #ffffff;
		border-top: 1px solid var(--border-light);
	}

	.contact-layout {
		display: grid;
		grid-template-columns: 1fr 1.1fr;
		gap: 4rem;
	}

	.contact-info h2 {
		font-size: 2.25rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
	}

	.contact-intro {
		font-size: 1.05rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 2rem;
	}

	.address-box h4 {
		font-size: 0.95rem;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}

	.email-line,
	.store-line {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-top: 0.75rem;
	}

	.contact-form-card h3 {
		font-size: 1.35rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
	}

	.inquiry-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.field-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.field-group label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.field-group input,
	.field-group select,
	.field-group textarea {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-light);
		border-radius: var(--radius-md);
		font-family: var(--font-sans);
		font-size: 0.92rem;
		background-color: var(--bg-main);
		color: var(--text-primary);
		transition: border-color 0.2s ease;
	}

	.field-group input:focus,
	.field-group select:focus,
	.field-group textarea:focus {
		outline: none;
		border-color: var(--border-focus);
	}

	.form-feedback {
		padding: 2rem;
		text-align: center;
	}

	.form-feedback h4 {
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}

	.form-feedback p {
		font-size: 0.92rem;
		color: var(--text-secondary);
	}

	@media (max-width: 960px) {
		.hero-layout,
		.compliance-grid,
		.contact-layout {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.pillars-grid {
			grid-template-columns: 1fr;
		}

		.hero-title {
			font-size: 2.75rem;
		}
	}
</style>
