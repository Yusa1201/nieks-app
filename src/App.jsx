import { useState } from 'react'
import { supabase } from './supabaseClient'

function App() {
  const [page, setPage] = useState('welcome')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMessage(error.message)
    else {
      setUser(data.user)
      setMessage('')
    }
  }

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage(error.message)
    else setMessage('Berhasil daftar! Silakan login.')
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    setPage('welcome')
  }

  if (user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-300 to-blue-500 flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Halo!</h2>
          <p className="text-sm text-gray-500 mb-6">Login sebagai {user.email}</p>
          <button onClick={handleLogout} className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition">
            Logout
          </button>
        </div>
      </div>
    )
  }

  if (page === 'login') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-300 to-blue-500 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-4xl font-bold mb-6">My Health App</h1>

        <div className="bg-white rounded-2xl p-6 w-full max-w-xs shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-3 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 text-sm"
          />

          {message && <p className="text-red-500 text-xs mb-3">{message}</p>}

          <button onClick={handleLogin} className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition mb-2">
            Login
          </button>
          <button onClick={handleSignUp} className="w-full bg-white text-blue-600 border border-blue-600 font-medium py-3 rounded-full hover:bg-blue-50 transition">
            Daftar akun baru
          </button>
        </div>

        <button onClick={() => setPage('welcome')} className="text-white text-sm underline underline-offset-2 mt-6">
          Kembali
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-300 to-blue-500 flex flex-col items-center justify-between py-16 px-6 text-center">
      <div />

      <div className="flex flex-col items-center gap-6 w-full max-w-xs">
        <h1 className="text-white text-4xl font-bold">My Health App</h1>

        <div className="bg-white rounded-2xl p-6 w-full shadow-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Welcome</h2>
          <p className="text-sm text-gray-500 mb-6">
            In order to login, you'll need to have your username and password provided by My Health on hand.
          </p>

          <button onClick={() => setPage('login')} className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition">
            Let's start
          </button>
        </div>

        <button className="text-white text-sm underline underline-offset-2">
          How do I access my My Health account details?
        </button>
      </div>

      <div className="w-24 h-1 bg-white/60 rounded-full" />
    </div>
  )
}

export default App