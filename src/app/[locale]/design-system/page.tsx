import { Badge } from "@/shared/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translation
  const t = useTranslations("home.hero.availability");

  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 items-center justify-center py-5">
        <Badge variant="Next.js">Next.js</Badge>
        <Badge variant="Tailwind CSS">Tailwind</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="react">React</Badge>
        <Badge variant="RHF">React Hook Form</Badge>
        <Badge variant="ZOD">Zod</Badge>
        <Badge variant="NextAuth">NextAuth</Badge>
        <Badge variant="shadcn">shadcn/ui</Badge>
        <Badge variant="nextIntl">next-intl</Badge>
        <Badge variant="React Query">React Query</Badge>
        <Badge variant="html">HTML</Badge>
        <Badge variant="css">CSS</Badge>
        <Badge variant="js">JavaScript</Badge>
        <Badge variant="sass">Sass</Badge>
        <Badge variant="bootstrap">Bootstrap</Badge>
        <Badge variant="wordpress">WordPress</Badge>
        <Badge variant="salla">Salla</Badge>
        <Badge variant="zid">Zid</Badge>
        <Badge variant="TypeScript">Zid</Badge>
        <Badge variant="notAvailable">{t("not-available")}</Badge>
        <Badge variant="full-time">{t("full-time")}</Badge>
        <Badge variant="part-time">{t("part-time")}</Badge>
        <Badge variant="remote">{t("remote")}</Badge>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-100">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="landing-pages">Landing Pages</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="business">Change your password here.</TabsContent>
        <TabsContent value="landing-pages">Hi in landing pages</TabsContent>
      </Tabs>
    </div>
  );
}
