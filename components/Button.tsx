export default function Button(props: { text: string; url: string }) {
  return (
    <div>
      <a
        href={props.url}
        className="text-white font-bold p-2 px-4 border-2 border-white"
      >
        {props.text}
      </a>
    </div>
  )
}
