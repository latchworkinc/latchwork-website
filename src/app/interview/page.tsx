import Container from "@/components/Container";
import InterviewNotice from "@/components/interview/InterviewNotice";
import InterviewForm from "@/components/interview/InterviewForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Interview",
  "Complete your remote administrative assistant interview for Latchwork Consulting."
);

export default function InterviewPage() {
  return (
    <div className="bg-interview-bg">
      <Container>
        <section className="mx-auto max-w-3xl py-20 sm:py-28">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Remote Administrative Assistant Interview
            </h1>
            <p className="mt-3 text-base text-white/60">
              Complete the interview below by answering each question honestly and
              thoroughly.
            </p>
          </div>

          <div className="mt-10">
            <InterviewNotice />
          </div>

          <div className="mt-8">
            <InterviewForm />
          </div>
        </section>
      </Container>
    </div>
  );
}
