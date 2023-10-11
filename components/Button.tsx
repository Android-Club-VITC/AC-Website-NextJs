import Link from 'next/link'

export default function Button(props: { text: string; url: string }) {
  return (
    <div>
      <Link
        href={props.url}
        className="text-white font-bold p-2 px-4 border-2 border-white"
      >
        {props.text}
      </Link>
    </div>
  )
}
