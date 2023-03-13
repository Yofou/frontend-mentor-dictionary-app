<script lang="ts">
  import type { WordApiSuccessResponse } from "$lib/types/Word";
  import { enhance } from '$app/forms';

  export let data: WordApiSuccessResponse['meanings'][number]
</script>

<section class="mt-10">
  <div class="w-full flex items-center gap-5">
    <h2 class="font-bold italic text-heading-m text-black-900 dark:text-white-full">{data.partOfSpeech}</h2>
    <div class="w-full h-[1px] bg-white-300 dark:bg-black-600"></div>
  </div>

  <h4 class="mt-10 text-heading-s text-black-300">Meaning</h4>
  <ul class="pl-[22px] mt-[25px] flex flex-col gap-[13px]">
    {#each data.definitions as { definition }}
      <li class="text-body-m text-black-900 dark:text-white-full flex">
        <span class="ml-[calc(20px-0.5ch)]">{definition}</span>
      </li>
    {/each}
  </ul>
</section>

{#if data.synonyms.length > 0}
  <section class="flex gap-3 mt-10 flex-wrap">
    <h2 class="mr-3 text-heading-s text-black-300">Synonyms</h2>
    {#each data.synonyms as synonym}
      <form method="post" action="/?/search" use:enhance>
        <input type="hidden" name="word" value={synonym}>
        <button class="text-heading-s font-bold text-purple">{synonym}</button>
      </form>
    {/each}
  </section>
{/if}

<style>
  li::before {
    display: block;
    content: url('/bullet.svg');
    height: max-content;
    transform: translateY(-25%);
  }
</style>
