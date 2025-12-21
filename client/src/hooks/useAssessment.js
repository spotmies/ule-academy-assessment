import { useEffect, useState, useRef } from 'react';
import api from '../utils/api';

export function useAssessment() {
    const [questions, setQuestions] = useState({ aptitude: [], olq: [] });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const resultsRef = useRef(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const { data } = await api.get('/api/assessment/questions');

                const aptitude = data.data
                    .filter(q => q.section === 'A')
                    .sort((a, b) => a.qId - b.qId);

                const olq = data.data
                    .filter(q => q.section === 'B')
                    .sort((a, b) => a.qId - b.qId);

                setQuestions({ aptitude, olq });
            } catch {
                setError('Failed to load assessment data. Please ensure the backend is running.');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    return { questions, loading, error, resultsRef };
}
