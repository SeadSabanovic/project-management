export default function Button({ label, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-s rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      {label}
    </button>
  );
}
