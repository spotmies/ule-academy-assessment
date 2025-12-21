import { useState } from 'react';
import api from './utils/api';
import { useAssessment } from './hooks/useAssessment';

import Header from './components/Header';
import AptitudeSection from './components/AptitudeSection';
import OLQSection from './components/OLQSection';
import ResultCard from './components/ResultCard';

export default function App() {
  const { questions, loading, error, resultsRef } = useAssessment();

  const [formData, setFormData] = useState({
    name: '',
    entry: '',
    attempt: ''
  });

  const [aptAnswers, setAptAnswers] = useState({});
  const [olqAnswers, setOlqAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmitAssessment = async () => {
    if (!formData.name || !formData.entry || !formData.attempt) {
      setSubmitError(
        'Please fill in your candidate details (Name, Entry, Attempt).'
      );
      return;
    }

    setSubmitError('');

    try {
      const payload = {
        candidate: {
          name: formData.name,
          entry: formData.entry,
          attempt: Number(formData.attempt),
        },
        aptitude: aptAnswers,
        olq: olqAnswers,
      };

      const { data } = await api.post('/api/assessment/submit', payload);
      const backendResult = data.data;

      setResult({
        name: formData.name,
        entry: formData.entry,
        attempt: formData.attempt,
        aptScore: backendResult.scores.aptitudePercentage,
        overallOlqScore: backendResult.scores.olqOverall,
        normOlq: backendResult.scores.olqPercentage,
        compatibility: backendResult.scores.compatibility,
        factorScores: backendResult.factorBreakdown,
        olqScores: backendResult.detailedOlq,
        top3: backendResult.top3,
        bottom3: backendResult.bottom3,
      });

      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);

    } catch (err) {
      setSubmitError(
        err.response?.data?.message ||
        'An error occurred while calculating results.'
      );
    }
  };

  const resetForm = () => {
    setFormData({ name: '', entry: '', attempt: '' });
    setAptAnswers({});
    setOlqAnswers({});
    setResult(null);
    setSubmitError('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Loading Assessment...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans text-gray-900 text-[14px] bg-[radial-gradient(circle_at_top,_#e2ecff,_#ffffff_55%)] p-0 m-0">
      <div className="max-w-[900px] mx-auto px-3 py-4 pb-8 w-full">
        <Header />

        {/* Candidate Details */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
          <h1 className="text-[18px] font-bold m-0 mb-1 text-gray-900">
            Armed Forces Aptitude & OLQ Assessment
          </h1>

          <div className="text-[12px] text-gray-500 mb-3">
            Answer honestly. This tool gives an indicative measure of your{' '}
            <strong>aptitude</strong> and{' '}
            <strong>Officer Like Qualities (OLQs)</strong>, as understood for
            Indian Armed Forces officers.
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            <div className="inline-flex items-center gap-1 text-[12px]">
              <label htmlFor="name" className="text-gray-500">Name:</label>
              <input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="px-2 py-1 rounded-full border border-gray-300 text-[12px] min-w-[130px] outline-none focus:border-[#1f4b99]"
                placeholder="Candidate full name"
              />
            </div>

            <div className="inline-flex items-center gap-1 text-[12px]">
              <label htmlFor="entry" className="text-gray-500">Target Entry:</label>
              <select
                id="entry"
                value={formData.entry}
                onChange={handleInputChange}
                className="px-2 py-1 rounded-full border border-gray-300 text-[12px] min-w-[130px] outline-none focus:border-[#1f4b99] bg-white"
              >
                <option value="">Select</option>
                <option>NDA</option>
                <option>CDS</option>
                <option>AFCAT</option>
                <option>TES / 10+2</option>
                <option>Technical Entry</option>
                <option>NCC Special</option>
              </select>
            </div>

            <div className="inline-flex items-center gap-1 text-[12px]">
              <label htmlFor="attempt" className="text-gray-500">Attempt No.:</label>
              <input
                id="attempt"
                type="number"
                min="1"
                value={formData.attempt}
                onChange={handleInputChange}
                className="px-2 py-1 rounded-full border border-gray-300 text-[12px] w-[70px] outline-none focus:border-[#1f4b99]"
              />
            </div>
          </div>

          {submitError && (
            <div className="text-[11px] text-red-500 mt-2">
              {submitError}
            </div>
          )}
        </div>

        <AptitudeSection
          questions={questions.aptitude}
          answers={aptAnswers}
          onChange={(qId, val) =>
            setAptAnswers(prev => ({ ...prev, [qId]: val }))
          }
        />

        <OLQSection
          questions={questions.olq}
          answers={olqAnswers}
          onChange={(qId, val) =>
            setOlqAnswers(prev => ({ ...prev, [qId]: val }))
          }
        />

        {/* Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-[0_8px_20px_rgba(15,23,42,0.12)] border border-gray-200 mb-3 print:hidden">
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              className="border-none rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap bg-gradient-to-br from-[#1f4b99] to-blue-600 text-white shadow-[0_6px_14px_rgba(37,99,235,0.35)] hover:shadow-md transition-shadow"
              type="button"
              onClick={handleSubmitAssessment}
            >
              ⚙️ Calculate Compatibility
            </button>

            <button
              className="rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap bg-white text-[#1f4b99] border border-gray-300 hover:bg-gray-50 transition-colors"
              type="button"
              onClick={resetForm}
            >
              🔄 Reset
            </button>

            <button
              className="rounded-full px-4 py-2 text-[13px] font-semibold cursor-pointer inline-flex items-center gap-1.5 whitespace-nowrap bg-transparent text-gray-500 border border-dashed border-gray-300 hover:border-gray-400 transition-colors"
              type="button"
              onClick={() => window.print()}
            >
              🖨️ Print 1-Page Report
            </button>
          </div>

          <div className="text-[11px] text-gray-500 mt-2">
            Disclaimer: This is an indicative internal tool of ULe Academy. Final
            selection depends on actual SSB performance, medicals, and Services’
            requirements.
          </div>
        </div>

        {result && (
          <ResultCard result={result} innerRef={resultsRef} />
        )}

        <div className="hidden print:block text-[10px] text-gray-500 text-center mt-1.5">
          Generated via ULe Academy – Armed Forces Readiness & OLQ Assessment Tool
        </div>
      </div>
    </div>
  );
}
