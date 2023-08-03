import Link from "next/link"
import { useTranslation } from "../../i18n"
import { Footer } from "../components/Footer"

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page")
  return (
    // <>
    //   <h1>VNS.BLUE</h1>
    //   2番目のページです。
    //   <br />
    //   <Link href={`/${lng}`} className="text-blue-400">
    //     戻る
    //   </Link>
    // </>
    // ↓ i18n化
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>{t("back-to-home")}</Link>
      <Footer lng={lng} />
    </>
  )
}
