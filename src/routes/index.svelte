<script>
    import {onMount} from "svelte";
    import {paginate, LightPaginationNav} from "svelte-paginate";
    let items = [];
    let title = "";
    let tags="";

    let currentPage = 1
    let pageSize = 4
    $: paginatedItems = paginate({ items, pageSize, currentPage })

    let remote_url = `https://flickertest.herokuapp.com/feeds?tags`;
    let local_url = `http://localhost:8080/feeds?tags`;

    onMount(async () => {
        const res = await fetch(remote_url)
        const data = await res.json()
        items = data.items
    })

</script>


<LightPaginationNav 
totalItems="{items.length}"
  pageSize="{pageSize}"
  currentPage="{currentPage}"
  limit="{1}"
  showStepOptions="{true}"
  on:setPage="{(e) => currentPage = e.detail.page}"
/>
<div class="grid grid-cols-4 gap-2 my-10">
    <!-- <form action="submit" on:submit|preventDefault={}>
        <input type="text" bind:value={tags} >
    </form> -->
    {#each items as item}
    <div class="card shadow-xl image-full">
        <figure>
          <img src="{item.media.m}" alt="{item.title}">
        </figure> 
        <div class="justify-end card-body">
          <h2 class="card-title">{item.title}</h2> 
          <p>{item.tags}</p> 
          <div class="card-actions">
            <button class="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> 
{/each}
</div>

