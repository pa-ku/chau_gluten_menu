import { StaticImageData } from 'next/image'

type CategoryTypes = {
  children: string
  image?: StaticImageData
  onClick: React.MouseEventHandler<HTMLButtonElement>
  categorySelected: string
}

export default function Category({
  children,
  onClick,
  categorySelected,
}: CategoryTypes) {
  return (
    <button
      onClick={onClick}
      className={`${children == categorySelected ? 'scale-105 bg-primary-500 text-white' : 'bg-primary-50'} relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl px-2 py-2 font-medium duration-200 hover:shadow-lg`}
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
