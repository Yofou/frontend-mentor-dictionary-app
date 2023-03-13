import { fonts } from "$lib/constants";
import { writable } from "svelte/store"

export const selectFont = writable(fonts[0]);
