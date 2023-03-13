import type { Actions } from './$types';
import { redirect } from "@sveltejs/kit";
import { theme } from '$lib/actions/theme.server';
import { fonts } from "$lib/constants"
 
export const actions = {
  search: async (event) => {
    const form = await event.request.formData()
    const search = form.get('word')
    const font = event.cookies.get('font') ?? fonts[0]    

    throw redirect(302, `/${font}/${search}`)
  },
  theme,
} satisfies Actions;
