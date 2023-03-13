<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte';
	import TextInput from '$lib/components/TextInput.svelte';
	import ThemeSwitcher from '$lib/components/ThemeSwitcher.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import { fonts } from '$lib/constants';
	import '@fontsource/lora';
	import '@fontsource/inconsolata';
	import '@fontsource/inter';
	import '$lib/tailwind.css';
	import '$lib/global.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	const handleUrl = (font: string) => {
		const encodedFont = encodeURIComponent(data.font);
		if ($page.url.pathname.includes(encodedFont)) {
			return $page.url.pathname.replace(encodedFont, font);
		}

		return `/${font}`;
	};
</script>

<div 
  class="px-12 bg-white-full text-black-1500 grid grid-cols-[1fr,minmax(0,737px),1fr]"
  class:dark={data.theme === 'dark'}
>
	<main
		class="col-start-2 col-end-3"
		class:sans-serif={data.font === 'Sans Serif'}
		class:serif={data.font === 'Serif'}
		class:mono={data.font === 'Mono'}
	>
		<nav class="mt-[58px] mb-[51px] grid grid-cols-[max-content,1fr,repeat(2,max-content)]">
			<img src="/book.svg" alt="" />
			<Dropdown>
				<p slot="selected">{data.font}</p>

        <div class="flex flex-col items-start p-6" slot="list">
        {#key $page.url.pathname}
					{#each fonts as font}
						<a
							class="focus:text-purple outline-none focus:border-none focus:outline-0 hover:text-purple"
              class:text-purple={font === data.font}
							href={handleUrl(font)}
						>
							{font}
						</a>
					{/each}
        {/key}
        </div>  
			</Dropdown>
			<div class="w-[1px] h-full bg-white-300 mx-5" />
			<ThemeSwitcher />
		</nav>

		<form method="post" use:enhance action="/?/search">
			<TextInput name="word" />
		</form>

		<slot />
	</main>
</div>

<style>
  div.dark {
    @apply bg-black-1500 text-white-full;
  }
</style>
