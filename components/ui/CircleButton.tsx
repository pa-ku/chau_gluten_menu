type ButtonTypes = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  title?: string
}

export default function CircleButton({
  className,
  children,
  type,
  title,
  onClick,
}: ButtonTypes) {
  return (
    <button
      type={type}
      onClick={onClick}
      title={title}
      className={`${className} bg-primary-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl duration-200 hover:brightness-105`}
    >
      {children}
    </button>
  )
}
