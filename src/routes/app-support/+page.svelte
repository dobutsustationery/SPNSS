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
		content="Official Apple App Store support portal for iOS mobile applications published by SPNSS EOOD."
	/>
</svelte:head>

<section class="support-header">
	<div class="container">
		<span class="tag-label">Apple App Store Developer Portal</span>
		<h1>iOS Mobile Application Support Hub</h1>
		<p class="support-lead">
			Official support, technical assistance, and data privacy portal for mobile applications
			developed and published by SPNSS EOOD.
		</p>
	</div>
</section>

<section class="support-body">
	<div class="container">
		<div class="support-grid">
			<!-- Main Column -->
			<div class="support-main">
				<div class="card form-card">
					<h2>Submit a Technical Support Ticket</h2>
					<p class="form-sub">
						Experiencing an issue with one of our iOS apps? Our development team in Sofia, Bulgaria
						will assist you.
					</p>

					{#if ticketState.submitted}
						<div class="ticket-feedback">
							<h3>Support Ticket Registered</h3>
							<p>
								Thank you, {ticketState.name}. Our iOS support engineering team will reply to
								<strong>{ticketState.email}</strong> within 24 business hours.
							</p>
							<button
								onclick={() => (ticketState.submitted = false)}
								class="btn btn-secondary mt-4"
							>
								Submit Another Request
							</button>
						</div>
					{:else}
						<form onsubmit={handleTicketSubmit} class="support-form">
							<div class="form-row">
								<div class="field-group">
									<label for="appName">Application</label>
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
								<div class="field-group">
									<label for="issueType">Category</label>
									<select id="issueType" bind:value={ticketState.issueType}>
										<option value="Technical Issue">Technical Bug / Crash</option>
										<option value="Feature Request">Feature Request</option>
										<option value="Account & Data">Account & Data Request</option>
										<option value="Billing">In-App Purchase / Billing Inquiry</option>
									</select>
								</div>
							</div>

							<div class="form-row">
								<div class="field-group">
									<label for="name">Your Name</label>
									<input
										type="text"
										id="name"
										bind:value={ticketState.name}
										required
										placeholder="Full Name"
									/>
								</div>
								<div class="field-group">
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

							<div class="field-group">
								<label for="details">Inquiry Details</label>
								<textarea
									id="details"
									bind:value={ticketState.details}
									rows="5"
									required
									placeholder="Please describe the issue (iOS version, device model, steps to reproduce)..."
								></textarea>
							</div>

							<button type="submit" class="btn btn-primary">Submit Support Ticket</button>
						</form>
					{/if}
				</div>

				<!-- App Store Reviewer Notice -->
				<div class="card notice-card">
					<span class="tag-label">App Store Reviewer Notice</span>
					<h3>Developer Identity & Review Guidelines</h3>
					<p>
						This page serves as the official support destination URL required under Apple App Store
						Review Guidelines. Applications published under the SPNSS EOOD entity adhere to strict
						software quality and user privacy standards.
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
						<li><a href="{base}/#ventures">Management Consulting & Advisory</a></li>
						<li><a href="{base}/#ventures">Translation & ESL Services</a></li>
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
	}

	.field-group input:focus,
	.field-group select:focus,
	.field-group textarea:focus {
		outline: none;
		border-color: var(--border-focus);
	}

	.ticket-feedback {
		padding: 2rem;
		text-align: center;
	}

	.ticket-feedback h3 {
		font-size: 1.25rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
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
