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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        align-items: center;
        justify-items: center;
    }

    @media only screen and (min-width: 1500px) {
        div {
            width: 70%;
            margin: auto;
        }
    }

    @media only screen and (max-width: 1000px) {
        div {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media only screen and (max-width: 650px) {
        div {
            grid-template-columns: repeat(1, 1fr);
        }
    }


</style>