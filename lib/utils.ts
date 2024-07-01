export function formatToWon(price: number): string {
  return price.toLocaleString("ko-KR");
}

export function formatTimeAgo(date: Date): string {
  const dayInMs = 1000 * 60 * 60 * 24;
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diff = Math.round((time - now) / dayInMs);

  const formatter = new Intl.RelativeTimeFormat("KO");

  return formatter.format(diff, "day");
}
