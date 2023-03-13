<script lang="ts">
  import type { WordApiFalureResponse } from "$lib/types/Word";
  export let data: WordApiFalureResponse
</script>


<section class="flex flex-col gap-6 items-center w-full mt-[132px]">
  <img class="mb-5" src="/sad.png" width="64" height="64" alt="sad face">

  <h2 class="font-bold text-heading-s">{data.title}</h2>
  <p class="text-body-m text-black-300">{data.message}</p>
</section>
