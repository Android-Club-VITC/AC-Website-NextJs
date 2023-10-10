export default function Button(props: { text: string }) {
  return (
    <div>
      <button className="text-white font-bold p-2 px-4 border-2 border-white">
        {props.text}
      </button>
    </div>
  );
}
