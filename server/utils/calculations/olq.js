export const scoreOLQ = (questions, answers) => {
    let total = 0;
    let count = 0;

    const factors = { I: [], II: [], III: [], IV: [] };

    const detailedOlq = questions.map(q => {
        const score = Number(answers[q.qId] ?? 3);

        total += score;
        count++;

        if (q.factor && factors[q.factor]) {
            factors[q.factor].push(score);
        }

        return {
            qId: q.qId,
            olqName: q.olqName,
            factor: q.factor,
            score
        };
    });

    const factorBreakdown = {};
    Object.keys(factors).forEach(f => {
        factorBreakdown[`factor${f}`] =
            factors[f].reduce((a, b) => a + b, 0) / factors[f].length;
    });

    return {
        overall: total / count,
        percentage: (total / count / 5) * 100,
        factorBreakdown,
        detailedOlq
    };
};
