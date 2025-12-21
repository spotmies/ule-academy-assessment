import { scoreAptitude } from './aptitude.js';
import { scoreOLQ } from './olq.js';
import { calculateCompatibility } from './compatibility.js';

export const calculateAssessmentResults = (questions, data) => {
    const aptQ = questions.filter(q => q.section === 'A');
    const olqQ = questions.filter(q => q.section === 'B');

    const apt = scoreAptitude(aptQ, data.aptitude);
    const olq = scoreOLQ(olqQ, data.olq);

    const sortedOlqs = [...olq.detailedOlq].sort(
        (a, b) => b.score - a.score
    );

    return {
        scores: {
            aptitudeRaw: apt.raw,
            aptitudePercentage: apt.percentage,
            olqOverall: olq.overall,
            olqPercentage: olq.percentage,
            compatibility: calculateCompatibility(
                apt.percentage,
                olq.percentage
            )
        },
        factorBreakdown: olq.factorBreakdown,
        detailedOlq: olq.detailedOlq,
        top3: sortedOlqs.slice(0, 3),
        bottom3: sortedOlqs.slice(-3).reverse()
    };
};
