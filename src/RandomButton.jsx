function RandomButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-7 py-3
        w-[220px] max-w-[80vw]
        text-white font-bold
        rounded-xl
        bg-gradient-to-r
        from-buttonStart
        to-buttonEnd
        shadow-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        cursor-pointer
      "
    >
      Згенерувати нове число
    </button>
  );
}

export default RandomButton;
