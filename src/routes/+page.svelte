<script>
    import Nav from '$lib/components/Nav.svelte'
    import Review from '$lib/components/Review.svelte'
    import { items } from '$lib/database.js'
</script>

<Nav />

<h1>metakritikk.no</h1>
<p>({items.length} titler)</p>

{#each items as item}
    <Review item={item} />
{/each}

<style>
    :global(body)
    {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #90ADC6;
    }
</style>