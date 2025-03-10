import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Login() {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError("")

    const result = await signIn("credentials", { email, password })

    // pengecekan apakah string yang diinputkan user sudah sesuai dengan provider next auth
    if (result?.error) {
      setError(result?.error)
    } else {
      router.push("/product")
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

        {/* untuk menampilkan error yang ditimbulkan oleh user */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label className="mb-2">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="mb-2">
            <span className="text-gray-700">Password</span>
            <input
              type="password"
              className="mt-1 block w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button
            type="submit"
            className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >Login</button>
        </form>
      </div>
    </div>
  )
}
