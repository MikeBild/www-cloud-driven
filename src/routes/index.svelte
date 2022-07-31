<script context="module">
	export let prerender = false;
</script>

<script>
	import { page } from '$app/stores';
	import Hero from '$lib/components/Hero.svelte';
	import Side from '$lib/components/Side.svelte';

	let hasSubscriptionSuccess = Boolean($page.url.searchParams.get('success'));
</script>

<Hero />

<main class="container">
	<div class="grid layout">
		<div>
			<section>
				<h2>Cloud Driven Engineering</h2>
				<p>
					Wir bieten Workshops, Konzeption und individuelle Beratung sowie Entwicklerwerkzeuge rund um die Bereiche AWS
					Serverless und moderne Softwareentwicklung an. Dabei entwicklen wir einiges jedoch nicht alles selbst, sondern
					greifen auf Open-Source und ein breites Netzwerk von engagierten und kompetenten Kollegen und Agenturen
					zurück.
				</p>
				<p>
					Oder beschleunigen Sie lieber doch gleich jetzt Ihre Cloud-Transformationen mittels unserer Infrastruktur als
					Code Blueprints oder Entwicklungsplatform, die von Cloud-Experten praxisnah entwickelt und getestet wurden.
				</p>
				<p><a href="/contact" role="button">Sprechen Sie mit uns</a></p>
			</section>
			<section>
				<h2>Gründer und Team</h2>
				<div class="grid">
					<article>
						<figure>
							<h3>Sebastian Korfmann</h3>
							<img alt="avatar" src="sebastian-korfmann.jpg" />
							<figcaption>
								<p>CEO & Founder</p>
								<small>CDK for Terraform @ HashiCorp</small>
							</figcaption>
						</figure>
					</article>
					<article>
						<figure>
							<h3>Mike Bild</h3>
							<img alt="avatar" src="mike-bild.jpg" />
							<figcaption>
								<p>Co-Founder</p>
								<small>Cloud and Software Engineer</small>
							</figcaption>
						</figure>
					</article>
				</div>
			</section>

			<section>
				<h2>Referenzen und Kundenstimmen</h2>
			</section>
		</div>
		<Side />
	</div>
</main>

<section id="subscribe" aria-label="Subscribe to our newletter">
	<div class="container">
		{#if !hasSubscriptionSuccess}
			<hgroup>
				<h2>Nichts mehr Verpassen?</h2>
				<h3>Melden Sie sich hier für unseren E-Mail Newsletter an.</h3>
			</hgroup>

			<form class="grid" method="POST">
				<input type="text" id="firstname" name="firstname" placeholder="Vorname" aria-label="Vorname" required />
				<input type="email" id="email" name="email" placeholder="E-Mail Adresse" aria-label="E-Mail Adresse" required />
				<button type="submit">Anmelden</button>
			</form>
			<p>Indem Sie sich anmelden, stimmen Sie den Nutzungsbedingungen und der Datenschutzrichtlinie zu.</p>
		{:else}
			<hgroup>
				<h2>Vielen Dank!</h2>
				<h3>Für Ihre Anmeldung zu unserem E-Mail Newsletter.</h3>
			</hgroup>
		{/if}
	</div>
</section>

<style>
	img {
		filter: grayscale(100%);
		border: 2px solid black;
	}
</style>
