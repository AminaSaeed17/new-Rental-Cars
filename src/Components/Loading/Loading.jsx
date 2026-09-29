const sizes = {
  sm: "w-6 h-6 border-2",
  md: "w-12 h-12 border-4",
  lg: "w-16 h-16 border-4",
};

export default function Loading({ fullScreen = true, size = "md", text = "" }) {
  const wrapper = fullScreen
    ? "fixed inset-0 z-50 bg-white"
    : "w-full py-10";

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${wrapper} flex flex-col items-center justify-center gap-4`}
    >
      <div
        className={`${sizes[size]} rounded-full border-[#1572D31A] border-t-primary animate-spin motion-reduce:animate-pulse`}
      />
      {text && <p className="text-sm text-[#3E3E3E]">{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  );
}