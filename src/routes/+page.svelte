<script>
    import Review from '$lib/components/Review.svelte'
	export let data
</script>

<div>
    {#each data.items as item}
        <Review item={item} />
    {/each}
</div>

<style>
    :global(body) {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        background-color: #90ADC6;
    }
</style>