export function normalizeName(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
}

export function isCorrectAnswer(answer: string, correctName: string): boolean {
  return normalizeName(answer) === normalizeName(correctName)
}