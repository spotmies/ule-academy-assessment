import React from 'react';

export default function AptitudeSection({ questions = [], answers, onChange }) {
    if (!questions || questions.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
                <div className="text-[12px] text-gray-400 text-center">Loading Aptitude Questions...</div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
            <div className="text-[14px] font-semibold text-[#1f4b99] mb-1 flex items-center gap-1.5">
                Section A – Aptitude Test ({questions.length} Questions)
            </div>
            <div className="text-[12px] text-gray-500 mb-2.5">
                Choose the best option. Each correct answer = 1 mark (total {questions.length}).
            </div>
            {questions.map((q) => (
                <div key={q.qId} className="mb-2.5 p-2.5 rounded-[10px] bg-[#f9fafb] border border-gray-200">
                    <p className="m-0 mb-1 font-medium text-[13px]">
                        {q.qId}. {q.text}
                    </p>
                    <div className="pl-0">
                        {q.options.map((opt) => (
                            <label key={opt.value} className="block text-[12px] cursor-pointer mb-0.5 select-none">
                                <input
                                    type="radio"
                                    name={`apt_q_${q.qId}`}
                                    value={opt.value}
                                    checked={answers[q.qId] === opt.value}
                                    onChange={() => onChange(q.qId, opt.value)}
                                    className="mr-1.5 align-middle"
                                />
                                {opt.label}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}