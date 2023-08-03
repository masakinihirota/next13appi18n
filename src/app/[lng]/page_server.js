import Link from "next/link"
import { useTranslation } from "../i18n"
import { Footer } from "./components/Footer"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  return (
    // <>
    //   <h1>VNS.BLUE</h1>
    //   最初のページです。
    //   <br />
    //   <Link href={`/${lng}/second-page`} className="text-blue-400">
    //     2番目のページへ
    //   </Link>
    // </>
    // ↓ i18n化
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second-page`}>{t("to-second-page")}</Link>
      <Footer lng={lng} />
    </>
  )
}
