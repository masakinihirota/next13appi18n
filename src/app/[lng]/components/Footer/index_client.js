import { useTranslation } from "../../../i18n"
import { FooterBase } from "./FooterBase"

export const Footer = async ({ lng }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "footer")
  return <FooterBase t={t} lng={lng} />
}
