import { PROFILE_COLORS } from "../constant/profileColors";

export function getProfileColor(id: string) {
  if (!id) return PROFILE_COLORS[0];

  let hash = 0; //this random ya shahd w ya souaaaaaaaaaad
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash); //this equation random , the idea is to use any equation to generate a random number based on the string characters
  }

  const index = (hash >>> 0) % PROFILE_COLORS.length; //to convert the hash negative to positive and to make sure the index is within the range of the colors array
  return PROFILE_COLORS[index];
}
