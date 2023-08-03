import Link from "next/link"
import { Trans } from "react-i18next/TransWithoutContext"
import { languages } from "../../../i18n/settings"
import { useTranslation } from "../../../i18n"

export const Footer = async ({ lng }) => {
  // awaitが使えないとあるが、Next.js 13 ではサーバーサイドでawaitが使えるようになった
  // 現在このページはサーバーサイドなのでエラーが出るのは間違い。無効化する。
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "footer")
  return (
    <footer style={{ marginTop: 50 }}>
      <Trans i18nKey="languageSwitcher" t={t}>
        対応言語変更スイッチ <strong>{{ lng }}</strong> to:{" "}
      </Trans>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span key={l}>
              {index > 0 && " or "}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          )
        })}
    </footer>
  )
}
