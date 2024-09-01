import HomeItemLayout from '@/components/HomeItemLayout'
import { getItems } from '@/libs/actions'
import Image from 'next/image'

export default async function Home() {
  const data = await getItems()

  const fbLogo = (
    <svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#333"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
    </svg>
  )
  const xLogo = (
    <svg
      width="35"
      height="35"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#333"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )

  return (
    <>
      <div className="flex flex-col items-start justify-between">
        <HomeItemLayout data={data}></HomeItemLayout>
        <footer className="relative flex h-28 w-full items-end">
          <SocialMedia logo={xLogo} href={'https://x.com/ '} />
          <SocialMedia logo={fbLogo} href={'https://www.facebook.com/'} />

          <p className="w-full text-center text-black">
            Made by{' '}
            <a
              href="https://pablokuhn.netlify.app/"
              className="text-green-600 hover:brightness-125"
              target="_blank"
            >
              Paku
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}
type SocialMediaTypes = {
  logo: JSX.Element
  href: string
}

function SocialMedia({ logo, href }: SocialMediaTypes) {
  return (
    <>
      <a
        href={href}
        className="m-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-green-200"
        target="_blank"
      >
        {logo}
      </a>
    </>
  )
}
