import type { LayoutServerLoad } from "./$types"
import { fonts } from "$lib/constants"
import { redirect } from "@sveltejs/kit";

export const load = (async ({ cookies, params }) => {
  const theme = cookies.get('theme')
  let font = cookies.get('font') ?? fonts[0]

  if (params.lang && fonts.includes(params.lang)) {
    font = params.lang
    cookies.set('font', font, { path: '/' })
  } else if (params.lang) {
    throw redirect(302, `/${font}/${params.lang}`)
  }

  return {
    theme: theme ?? 'dark',
    font
  }
}) satisfies LayoutServerLoad;
