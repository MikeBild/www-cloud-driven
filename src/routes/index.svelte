<script>
	import Hero from '$lib/components/Hero.svelte';
	import Side from '$lib/components/Side.svelte';
</script>

<Hero />

<main class="container">
	<div class="grid">
		<div>
			<section>
				<h2>Cloud Driven Engineering</h2>
				<p>
					Wir bieten Workshops, Konzeption und individuelle Beratung sowie Entwicklerwerkzeuge rund um die Bereiche AWS Serverless und moderne Softwareentwicklung an. Dabei entwicklen wir einiges
					jedoch nicht alles selbst, sondern greifen auf Open-Source und ein breites Netzwerk von engagierten und kompetenten Kollegen und Agenturen zurück.
				</p>
				<p>
					Oder beschleunigen Sie lieber doch gleich jetzt Ihre Cloud-Transformationen mittels unserer Infrastruktur als Code Blueprints oder Entwicklungsplatform, die von Cloud-Experten praxisnah
					entwickelt und getestet wurden.
				</p>
				<p><a href="/contact" role="button">Sprechen Sie mit uns</a></p>
			</section>
			<section>
				<h2>Gründer und Team</h2>
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
		<hgroup>
			<h2>Nichts mehr Verpassen?</h2>
			<h3>melde dich für unseren Newsletter an</h3>
		</hgroup>

		<form class="grid">
			<input type="text" id="firstname" name="firstname" placeholder="Vorname" aria-label="Vorname" required />
			<input type="email" id="email" name="email" placeholder="E-Mail Adresse" aria-label="E-Mail Adresse" required />
			<button type="submit" onclick="event.preventDefault()">Anmelden</button>
		</form>
		<p>Indem Sie sich anmelden, stimmen Sie den Nutzungsbedingungen und der Datenschutzrichtlinie zu.</p>
	</div>
</section>
