<script>
    import Review from '$lib/components/Review.svelte'
	export let data // få data fra page.js
</script>

<div>
    {#each data.items as item}
        <Review item={item} />
    {/each}
</div>

<style>
    div {
        display: flex;
        align-items: center;

        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        

    }
</style>