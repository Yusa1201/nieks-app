function App() {
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

          <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition">
            Let's start
          </button>
        </div>

        <button className="text-white text-sm underline underline-offset-2">
          How do I access My Health account details?
        </button>
      </div>

      <div className="w-24 h-1 bg-white/60 rounded-full" />
    </div>
  )
}

export default App