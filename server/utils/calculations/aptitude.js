export const scoreAptitude = (questions, answers) => {
    let correct = 0;

    questions.forEach(q => {
        if (answers[q.qId] === q.correctOption) correct++;
    });

    return {
        raw: correct,
        percentage: (correct / questions.length) * 100
    };
};
