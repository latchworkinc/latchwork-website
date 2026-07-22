import { Suspense } from "react";
import Container from "@/components/Container";
import InterviewExperience from "@/components/interview/InterviewExperience";
import MaintenanceNotice from "@/components/MaintenanceNotice";
import NoOpenPositionsNotice from "@/components/NoOpenPositionsNotice";
import { pageMetadata } from "@/lib/seo";
import { FORMS_UNDER_MAINTENANCE } from "@/lib/maintenance";
import { isAutoMaintenanceActive } from "@/lib/formHealth";
import { NO_OPEN_POSITIONS } from "@/lib/hiring";

// Reads live in-memory submission-health state, so this page must not be
// statically cached at build time.
export const dynamic = "force-dynamic";

export const metadata = pageMetadata(
  "Interview",
  "Complete your remote interview for Latchwork Consulting."
);

export default function InterviewPage() {
  const underMaintenance = FORMS_UNDER_MAINTENANCE || isAutoMaintenanceActive();

  return (
    <div className="bg-interview-bg">
      <Container>
        <section className="mx-auto max-w-3xl py-20 sm:py-28">
          {underMaintenance ? (
            <MaintenanceNotice />
          ) : NO_OPEN_POSITIONS ? (
            <NoOpenPositionsNotice />
          ) : (
            <Suspense fallback={null}>
              <InterviewExperience />
            </Suspense>
          )}
        </section>
      </Container>
    </div>
  );
}
