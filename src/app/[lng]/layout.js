import { dir } from "i18next"

import { languages } from "../i18n/settings"

// ↑外部ファイルから読み込むために↓削除します
// const languages = ["ja", "en"]

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>{children}</body>
    </html>
  )
}
