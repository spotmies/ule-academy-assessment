import React from 'react';

export default function OLQSection({ questions = [], answers, onChange }) {

    if (!questions || questions.length === 0) {
        return (
            <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
                <div className="text-[12px] text-gray-400 text-center">Loading OLQ Assessment...</div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
            <div className="text-[14px] font-semibold text-[#1f4b99] mb-1 flex items-center gap-1.5">
                Section B – OLQ Self-Assessment ({questions.length} Items)
            </div>
            <div className="text-[12px] text-gray-500 mb-0">
                Rate how true each statement is for your real life behaviour.
            </div>
            <div className="text-[11px] text-gray-500 mt-1 mb-2.5">
                Scale: 1 = Strongly Disagree · 2 = Disagree · 3 = Neutral · 4 = Agree · 5 = Strongly Agree
            </div>
            {questions.map((item) => (
                <div key={item.qId} className="mb-2.5 p-2 rounded-[10px] bg-[#f9fafb] border border-gray-200">
                    <div className="flex flex-wrap items-center justify-between gap-1.5 text-[12px]">
                        <span className="flex-1 min-w-[180px] basis-[55%]">
                            {/* Display qId, olqName (from DB) and text */}
                            <strong>{item.qId}. {item.olqName}:</strong> {item.text}
                        </span>
                        <div className="flex gap-1 flex-nowrap">
                            {[1, 2, 3, 4, 5].map((val) => (
                                <label key={val} className="text-[11px] px-1 py-0.5 rounded-full border border-gray-300 cursor-pointer inline-flex items-center gap-0.5 bg-white select-none hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name={`olq_q_${item.qId}`} // Unique group name
                                        value={val}
                                        checked={answers[item.qId] === val}
                                        onChange={(e) => onChange(item.qId, e.target.value)}
                                        className="m-0"
                                    />
                                    {val}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}