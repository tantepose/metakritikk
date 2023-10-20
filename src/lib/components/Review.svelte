<script>
    export let item

    function totalScore () {
        // gjøre om hver poenggivning til skala fra 0 til 1
        let scores = []
        item.reviews.forEach(review => {
            scores.push(review.score / review.maxScore)
        });

        // regne ut snittet av alle poengene
        let totalScore = scores.reduce((a, b) => a + b, 0) / scores.length // https://www.logilax.com/javascript-calculate-average/
        // gjøre om snittet til prosent
        totalScore = totalScore * 100
        // runde av snittet til riktige decimaler
        totalScore = Number((totalScore).toFixed(0)); // 0 = ingen decimaler

        return totalScore
    }

</script>

<div>

    <h2>
        <a href="/tittel/{item.title}">{item.title}</a>
        
        {#if totalScore() >= 80}
            🔥
        {:else if totalScore() >= 65}
            🍿
        {:else if totalScore() <= 50}
            💩
        {/if}
    </h2>

    <h3>{totalScore()}%</h3>

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

<style>
    div {
        text-align: center;
        background-color: #333652;
        color: #E9EAEC;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }

    a {
        color: #FAD02C;
    }

    h2 {
        color: #FAD02C;
        font-size: 2em;
        margin-bottom: 5px;
    }

    h3 {
        font-size: 2em;
        margin-top: 5px;
    }

    ul {
        list-style-type: none;
        text-align: left;
    }

</style>