import Link from 'next/link'

export default function Button(props: {
  text: string
  url: string
  class?: string
}) {
  return (
    <div>
      <Link
        href={props.url}
        target="_blank"
        className={`${props.class} text-white font-bold p-2 px-4 border-2 border-white`}
      >
        {props.text}
      </Link>
    </div>
  )
}
