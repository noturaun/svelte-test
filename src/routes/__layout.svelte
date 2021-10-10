<script>
    export let tags;
</script>


<div class="container mx-auto my-4">
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div class="flex-none hidden lg:flex">
          <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
            </svg>
          </button>
        </div> 
        <div class="flex-1 hidden px-2 mx-2 lg:flex">
          <span class="text-lg font-bold">
                  flickertest
                </span>
        </div> 
        <div class="flex-1 lg:flex-none">
          <div class="form-control">
            <input type="text" placeholder="Search" bind:value="{tags}" class="input input-ghost">
          </div>
        </div> 
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">             
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>             
            </svg>
          </button>
        </div> 
      </div>

<slot></slot>

</div>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>