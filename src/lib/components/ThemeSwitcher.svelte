<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form class="flex gap-5 self-center" method="post" action="?/theme" use:enhance>
	<button class="bg-black-300 dark:bg-purple w-[40px] h-[20px] rounded-[10px] relative">
    <span class="sr-only">theme switcher</span>
		<div
			class="bg-white-full w-[14px] h-[14px] rounded-full top-[3px] absolute left-[3px] dark:left-auto dark:right-[3px]"
		/>
	</button>

  <img class="block dark:hidden" src="/moon.svg" alt="" />
	<img class="hidden dark:block" src="/moon.svg" alt="" />
</form>
