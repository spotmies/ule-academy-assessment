import React from 'react';
import CoachPanel from './CoachPanel';

export default function ResultCard({ result, innerRef }) {

    const getCompatibilityText = (c) => {
        if (c >= 75) {
            return `You show strong alignment with officer-like thinking and behaviour.
              Focus now on polishing communication, physical stamina and SSB-specific practice
              (psych tests, GTO tasks, and interviews).`;
        } else if (c >= 55) {
            return `You have a workable base of aptitude and OLQs, but you need structured
              work on your weaker qualities and test-taking skills. With 3–6 months of
              disciplined preparation and guidance, your readiness can significantly improve.`;
        } else {
            return `Your current profile is below the ideal range for SSB. Do not be discouraged:
              by improving daily discipline, stamina, confidence, planning ability and group
              behaviour, you can shift your profile upward over time. Use this report as a
              roadmap, not a final judgement.`;
        }
    };

    const getCompatibilityTag = (c) => {
        if (c >= 75) {
            return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] ml-1.5 border bg-[#ecfdf3] text-[#166534] border-[#bbf7d0]">High Compatibility</span>;
        } else if (c >= 55) {
            return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] ml-1.5 border bg-[#fffbeb] text-[#92400e] border-[#fde68a]">Moderate – Trainable</span>;
        } else {
            return <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] ml-1.5 border bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]">Needs Development</span>;
        }
    };

    if (!result) return null;

    return (
        <div
            ref={innerRef}
            id="resultsCard"
            className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:shadow-none print:border print:border-gray-300 print:p-2 print:max-w-full"
        >
            <div id="printReport" className="print:block">
                <h2 className="text-[16px] font-bold m-0 mb-1 text-gray-900">ULe Academy – Readiness Report</h2>
                <div id="reportMeta" className="text-[12px] text-gray-500 mb-1.5">
                    Name: <strong>{result.name}</strong> &nbsp; | &nbsp; Entry: <strong>{result.entry}</strong> &nbsp; | &nbsp; Attempt: <strong>{result.attempt}</strong>
                </div>

                <div id="candidateSummary">
                    <div className="mt-1">
                        <div><strong>Overall Compatibility Score:</strong></div>
                        <div className="text-[22px] font-bold text-[#1f4b99]">{result.compatibility.toFixed(1)} / 100</div>
                        {getCompatibilityTag(result.compatibility)}
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-2 mt-1.5">
                        <div>
                            <strong>Aptitude (Section A)</strong><br />
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-gray-200 text-[11px] mt-0.5 mr-1 bg-white">
                                <strong className="mr-1">{result.aptScore.toFixed(1)}</strong> / 100
                            </span>
                            <div className="text-[11px] text-gray-500 mt-1">
                                Based on numerical reasoning, logical thinking and officer-oriented judgement.
                            </div>
                        </div>
                        <div>
                            <strong>Overall OLQ Alignment (Section B)</strong><br />
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-gray-200 text-[11px] mt-0.5 mr-1 bg-white">
                                <strong className="mr-1">{result.overallOlqScore.toFixed(2)}</strong> / 5.00
                            </span>
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full border border-gray-200 text-[11px] mt-0.5 mr-1 bg-white">
                                <strong className="mr-1">{result.normOlq.toFixed(1)}</strong> / 100
                            </span>
                            <div className="text-[11px] text-gray-500 mt-1">
                                Self-perception of 21 Officer Like Qualities mapped to SSB factors.
                            </div>
                        </div>
                        <div>
                            <strong>Top OLQ Strengths</strong><br />
                            {result.top3 && result.top3.map(o => (
                                <span key={o.id} className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#bbf7d0] text-[11px] m-0.5 bg-[#ecfdf3] text-[#166534]">
                                    {o.name} ({o.score.toFixed(1)})
                                </span>
                            ))}
                        </div>
                        <div>
                            <strong>Key OLQs to Improve</strong><br />
                            {result.bottom3 && result.bottom3.map(o => (
                                <span key={o.id} className="inline-flex items-center px-2 py-0.5 rounded-full border border-[#fecaca] text-[11px] m-0.5 bg-[#fef2f2] text-[#b91c1c]">
                                    {o.name} ({o.score.toFixed(1)})
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-2 text-[12px]">
                        <strong>ULe Academy Quick Interpretation:</strong><br />
                        {getCompatibilityText(result.compatibility)}
                    </div>
                </div>

                <CoachPanel result={result} />
            </div>
        </div>
    );
}