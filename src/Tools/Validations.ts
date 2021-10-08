export function isValidName(name: string) {
  const regex = /^([A-Za-z]+ )+([A-Za-z])+$/
  return regex.test(name)
}
