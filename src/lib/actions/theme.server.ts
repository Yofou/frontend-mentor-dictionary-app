import type { RequestEvent } from "@sveltejs/kit";

export const theme = async (event: RequestEvent) => {
	let theme = event.cookies.get('theme');
	if (!theme) {
    event.cookies.set('theme', 'light', { path: '/' });
		return;
	}

	theme = theme === 'dark' ? 'light' : 'dark';
  event.cookies.set('theme', theme, { path: '/' });
};
