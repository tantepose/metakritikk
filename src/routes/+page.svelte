<script>
    import Review from '$lib/components/Review.svelte'
	export let data
</script>

<h1>metakritikk.no</h1>
<p>({data.items.length} titler)</p>

{#each data.items as item}
    <Review item={item} />
{/each}

<style>
    :global(body)
    {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #90ADC6;
    }
</style>