<script lang="ts">
	import { focusTrap } from 'svelte-focus-trap';
	import { clickOutside } from 'svelte-use-click-outside';

  let checkbox: HTMLInputElement
	const onEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') checkbox.checked = false
	};

	const onClickOutside = () => (checkbox.checked = false);
</script>

<svelte:window on:keydown={onEscape} />

<div use:clickOutside={onClickOutside} class="relative justify-self-end self-center">
	<label for="drop" class="flex cursor-pointer gap-2 items-center">
		<slot name="selected" />

		<img src="/chevron.svg" alt="" />
	</label>
  <input id="drop" class="fixed peer top-0 left-0 hidden" type="checkbox" bind:this={checkbox} />

	<div
		class="absolute hidden peer-checked:block top-[calc(100%+1rem)] dropdown-shadow max-w-[185px] w-screen right-0 rounded-[1rem] z-50 bg-white-full dark:bg-black-1200"
		use:focusTrap
	>
		<slot name="list" />
	</div>
</div>

<style>
  .dropdown-shadow {
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  }

	:global(.dark) .dropdown-shadow {
		box-shadow: 0px 5px 30px #a445ed;
	}
</style>
