<script>
	export let data
    import Review from '$lib/components/Review.svelte'
</script>

<div>
<Review item={data} />
<a href="/">TILBAKE</a>

</div>

<style>
    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        }
</style>