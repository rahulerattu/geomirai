import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Geomirai</title>
      </Head>
      <h1 className="text-3xl font-bold">Welcome to Geomirai</h1>
      <p className="mt-4 text-lg">
        End-to-End Crop Suitability & Profitability Platform.
      </p>
    </div>
  )
}