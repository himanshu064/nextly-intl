import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function Home({ params }) {
  const { locale } = params;
  setRequestLocale(locale);

  const t = useTranslations("RootPage");

  return (
    <Container>
      <Hero />
      <SectionTitle preTitle={t("info")} title={t("title")}>
        {t("description")}
      </SectionTitle>

      <Benefits data={benefitOne} imgPos="left" />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle={t("sectionTitle")} title={t("sectionDesc")}>
        {t("sectionInfo")}
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle preTitle={t("testTitle")} title={t("testDesc")}>
        {t("testInfo")}
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title={t("faqTitle")}>
        {t("faqDesc")}
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
