<script>
	import Hero from '$lib/components/Hero.svelte';
	import Side from '$lib/components/Side.svelte';
</script>

<Hero />


<div class="grid" id="offer">
	<div>
		<section>
			<h1>Unser Angebot</h1>
			<p>
				Wir bieten Workshops, Konzeption und individuelle Beratung sowie Entwicklerwerkzeuge rund um die Bereiche AWS Serverless und moderne Softwareentwicklung an. Dabei entwicklen wir einiges
				jedoch nicht alles selbst, sondern greifen auf Open-Source und ein breites Netzwerk von engagierten und kompetenten Kollegen und Agenturen zurück.
			</p>
			<p>
				Oder beschleunigen Sie lieber doch gleich jetzt Ihre Cloud-Transformationen mittels unserer Infrastruktur als Code Blueprints oder Entwicklungsplatform, die von Cloud-Experten praxisnah
				entwickelt und getestet wurden.
			</p>
		</section>
		<article>
			<hgroup>
				<h2>Beratung und Workshops</h2>
				<h3>Individuelle Konzeption mit Inhalten auf Maß. Verständlich, nachhaltig und praxisnah von Anfang an.</h3>
			</hgroup>
			<p>Gerne beraten und schulen wir eure Teams individuell in der Entwicklung oder dem Betrieb hinsichtlich der optimalen Nutzung von AWS.</p>
			<ul>
				<li>Serverless Architektur und Migrationskonzepte von bestehenden Anwendungen</li>
				<li>Account-Setup mit mehreren AWS-Accounts imd mehrere Entwicklungsumgebungen in AWS</li>
				<li>Aufsetzen von Cloud Frontend-Projekten mit React, Svelte, SvelteKit, etc.</li>
				<li>Softwareentwicklung mit AWS Lambda, GraphQL, DynamoDB, Cognito, Cloud-Front, etc.</li>
				<li>Infrastruktur als Code mit Terraform und/oder AWS-CDK</li>
				<li>CI/CD-Pipeline Integration</li>
			</ul>
			<div class="grid">
				<p>1800 EUR pro Tag, netto</p>
				<a href="#contact" role="button">anfragen</a>
			</div>
		</article>
		<article>
			<hgroup>
				<h2>Blueprints</h2>
				<h3>Das Beste aus jahrelanger Erfahrung um sofort loszulegen.</h3>
			</hgroup>
			<p>Kondensiertes Wissen, Best-Practices und Sicherheit als sofort einsatzfähige Infrastruktur als Code Lösung.</p>
			<ul>
				<li>Internet of Things (IoT) Device Management- and Monitoring Web-Portal</li>
				<li>Hochskalierbares Multi-Mandant B2B Web-Portal</li>
				<li>Daten- und Schnittstellen-Integration sowie Workflow Automatisierung</li>
			</ul>
			<div class="grid">
				<p>ab 40.000 EUR, netto</p>
				<a href="#contact" role="button">anfragen</a>
			</div>
		</article>
		<article>
			<hgroup>
				<h2>Entwicklungsplatform</h2>
				<h3>Effiziente Cloud Entwicklung in ihrem Unternehmen.</h3>
			</hgroup>
			<p>Wir entwicklen individuelle Entwicklungswerkzeuge und Deployment-Platform für ihre Teams um noch schneller, einfacher und sicherer Cloud Anwendungen umzusetzen.</p>
			<ul>
				<li>CLI Tools für einen schnellen Entwicklungsworkflow und und optimale Beobachtbarkeit</li>
				<li>Mehrere Umgebungen, Deployment Automatisierung und CI/CD Integration</li>
				<li>RESTful-, WebSocket- und GraphQL API Development- und Deployment-Templates</li>
				<li>Datenbank- und Messaging-Infrastruktur Integration and Zugriffsmuster</li>
				<li>Application Development Templates für Svelte/Kit, React, Nextjs, NodeJS Lambdas</li>
			</ul>
			<div class="grid">
				<p>ab 100.000 EUR, netto</p>
				<a href="#contact" role="button">anfragen</a>
			</div>
		</article>
	</div>
	<Side />
</div>

<section id="subscribe" aria-label="Subscribe to our newletter">
	<div class="container">
		<hgroup>
			<h2>Interesse an Neuigkeiten?</h2>
			<h3>Melden Sie sich für unseren Newsletter an, um auf dem Laufenden zu bleiben.</h3>
		</hgroup>

		<form class="grid">
			<input type="text" id="firstname" name="firstname" placeholder="Vorname" aria-label="Vorname" required />
			<input type="email" id="email" name="email" placeholder="E-Mail Adresse" aria-label="E-Mail Adresse" required />
			<button type="submit" onclick="event.preventDefault()">Anmelden</button>
		</form>

		<p>Indem Sie sich anmelden, stimmen Sie den Nutzungsbedingungen und der Datenschutzrichtlinie zu.</p>
	</div>
</section>
