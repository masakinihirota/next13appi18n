import Link from "next/link"

export default function Page({ params: { lng } }) {
  return (
    <>
      <h1>VNS.BLUE</h1>
      2番目のページです。
      <br />
      <Link href={`/${lng}`} className="text-blue-400">
        戻る
      </Link>
    </>
  )
}
