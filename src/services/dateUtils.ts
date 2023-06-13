export function getDayOfWeek(d: any) {
  return dayofWeek[d - 1]
}

export function getMonth(d: any) {
  return months[d - 1]
}

const months = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro'
]
const dayofWeek = [
  'domingo',
  'segunda',
  'terça',
  'quarta',
  'quinta',
  'sexta',
  'sábado'
]
