import { Badge } from "@/shared/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 items-center">
      {/* Badges */}
      <div className="flex flex-wrap gap-2 items-center justify-center py-5">
        <Badge variant="next">Next.js</Badge>
        <Badge variant="tailwind">Tailwind</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="react">React</Badge>
        <Badge variant="reactHookForm">React Hook Form</Badge>
        <Badge variant="zod">Zod</Badge>
        <Badge variant="nextAuth">NextAuth</Badge>
        <Badge variant="shadcn">shadcn/ui</Badge>
        <Badge variant="nextIntl">next-intl</Badge>
        <Badge variant="reactQuery">React Query</Badge>
        <Badge variant="html">HTML</Badge>
        <Badge variant="css">CSS</Badge>
        <Badge variant="js">JavaScript</Badge>
        <Badge variant="sass">Sass</Badge>
        <Badge variant="bootstrap">Bootstrap</Badge>
        <Badge variant="wordpress">WordPress</Badge>
        <Badge variant="salla">Salla</Badge>
        <Badge variant="zid">Zid</Badge>
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
