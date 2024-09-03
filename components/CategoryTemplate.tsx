import Image from 'next/image'

type CategoryTypes = {
  children: string
  image?: StaticImageData
  onClick: React.MouseEventHandler<HTMLButtonElement>
  categorySelected: string
}

export default function Category({
  children,
  image,
  onClick,
  categorySelected,
}: CategoryTypes) {
  return (
    <button
      onClick={onClick}
      className={`${children == categorySelected ? 'bg-primary-500 scale-105 text-white' : 'bg-primary-100'} relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl px-2 py-1 font-bold duration-200 hover:shadow-lg`}
    >
      <p className="">{children}</p>
      {/*    <Image
        className="absolute -bottom-3"
        width={90}
        height={90}
        src={image}
        alt=""
      /> */}
    </button>
  )
}
