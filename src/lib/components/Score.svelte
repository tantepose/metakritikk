<script>
	import { onMount } from 'svelte'; 
    export let totalScore // prop

    let circleCanvas // dom
    let circleBackgroundCanvas // dom
    let scoreText // dom

    // sirkel må tegnes  fra onmount for at getContext skal funke
    onMount(()=>{
        const circle = circleCanvas.getContext("2d")
        circle.beginPath()
        const circleMax = totalScore * 2 *  Math.PI // hvor langt rundt?
        circle.arc(50, 50, 40, 0, circleMax) // context.arc(x, y, r, sAngle, eAngle, counterclockwise)
        circle.lineWidth = 15;
        
        // fargelegge sirkel og tekst
        let scoreColor
        
        if (totalScore < 0.5) {
             scoreColor = "red"
        } else if (totalScore < 0.7) {
             scoreColor = "#FAD02C"
        }  else if (totalScore > 0.7) {
            scoreColor = "#37fa2c"
        } 

        circle.strokeStyle = "#3D405B"
        // scoreText.style.color = scoreColor

        circle.stroke()

    })

</script>

<div>
    <h3 bind:this={scoreText}>
        {Number((totalScore * 100).toFixed(0))}
    </h3>

    <canvas 
        bind:this={circleCanvas} 
        width="100%" 
        height="100%"
    />
</div>  

<style>
    h3 {
        margin: 0;
        font-size: 2em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    div {
        position: relative;
        text-align: center;
    }

    canvas {
        transform: rotate(270deg);
    }

</style>