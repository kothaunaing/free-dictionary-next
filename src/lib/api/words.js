export async function fetchWord(word) {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  return response.json();
}

export function pluralToSingular(word) {
  if (word.endsWith("ies")) {
    return word.slice(0, -3) + "y"; // babies -> baby
  } else if (word.endsWith("ves")) {
    return word.slice(0, -3) + "f"; // wolves -> wolf
  } else if (
    word.endsWith("oes") ||
    word.endsWith("ses") ||
    word.endsWith("xes")
  ) {
    return word.slice(0, -2); // tomatoes -> tomato, boxes -> box
  } else if (word.endsWith("s") && !word.endsWith("ss")) {
    return word.slice(0, -1); // cats -> cat, but not "glass" -> "glas"
  }
  return word.toLowerCase(); // Return unchanged if no rule matches
}
