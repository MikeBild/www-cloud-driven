<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '@picocss/pico/css/pico.css';
	import '../app.css';
</script>

<Header />

<slot />

<Footer />
