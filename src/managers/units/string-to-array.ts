export function stringToArray(value: string): string[] {
  const lines = value.split('\n');
  return lines.length > 1 ? lines : [value];
}
