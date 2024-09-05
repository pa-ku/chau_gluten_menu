type ItemTemplateTypes = {
  name: string
  description: string
  price: number
}

export default function ItemTemplate({
  name,
  description,
  price,
}: ItemTemplateTypes) {
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
      </figure>
    </>
  )
}
