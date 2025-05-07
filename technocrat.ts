function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toLocaleUpperCase() : input.toLocaleLowerCase();
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4.0);
}

