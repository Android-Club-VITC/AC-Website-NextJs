declare module 'maath/random/dist/maath-random.esm' {
  export function getRandomNumber(): number
}

//navLinks.tsx
interface navLink {
  label: string
  link: string
}

//aboutUs.tsx
interface CoreValueType {
  svgSource: any
  title: string
  description: string
}

//ourTeam.tsx
interface TeamDataType {
  name: string
  image: any
  role: string
  description: string
}
