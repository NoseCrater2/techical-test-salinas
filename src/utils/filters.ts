const dateFormat = (value: Date) =>
  `${value?.getFullYear()}-${value?.getMonth() + 1}-${value?.getDate()}`

const capitalize = (name: string) => {
  const letters = name.split(' ')
  if (letters.length === 0) return ''
  if (letters.length === 1) return `${letters[0][0]}`
  return `${letters[0][0]}${letters[1][0]}`
}
export default { dateFormat, capitalize }
