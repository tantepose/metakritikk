<script>
    import Nav from '$lib/components/Nav.svelte'
    import Footer from '$lib/components/Footer.svelte'

    import '@fontsource-variable/playfair-display';
    import '@fontsource/alice';

</script>

<Nav />

<slot></slot>

<Footer />

<!-- globale stiler her -->
<style>
    :global(body) {
        font-family: 'Alice', sans-serif;
        background-color: #F4F1DE;
        color: #3D405B;
    }

    :global(a) {        
        color: #E07A5F;
        text-decoration: none;
    }
</style>