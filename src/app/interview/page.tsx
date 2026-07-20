import { Suspense } from "react";
import Container from "@/components/Container";
import InterviewExperience from "@/components/interview/InterviewExperience";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Interview",
  "Complete your remote interview for Latchwork Consulting."
);

export default function InterviewPage() {
  return (
    <div className="bg-interview-bg">
      <Container>
        <section className="mx-auto max-w-3xl py-20 sm:py-28">
          <Suspense fallback={null}>
            <InterviewExperience />
          </Suspense>
        </section>
      </Container>
    </div>
  );
}
