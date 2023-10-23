<script>
    export let item
    import Score from '$lib/components/Score.svelte'

</script>

<div>
    <h2>
        <a href="/tittel/{item.title}">{item.title}</a>
    </h2>

    <Score totalScore={item.totalScore} />

    <div>
        <ul>
            {#each item.reviews as review}
                <li>
                    💬
                    <a href={review.url}>{review.author}: {review.score}/{review.maxScore}</a> 
                    <i>({review.snippet})</i> 
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    div {
        background-color: #333652;
        color: #E9EAEC;

        border-radius: 10px;
        padding: 10px;
        margin: 10px;

        display: flex;
        align-items: center;
        flex-direction: column
    }

    a {
        color: #FAD02C;
    }

    h2 {
        color: #FAD02C;
        font-size: 2em;
        margin: 10px;
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

</style>