<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@picocss/pico/css/pico.css';
	import '../app.css';
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/logo_512.png" />

	<meta name="Cloud Driven" content="Cloud Driven" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<link rel="apple-touch-icon" href="/logo_192.png" />
	<meta name="msapplication-TileColor" content="#00aba9" />
	<meta name="theme-color" content="#bee0da" />

	<title>Cloud Driven</title>
	<meta name="description" content="Cloud Driven" />
</svelte:head>

<Header />

<slot />

<Footer />
