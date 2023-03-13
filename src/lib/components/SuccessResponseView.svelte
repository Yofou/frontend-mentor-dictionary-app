<script lang="ts">
  import AudioPlayer from "$lib/components/AudioPlayer.svelte"
  import type { WordApiSuccessResponse } from "$lib/types/Word";
  import MeaningSection from "./MeaningSection.svelte";

  export let data: WordApiSuccessResponse
  export let play: boolean
</script>

<article class="mt-[45px]">
  <header class="grid grid-cols-[1fr,max-content] grid-rows-[repeat(2,max-content)]">
    <div>
      <h2 class="text-heading-l text-black-900 dark:text-white-full mb-[6px]">{data.word}</h2>
      {#if data.phonetics?.[0]?.text}
        <p class="text-heading-m text-purple">{data.phonetics?.[0]?.text}</p>
      {/if}
    </div> 

    <AudioPlayer class="row-start-1 row-end-3 col-start-2 col-end-3 justify-self-center" {data} {play} />
  </header>
</article>

{#each data.meanings as meaning}
  <MeaningSection data={meaning} />
{/each}

<section class="my-10 flex-col">
  <div class="h-[1px] w-full bg-white-300 dark:bg-black-600"></div>

  <div class="flex gap-5 items-center mt-5">
    <h2 class="text-body-s text-black-300">Source</h2>
    <a class="text-body-s text-black-900 dark:text-white-full" href={data.sourceUrls[0]}>{data.sourceUrls[0]}</a>
  </div>
</section>
