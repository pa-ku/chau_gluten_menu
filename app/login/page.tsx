export default function Login() {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-slate-800">
        <form className="flex w-80 flex-col gap-3">
          <h1 className="text-3xl text-white">Login</h1>
          <input
            type="text"
            className="rounded-lg bg-slate-600 px-5 py-3 text-white"
            placeholder="email"
          />
          <input
            type="password"
            placeholder="password"
            className="b-0 rounded-lg bg-slate-600 px-5 py-3 text-white"
          />
          <button className="rounded-lg bg-slate-900 py-3 text-white hover:brightness-110">
            Login
          </button>
        </form>
      </div>
    </>
  )
}
