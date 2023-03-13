<script lang="ts">
  import { enhance } from "$app/forms"
	import type { WordApiSuccessResponse } from '$lib/types/Word';
	export let data: WordApiSuccessResponse;
  export let play = false

	$: audioUrl = data.phonetics.find((phon) => phon.audio);
</script>

{#if play}
  <audio class="opacity-0 absolute top-0 left-0 -z-[1000]" controls autoplay src={audioUrl?.audio} />
{/if}

<form method="post" action="?/play" use:enhance>
  <button class={$$props.class}>
    <img src="/play.svg" alt="" />
  </button>
</form>
