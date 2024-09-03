export default function Login() {
  return (
    <>
      <div className="bg-primary-900 flex h-screen w-full items-center justify-center">
        <form className="flex w-80 flex-col gap-3">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            className="bg-primary-600 rounded-lg px-5 py-3 text-white"
            placeholder="email"
          />
          <input
            type="password"
            placeholder="password"
            className="b-0 bg-primary-600 rounded-lg px-5 py-3 text-white"
          />
          <button className="bg-secundary-900 text-primary-900 rounded-lg py-3 font-bold hover:brightness-110">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
