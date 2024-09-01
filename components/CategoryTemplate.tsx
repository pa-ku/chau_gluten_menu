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
      className={`${children == categorySelected && 'scale-105 bg-green-300'} relative flex h-20 w-40 cursor-pointer flex-col items-center justify-start overflow-hidden rounded-md bg-gray-200 pt-1 font-bold duration-200 hover:shadow-lg`}
    >
      <p className="">{children}</p>

      <Image
        className="absolute -bottom-3"
        width={90}
        height={90}
        src={image}
        alt=""
      />
    </button>
  )
}
