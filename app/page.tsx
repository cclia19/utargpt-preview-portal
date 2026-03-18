"use client";

import { useState, type ReactNode } from "react";

type DetailKey =
  | "usage"
  | "prompts"
  | "capabilities"
  | "testing"
  | "coverage"
  | "roadmap";

type TileProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  clickable?: boolean;
};

const CHATBOT_URL = "https://utargpt-2.vercel.app";
const FEEDBACK_URL = "#";
const BUG_URL = "#";

function Tile({
  title,
  subtitle,
  children,
  className = "",
  onClick,
  clickable = false,
}: TileProps) {
  return (
    <div
      onClick={onClick}
      className={[
        "rounded-[30px] border border-black/5 bg-white p-7 overflow-hidden",
        "shadow-[0_2px_8px_rgba(0,0,0,0.03),0_14px_30px_rgba(0,0,0,0.04)]",
        "transition duration-200",
        clickable
          ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04),0_18px_38px_rgba(0,0,0,0.05)]"
          : "",
        className,
      ].join(" ")}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
        {subtitle}
      </p>
      <h3 className="mt-3 text-[clamp(1.5rem,2vw,2.2rem)] font-semibold leading-tight tracking-tight text-neutral-900">
        {title}
      </h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function Home() {
  const [activeTile, setActiveTile] = useState<DetailKey>("usage");

  const details: Record<DetailKey, { title: string; content: ReactNode }> = {
    usage: {
      title: "Usage Metrics",
      content: (
        <div className="space-y-4 text-sm leading-7 text-neutral-600">
          <p>
            This section can later be connected to real UTARGPT telemetry such
            as total questions, unique users, estimated Gemini usage cost, and
            activity trends.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Today
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                128
              </p>
              <p className="text-neutral-500">Questions processed</p>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                This Week
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                37
              </p>
              <p className="text-neutral-500">Unique pilot users</p>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Cost to Date
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                RM 48.20
              </p>
              <p className="text-neutral-500">Estimated Gemini spend</p>
            </div>
          </div>
        </div>
      ),
    },

    prompts: {
      title: "Suggested Starter Prompts",
      content: (
        <div className="space-y-4 text-sm leading-7 text-neutral-600">
          <p>Use these prompts to help stakeholders start testing quickly.</p>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              "What can UTARGPT currently help me with?",
              "Help draft a professional academic email.",
              "Suggest a possible AI-for-education research direction.",
              "Explain this policy in simpler terms.",
              "Compare two project ideas for feasibility.",
              "Suggest proposal ideas aligned with a university theme.",
            ].map((prompt) => (
              <div
                key={prompt}
                className="rounded-2xl border border-black/5 bg-neutral-50 px-4 py-3 text-neutral-700"
              >
                {prompt}
              </div>
            ))}
          </div>
        </div>
      ),
    },

    capabilities: {
      title: "What UTARGPT Can Do",
      content: (
        <div className="grid gap-3 md:grid-cols-2">
          {[
            "Knowledge-grounded question answering",
            "Academic writing support",
            "Proposal and idea exploration",
            "Drafting assistance for professional communication",
            "Context-aware retrieval from curated knowledge",
            "Scalable foundation for wider institutional rollout",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl bg-neutral-50 px-4 py-4 text-sm text-neutral-700"
            >
              {item}
            </div>
          ))}
        </div>
      ),
    },

    testing: {
      title: "How Stakeholders Should Test",
      content: (
        <div className="space-y-4 text-sm leading-7 text-neutral-600">
          <p>Focus on these four things during testing.</p>

          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Accuracy — Is the answer grounded and correct?",
              "Usefulness — Does it save time or effort?",
              "Clarity — Is the response easy to understand?",
              "Coverage — What areas still need more knowledge?",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-neutral-50 px-4 py-4 text-neutral-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },

    coverage: {
      title: "Knowledge Coverage",
      content: (
        <div className="space-y-4 text-sm leading-7 text-neutral-600">
          <p>
            This section can summarize what has already been indexed and what is
            not yet included in the current pilot knowledge base.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Indexed Items
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                214
              </p>
              <p className="text-neutral-500">Documents and knowledge entries</p>
            </div>

            <div className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                Latest Sync
              </p>
              <p className="mt-2 text-2xl font-semibold text-neutral-900">
                Today
              </p>
              <p className="text-neutral-500">Updated for the current pilot</p>
            </div>
          </div>
        </div>
      ),
    },

    roadmap: {
      title: "Pilot Roadmap",
      content: (
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              phase: "Phase 1",
              text: "Internal pilot and stakeholder testing",
            },
            {
              phase: "Phase 2",
              text: "Knowledge refinement and broader faculty usage",
            },
            {
              phase: "Phase 3",
              text: "Expansion into a larger university AI platform",
            },
          ].map((item) => (
            <div key={item.phase} className="rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                {item.phase}
              </p>
              <p className="mt-2 text-base font-semibold text-neutral-900">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] px-4 py-6 text-neutral-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-neutral-400">
              UTARGPT
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Preview Portal
            </h1>
          </div>

          <div className="w-fit rounded-full border border-black/5 bg-white px-5 py-3 text-sm text-neutral-600 shadow-sm">
            Internal Preview
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Tile
            title="A guided entry point for UTARGPT stakeholder preview"
            subtitle="Welcome"
            className="md:col-span-6"
          >
            <p className="max-w-2xl text-base leading-8 text-neutral-600">
            UTARGPT is an internal AI assistant prototype developed to support
            knowledge access, academic productivity, and stakeholder evaluation.
            This preview portal provides a guided entry point for testing the live
            system, viewing pilot highlights, and understanding the current scope
            of the prototype.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CHATBOT_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Launch UTARGPT
              </a>

              <a
                href={FEEDBACK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50"
              >
                Submit Feedback
              </a>
            </div>
          </Tile>

                  <Tile
            title="Pilot Activity"
            subtitle="Live Stats"
            className="md:col-span-4"
            clickable
            onClick={() => setActiveTile("usage")}
          >
            <div>
              <p className="text-5xl font-semibold tracking-tight text-neutral-900">
                1,284
              </p>
              <p className="mt-2 text-base text-neutral-500">
                Total questions logged
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-2xl font-semibold text-neutral-900">37</p>
                <p className="mt-1 text-xs text-neutral-500">Pilot testers</p>
              </div>

              <div className="rounded-2xl bg-neutral-50 p-4">
                <p className="text-2xl font-semibold text-neutral-900">
                  RM 48.20
                </p>
                <p className="mt-1 text-xs text-neutral-500">Est. Gemini cost</p>
              </div>
            </div>
          </Tile>

            <Tile title="Preview Build" subtitle="System" className="md:col-span-2">
            <p className="text-base text-neutral-500">Current version</p>
            <p className="mt-3 text-2xl font-semibold text-neutral-900">
              v0.9
            </p>

            <p className="mt-6 text-sm text-neutral-500">Last updated</p>
            <p className="mt-2 text-lg font-medium text-neutral-900">
              18 Mar 2026
            </p>
          </Tile>

          <Tile
            title="What It Can Do"
            subtitle="Capabilities"
            className="md:col-span-4"
            clickable
            onClick={() => setActiveTile("capabilities")}
          >
            <div className="space-y-4 text-base text-neutral-600">
              <p>Knowledge retrieval</p>
              <p>Academic assistance</p>
              <p>Drafting support</p>
            </div>
          </Tile>

          <Tile
            title="How to Test"
            subtitle="Evaluation"
            className="md:col-span-4"
            clickable
            onClick={() => setActiveTile("testing")}
          >
            <div className="flex flex-wrap gap-4 text-base text-neutral-600">
              <span>Accuracy</span>
              <span>Usefulness</span>
              <span>Clarity</span>
            </div>
          </Tile>

         <Tile title="Feedback" subtitle="Input" className="md:col-span-4">
          <div className="space-y-4">
          <p className="text-base leading-7 text-neutral-600">
          Structured feedback and bug reporting will be opened after the initial
        preview round.
          </p>

              <div className="flex flex-wrap gap-3">
                <div className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700">
                  Feedback form coming soon
                </div>
                <div className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700">
                  Bug report channel coming soon
                </div>
              </div>
            </div>
          </Tile>

          <Tile
            title="Sample Prompts"
            subtitle="Try This"
            className="md:col-span-6"
            clickable
            onClick={() => setActiveTile("prompts")}
          >
            <div className="grid gap-3 md:grid-cols-2">
              {[
                "What can UTARGPT help with?",
                "I failed my final exam, what to do?",
                "Can i play student bill via T&G Pay?",
                "When does the next trimester starts?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </Tile>

          <Tile
            title="Knowledge Coverage"
            subtitle="Scope"
            className="md:col-span-4"
            clickable
            onClick={() => setActiveTile("coverage")}
          >
            <p className="text-4xl font-semibold text-neutral-900">214</p>
            <p className="mt-2 text-base text-neutral-500">Indexed items</p>
            <p className="mt-8 text-xs uppercase tracking-[0.18em] text-neutral-400">
              Click for details
            </p>
          </Tile>

            <Tile
            title="Roadmap"
            subtitle="Next"
            className="md:col-span-2"
            clickable
            onClick={() => setActiveTile("roadmap")}
          >
            <div className="space-y-3 text-base leading-7 text-neutral-600">
              <p>Now — Internal preview</p>
              <p>Next — Feedback refinement</p>
              <p>Later — Wider rollout</p>
            </div>
          </Tile>
        </section>

        <section className="mt-6 rounded-[30px] border border-black/5 bg-white p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_14px_30px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-neutral-400">
                Expanded View
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">
                {details[activeTile].title}
              </h2>
            </div>

            <a
              href={CHATBOT_URL}
              target="_blank"
              rel="noreferrer"
              className="w-fit rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              Open Live Preview
            </a>
          </div>

          <div className="mt-6">{details[activeTile].content}</div>
        </section>
      </div>
    </main>
  );
}