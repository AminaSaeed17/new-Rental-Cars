export default function HeaderShare({title, subTitle}) {
  return (
    <>
      <button className="px-8 py-4 bg-[#1572D31A] text-primary rounded-lg font-medium text-sm mb-5">
        {title}
      </button>
      <p className="font-medium text-[38px] ">{subTitle}</p>
    </>
  );
}
