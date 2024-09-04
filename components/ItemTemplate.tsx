import { ItemTypes } from '@/libs/types'
import Image from 'next/image'

export default function ItemTemplate({
  name,
  description,
  price,
  image,
}: ItemTypes) {
  return (
    <>
      <figure className="relative flex w-80 justify-between rounded-xl p-3 text-start shadow-sm duration-200">
        <figcaption className="flex w-full flex-col">
          <div className="flex justify-between font-semibold">
            <h2>{name}</h2>
            <p>${price}</p>
          </div>
          <p className="text-gray-500">{description}</p>
        </figcaption>
        {image && (
          <Image
            width={100}
            height={100}
            className="rounded-xl"
            src={image}
            alt={`Imagen de ${name}`}
          />
        )}
      </figure>
    </>
  )
}
