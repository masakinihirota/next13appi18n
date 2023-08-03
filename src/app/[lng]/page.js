import Link from "next/link"

export default function Page({ params: { lng } }) {
  return (
    <>
      <h1>VNS.BLUE</h1>
      最初のページです。
      <br />
      <Link href={`/${lng}/second-page`} className="text-blue-400">
        2番目のページへ
      </Link>
    </>
  )
}
