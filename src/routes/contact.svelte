<script>
	import { page } from '$app/stores';
	import Side from '$lib/components/Side.svelte';

	let hasContactSuccess = Boolean($page.url.searchParams.get('success'));
</script>

<main class="container">
	<div class="grid layout">
		<section aria-label="Contact us">
			<div class="container">
				{#if !hasContactSuccess}
					<hgroup>
						<h2>Kontakt</h2>
						<h3>Für eine Anfrage können Sie hier mit uns sprechen.</h3>
					</hgroup>
					<form method="POST">
						<input type="text" id="company" name="company" placeholder="Firma" aria-label="Firma" required />

						<div class="grid">
							<input type="text" id="firstname" name="firstname" placeholder="Vorname" aria-label="Vorname" required />
							<input type="text" id="lastname" name="lastname" placeholder="Nachname" aria-label="Nachname" required />
						</div>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="E-Mail Adresse"
							aria-label="E-Mail Adresse"
							required
						/>
						<textarea id="message" name="message" placeholder="Nachricht" aria-label="Nachricht" required />
						<button type="submit">Absenden</button>
					</form>
				{:else}
					<hgroup>
						<h2>Vielen Dank!</h2>
						<h3>Für Ihre Anfrage. Wir antworten Ihnen so schnell es geht.</h3>
					</hgroup>
				{/if}
			</div>
		</section>
		<Side />
	</div>
</main>
