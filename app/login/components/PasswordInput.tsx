'use client'

import { useState } from 'react'

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <>
      <label className="relative w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="password"
          className="b-0 w-full rounded-lg bg-primary-600 px-5 py-3 text-white placeholder:text-primary-300"
        />
        <button
          type="button"
          className="absolute right-0 top-0 flex h-full items-center justify-center rounded-r-lg bg-primary-700 stroke-primary-300 p-2 hover:stroke-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
            </svg>
          ) : (
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
              <path d="M3 15l2.5 -3.8" />
              <path d="M21 14.976l-2.492 -3.776" />
              <path d="M9 17l.5 -4" />
              <path d="M15 17l-.5 -4" />
            </svg>
          )}
        </button>
      </label>
    </>
  )
}
