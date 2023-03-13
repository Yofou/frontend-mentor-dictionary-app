<script lang="ts">
  export let value = ""
  export let placeholder = "Search for any word…"
  export let error: string | undefined = undefined
  export let name: string
</script>

<label class="relative">
  <slot />
  <input 
    bind:value 
    {placeholder} 
    class="
      w-full
      bg-white-600
      dark:bg-black-900 
      rounded-[1rem] 
      text-black-900
      dark:text-white-full 
      placeholder:text-black-900/25
      dark:placeholder:text-white-full/25 
      text-body-m
      py-5
      px-6
      pr-12
      border-none
      outline-none
      focus:border-none
      focus:outline-1
      focus:outline-purple
    "
    class:error
    type="text"
    {name}
  >

  {#if error}
    <p class="text-red text-heading-m mt-2">{error}</p>
  {/if}

  <img class="absolute top-1/2 -translate-y-1/2 pointer-events-none right-6" src="/search.svg" alt="">
</label>

<style>
  input.error, input.error:focus {
    @apply outline-red outline-1;
  }
</style>
