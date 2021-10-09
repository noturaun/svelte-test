<script>
    import {onMount} from "svelte";
    let items = [];
    let title = "";
    let tags="";

    onMount(async () => {
        const res = await fetch(`https://fierce-cliffs-36921.herokuapp.com/feeds?tags`)
        const data = await res.json()
        items = data.items
    })

    async function getFeedByTags (tags) {
        const res = await fetch(`http://localhost:8080/feeds?tags=${tags}`)
        const data = await res.json()
        title = data.title
    
    }    

    $: {
        if(tags){
            getFeedByTags()
        }
    }

</script>


<div>
    <form action="submit" on:submit|preventDefault={getFeedByTags}>
        <input type="text" bind:value={tags} >
    </form>
</div>
{#each items as item}
    <div>
    <a href="{item.link}">Link</a>
    <img src="{item.media.m}" alt="">
    <p>{item.date_taken}</p>
    <p>{item.published}</p>
    <p>{item.author}</p>
    <p>{item.author_id}</p>
    <p>{item.tags}</p>
    </div>
{/each}
