<script>
    export let item
    import Score from '$lib/components/Score.svelte'

</script>

<div class="review">
    <h2>
        <a href="/tittel/{item.title}">{item.title}</a>
    </h2>

    <Score totalScore={item.totalScore} />

    <div>
        <ul>
            {#each item.reviews as review}
                <li>
                    💬
                    <a href={review.url} target="_blank">{review.author}: <b>{review.score}/{review.maxScore}</b></a> 
                    <i>«{review.snippet}»</i> 
                </li>
            {/each}
        </ul>
    </div>
</div>

<style>
    .review {
        /* border-radius: 20px; */
        /* border: 1px solid black; */
        padding: 10px;
        margin: 20px;

        display: flex;
        align-items: center;
        flex-direction: column;

        max-width: 350px;
    }

    h2 {
        font-family: 'Playfair Display Variable', sans-serif;
        font-size: 2em;
        text-align: center;
        margin: 10px;
    }

    h2 a {
        color: #3D405B;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        padding: 5px;
    }

</style>