<script>
	import Side from '$lib/components/Side.svelte';
</script>

<main class="container">
	<div class="grid layout">
		<div>
			<section>
				<hgroup>
					<h2>Unsere Angebote</h2>
					<h3>für Ihre Cloud Transformationen</h3>
				</hgroup>
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
					<h2>Platformentwicklung</h2>
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
</main>
