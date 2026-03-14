import { notFound, redirect } from "next/navigation";

const SECTION_MAP: Record<string, string> = {
  about: "about",
  courses: "programs",
  programs: "programs",
  "why-us": "why-us",
  "how-to-apply": "how-to-apply",
  contact: "contact",
};

export default async function CatchAllRedirect({ params }: { params: Promise<{ slug: string[] }> }) {
  const resolvedParams = await params;
  const firstSegment = resolvedParams.slug?.[0] ?? "";
  if (firstSegment.includes(".")) {
    notFound();
  }
  const target = SECTION_MAP[firstSegment] ?? firstSegment;

  redirect(`/#${encodeURIComponent(target)}`);
}
