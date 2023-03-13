<script lang="ts">
  import FailedResponseView from "$lib/components/FailedResponseView.svelte";
  import SuccessResponseView from "$lib/components/SuccessResponseView.svelte";
  import type { PageData, ActionData } from "./$types";

  export let data: PageData
  export let form: ActionData
</script>

{#if data}
  {#if data.success}
    <SuccessResponseView data={data.data?.[0]} play={form?.play ?? false} />
  {:else}
    <FailedResponseView data={data.data} />
  {/if}
{/if}
