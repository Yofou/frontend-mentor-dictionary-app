import type { PageServerLoad } from './$types';
import type { WordApiFalureResponse, WordApiSuccessResponse } from '$lib/types/Word';
import { isResponseFailure } from "$lib/types/Word"
import type { Actions } from './$types';
import { theme } from '$lib/actions/theme.server';

export const load = (async ({ fetch, params }) => {
  const search = params.search
  const resolvedSearchWord = search ? (search.toString().length > 0 ? search : 'boop12') : 'boop12'

  const req = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${resolvedSearchWord}`)
  const res = await req.json() as WordApiFalureResponse | WordApiSuccessResponse[]

  if (isResponseFailure(res)) {
    return {
      success: false,
      data: res
    } as const
  }

  return {
    success: true,
    data: res
  } as const
}) satisfies PageServerLoad;

export const actions = {
  play: async () => ({
    play: true
  }),
  theme,
} satisfies Actions;
