import PasswordInput from './components/PasswordInput'

export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-primary-900">
        <form className="flex w-80 flex-col gap-3">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            className="rounded-lg bg-primary-600 px-5 py-3 text-white placeholder:text-primary-300"
            placeholder="email"
          />
          <PasswordInput />

          <button
            type="submit"
            className="rounded-lg bg-secundary-900 py-3 font-bold text-primary-900 hover:brightness-110"
          >
            Login
          </button>
        </form>
      </div>
    </>
  )
}
