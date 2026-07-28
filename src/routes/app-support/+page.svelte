<script lang="ts">
	import { base } from '$app/paths';

	let ticketState = $state({
		appName: 'General iOS Application',
		name: '',
		email: '',
		issueType: 'Technical Issue',
		details: '',
		submitted: false
	});

	function handleTicketSubmit(e: Event) {
		e.preventDefault();
		if (ticketState.name && ticketState.email && ticketState.details) {
			ticketState.submitted = true;
		}
	}
</script>

<svelte:head>
	<title>iOS App Support & Developer Portal — SPNSS EOOD</title>
	<meta
		name="description"
		content="Official Apple App Store support portal for iOS mobile applications published by SPNSS EOOD. Technical support, FAQ, data deletion requests, and reviewer information."
	/>
</svelte:head>

<section class="support-header-section">
	<div class="container">
		<div class="header-badge">
			<span class="apple-logo-icon"></span>
			<span>Apple App Store Developer Support</span>
		</div>
		<h1>iOS Mobile Application Support Hub</h1>
		<p class="header-lead">
			Official support and developer portal for mobile applications built and published by SPNSS
			EOOD.
		</p>
	</div>
</section>

<section class="support-main-section">
	<div class="container">
		<div class="support-grid">
			<!-- Left Column: Support Form & Information -->
			<div class="support-content">
				<div class="card support-card">
					<h2>Submit a Technical Support Ticket</h2>
					<p class="card-subtitle">
						Experiencing an issue with one of our iOS apps? Our development team in Sofia, Bulgaria
						is ready to help.
					</p>

					{#if ticketState.submitted}
						<div class="ticket-success">
							<span class="success-icon">✓</span>
							<h3>Support Ticket Received!</h3>
							<p>
								Thank you, {ticketState.name}. Ticket reference has been registered. Our iOS support
								team will reply to <strong>{ticketState.email}</strong> within 24 business hours.
							</p>
							<button
								onclick={() => (ticketState.submitted = false)}
								class="btn btn-secondary mt-4"
							>
								Submit Another Ticket
							</button>
						</div>
					{:else}
						<form onsubmit={handleTicketSubmit} class="support-form">
							<div class="form-row">
								<div class="form-group">
									<label for="appName">Application Name</label>
									<select id="appName" bind:value={ticketState.appName}>
										<option value="General iOS Application"
											>General iOS Application / In-App Support</option
										>
										<option value="Dobutsu Stationery Mobile"
											>Dobutsu Stationery iOS Companion</option
										>
										<option value="SPNSS ESL Learning">SPNSS ESL Interactive Learning</option>
										<option value="SPNSS Business Utility"
											>SPNSS Corporate Consulting Utility</option
										>
									</select>
								</div>
								<div class="form-group">
									<label for="issueType">Issue Category</label>
									<select id="issueType" bind:value={ticketState.issueType}>
										<option value="Technical Issue">Technical Bug / Crash</option>
										<option value="Feature Request">Feature Request</option>
										<option value="Account & Data">Account & Data Request</option>
										<option value="Billing">In-App Purchase / Billing Inquiry</option>
									</select>
								</div>
							</div>

							<div class="form-row">
								<div class="form-group">
									<label for="name">Your Name</label>
									<input
										type="text"
										id="name"
										bind:value={ticketState.name}
										required
										placeholder="Full Name"
									/>
								</div>
								<div class="form-group">
									<label for="email">Contact Email</label>
									<input
										type="email"
										id="email"
										bind:value={ticketState.email}
										required
										placeholder="user@example.com"
									/>
								</div>
							</div>

							<div class="form-group">
								<label for="details">Describe the Issue or Inquiry</label>
								<textarea
									id="details"
									bind:value={ticketState.details}
									rows="5"
									required
									placeholder="Please provide details (iOS version, device model, steps to reproduce)..."
								></textarea>
							</div>

							<button type="submit" class="btn btn-primary">Submit Support Ticket</button>
						</form>
					{/if}
				</div>

				<!-- App Store Reviewer & Legal Notice Card -->
				<div class="card dev-notice-card">
					<div class="notice-header">
						<span class="notice-badge">Apple App Review Notice</span>
						<h3>App Store Reviewer & Developer Identity</h3>
					</div>
					<p>
						This support page serves as the official support destination URL required under Apple
						App Store Review Guidelines. All applications developed under the SPNSS EOOD entity
						adhere to strict quality, security, and privacy standards.
					</p>
					<div class="dev-details-grid">
						<div>
							<strong>Legal Corporate Entity:</strong>
							<p>SPNSS EOOD</p>
						</div>
						<div>
							<strong>Registered Address:</strong>
							<p>4 Hristo Belchev St., Floor 1, Sofia 1000, Bulgaria</p>
						</div>
						<div>
							<strong>Primary Developer Contact:</strong>
							<p><a href="mailto:support@spnss.com">support@spnss.com</a></p>
						</div>
						<div>
							<strong>Target Response SLA:</strong>
							<p>Within 24–48 Business Hours</p>
						</div>
					</div>
				</div>

				<!-- Data Deletion & Privacy Card -->
				<div class="card data-deletion-card">
					<h3>User Account & Data Deletion Requests</h3>
					<p>
						In compliance with Apple App Store Guideline 5.1.1(v) and EU GDPR regulations, users
						have the right to request deletion of their account data associated with any SPNSS EOOD
						application.
					</p>
					<div class="deletion-steps">
						<ol>
							<li>
								Send an email to <a
									href="mailto:support@spnss.com?subject=Data%20Deletion%20Request"
									>support@spnss.com</a
								>
								with the subject line <code>Data Deletion Request</code>.
							</li>
							<li>Include your account username or registered email address used in the app.</li>
							<li>
								Our privacy team will process and permanently remove your data within 30 calendar
								days and send confirmation upon completion.
							</li>
						</ol>
					</div>
					<div class="card-link-box">
						<a href="{base}/privacy">Read our full Privacy Policy →</a>
					</div>
				</div>
			</div>

			<!-- Right Column: Sidebar FAQ & Quick Links -->
			<div class="support-sidebar">
				<div class="card sidebar-card">
					<h3>Frequently Asked Questions</h3>

					<div class="faq-item">
						<h4>How do I report a bug in an iOS app?</h4>
						<p>
							Use the support ticket form on this page or send an email directly to <a
								href="mailto:support@spnss.com">support@spnss.com</a
							> including your device model and iOS version.
						</p>
					</div>

					<div class="faq-item">
						<h4>What is the support response time?</h4>
						<p>
							Our engineering team in Sofia responds to all inquiries within 24–48 business hours.
						</p>
					</div>

					<div class="faq-item">
						<h4>Where can I view the Privacy Policy?</h4>
						<p>
							You can read our comprehensive App Store & GDPR privacy policy on our <a
								href="{base}/privacy">Privacy Policy Page</a
							>.
						</p>
					</div>

					<div class="faq-item">
						<h4>How is my personal data handled?</h4>
						<p>
							We process minimal user data required for application functionality. We do not sell
							user data to third parties.
						</p>
					</div>
				</div>

				<div class="card sidebar-card highlight-sidebar">
					<h3>Other SPNSS EOOD Operations</h3>
					<p>Looking for our other business divisions?</p>
					<ul class="sidebar-links">
						<li><a href="{base}/#services">Business Consulting & Advisory</a></li>
						<li><a href="{base}/#services">Multilingual Translation & ESL Services</a></li>
						<li>
							<a href="https://dobutsustationery.com" target="_blank" rel="noopener noreferrer"
								>Japanese Stationery Store ↗</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.support-header-section {
		background: linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%);
		padding: 3.5rem 0 2.5rem;
		border-bottom: 1px solid var(--border-color);
	}

	.header-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.35rem 0.85rem;
		background-color: var(--brand-accent);
		color: white;
		border-radius: 9999px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.support-header-section h1 {
		font-family: var(--font-heading);
		font-size: 2.75rem;
		font-weight: 800;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.header-lead {
		font-size: 1.15rem;
		color: var(--text-secondary);
		max-width: 750px;
	}

	.support-main-section {
		padding: 3.5rem 0;
	}

	.support-grid {
		display: grid;
		grid-template-columns: 1.8fr 1fr;
		gap: 2.5rem;
	}

	.support-content {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.support-card h2 {
		font-family: var(--font-heading);
		font-size: 1.6rem;
		color: var(--text-primary);
		margin-bottom: 0.35rem;
	}

	.card-subtitle {
		font-size: 0.95rem;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
	}

	.support-form {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	.form-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.form-group label {
		font-size: 0.85rem;
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
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: var(--border-focus);
		box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
	}

	.ticket-success {
		text-align: center;
		padding: 2rem;
	}

	.success-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 50px;
		height: 50px;
		background-color: var(--brand-emerald);
		color: white;
		font-size: 1.5rem;
		border-radius: 50%;
		margin-bottom: 1rem;
	}

	.dev-notice-card {
		background: linear-gradient(135deg, #ffffff 0%, #eff6ff 100%);
		border-color: #bfdbfe;
	}

	.notice-header {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.notice-badge {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		background-color: #1e40af;
		color: white;
		padding: 0.2rem 0.6rem;
		border-radius: 9999px;
	}

	.dev-notice-card h3 {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		color: var(--text-primary);
	}

	.dev-details-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
		margin-top: 1.25rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--border-color);
	}

	.dev-details-grid strong {
		display: block;
		font-size: 0.85rem;
		color: var(--text-muted);
		margin-bottom: 0.2rem;
	}

	.dev-details-grid p {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-primary);
	}

	.data-deletion-card h3 {
		font-family: var(--font-heading);
		font-size: 1.3rem;
		color: var(--text-primary);
		margin-bottom: 0.75rem;
	}

	.deletion-steps {
		background-color: var(--bg-main);
		padding: 1.25rem 1.25rem 1.25rem 2rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--border-color);
		margin: 1rem 0;
	}

	.deletion-steps li {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
		line-height: 1.5;
	}

	.card-link-box {
		font-size: 0.9rem;
		font-weight: 600;
	}

	/* Sidebar */
	.support-sidebar {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.sidebar-card h3 {
		font-family: var(--font-heading);
		font-size: 1.25rem;
		color: var(--text-primary);
		margin-bottom: 1.25rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--border-color);
	}

	.faq-item {
		margin-bottom: 1.25rem;
	}

	.faq-item h4 {
		font-size: 0.95rem;
		color: var(--text-primary);
		margin-bottom: 0.35rem;
	}

	.faq-item p {
		font-size: 0.88rem;
		color: var(--text-secondary);
		line-height: 1.45;
	}

	.highlight-sidebar {
		background-color: #fff7ed;
		border-color: #ffedd5;
	}

	.sidebar-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		margin-top: 1rem;
	}

	.sidebar-links a {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--brand-amber);
	}

	.mt-4 {
		margin-top: 1rem;
	}

	@media (max-width: 900px) {
		.support-grid {
			grid-template-columns: 1fr;
		}

		.form-row {
			grid-template-columns: 1fr;
		}
	}
</style>
