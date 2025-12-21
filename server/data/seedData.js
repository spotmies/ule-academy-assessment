export const questions = [

    // =========================
    // SECTION A – APTITUDE (10)
    // =========================

    {
        section: 'A',
        qId: 1,
        text: 'A train runs at 60 km/h. How far will it travel in 45 minutes?',
        options: [
            { label: '30 km', value: 'a' },
            { label: '45 km', value: 'b' },
            { label: '50 km', value: 'c' },
            { label: '75 km', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 2,
        text: 'If 3x − 5 = 16, what is the value of x?',
        options: [
            { label: '5', value: 'a' },
            { label: '7', value: 'b' },
            { label: '9', value: 'c' },
            { label: '11', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 3,
        text: 'Which number comes next in the series: 2, 6, 12, 20, ?',
        options: [
            { label: '26', value: 'a' },
            { label: '30', value: 'b' },
            { label: '32', value: 'c' },
            { label: '34', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 4,
        text: 'A father is 24 years older than his son. In 6 years, he will be twice as old. What is the son’s present age?',
        options: [
            { label: '12 years', value: 'a' },
            { label: '14 years', value: 'b' },
            { label: '18 years', value: 'c' },
            { label: '20 years', value: 'd' }
        ],
        correctOption: 'c'
    },
    {
        section: 'A',
        qId: 5,
        text: 'Find the odd one out:',
        options: [
            { label: 'Captain', value: 'a' },
            { label: 'Major', value: 'b' },
            { label: 'Colonel', value: 'c' },
            { label: 'Engineer', value: 'd' }
        ],
        correctOption: 'd'
    },
    {
        section: 'A',
        qId: 6,
        text: 'Soldier : Army :: Sailor : ?',
        options: [
            { label: 'Ship', value: 'a' },
            { label: 'Navy', value: 'b' },
            { label: 'Water', value: 'c' },
            { label: 'Ocean', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 7,
        text: 'Which quality is MOST important for an officer on the battlefield?',
        options: [
            { label: 'Physical appearance', value: 'a' },
            { label: 'Quick and sound decision-making', value: 'b' },
            { label: 'Social media skills', value: 'c' },
            { label: 'Fluency in many languages', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 8,
        text: 'You witness a road accident while going for an exam. What should you do?',
        options: [
            { label: 'Ignore and proceed', value: 'a' },
            { label: 'Help briefly and call emergency services', value: 'b' },
            { label: 'Stay there for hours', value: 'c' },
            { label: 'Record and upload video', value: 'd' }
        ],
        correctOption: 'b'
    },
    {
        section: 'A',
        qId: 9,
        text: 'Which statement about discipline in the Armed Forces is TRUE?',
        options: [
            { label: 'Optional for officers', value: 'a' },
            { label: 'Only for soldiers', value: 'b' },
            { label: 'A core value for all ranks', value: 'c' },
            { label: 'Important only in war', value: 'd' }
        ],
        correctOption: 'c'
    },
    {
        section: 'A',
        qId: 10,
        text: 'Two candidates are equally intelligent. One is disciplined and honest. Who is more suitable as an officer?',
        options: [
            { label: 'First candidate', value: 'a' },
            { label: 'Second candidate', value: 'b' },
            { label: 'Both same', value: 'c' },
            { label: 'None', value: 'd' }
        ],
        correctOption: 'a'
    },

    // =========================
    // SECTION B – OLQ (21)
    // =========================

    { section: 'B', qId: 1, olqName: 'Effective Intelligence', factor: 'I', text: 'I can quickly understand a situation and think of practical solutions.' },
    { section: 'B', qId: 2, olqName: 'Reasoning Ability', factor: 'I', text: 'I use logic and facts before reaching a conclusion.' },
    { section: 'B', qId: 3, olqName: 'Organising Ability', factor: 'I', text: 'I can plan tasks efficiently.' },
    { section: 'B', qId: 4, olqName: 'Power of Expression', factor: 'I', text: 'I can clearly express my thoughts.' },
    { section: 'B', qId: 5, olqName: 'Social Adaptability', factor: 'II', text: 'I adjust easily to new environments.' },
    { section: 'B', qId: 6, olqName: 'Cooperation', factor: 'II', text: 'I work well in teams.' },
    { section: 'B', qId: 7, olqName: 'Sense of Responsibility', factor: 'II', text: 'I feel accountable for my tasks.' },
    { section: 'B', qId: 8, olqName: 'Initiative', factor: 'II', text: 'I take action without being told.' },
    { section: 'B', qId: 9, olqName: 'Self-Confidence', factor: 'III', text: 'I believe in my abilities.' },
    { section: 'B', qId: 10, olqName: 'Speed of Decision', factor: 'III', text: 'I can make quick decisions.' },
    { section: 'B', qId: 11, olqName: 'Influencing Group', factor: 'III', text: 'My ideas are accepted by others.' },
    { section: 'B', qId: 12, olqName: 'Liveliness', factor: 'III', text: 'I remain positive in difficulties.' },
    { section: 'B', qId: 13, olqName: 'Courage', factor: 'III', text: 'I stand for what is right.' },
    { section: 'B', qId: 14, olqName: 'Determination', factor: 'IV', text: 'I persist despite obstacles.' },
    { section: 'B', qId: 15, olqName: 'Stamina', factor: 'IV', text: 'I can work for long hours.' },
    { section: 'B', qId: 16, olqName: 'Stress Tolerance', factor: 'IV', text: 'I stay calm under pressure.' },
    { section: 'B', qId: 17, olqName: 'Emotional Stability', factor: 'IV', text: 'I remain emotionally balanced.' },
    { section: 'B', qId: 18, olqName: 'Adaptability', factor: 'IV', text: 'I adjust when situations change.' },
    { section: 'B', qId: 19, olqName: 'Sense of Duty', factor: 'IV', text: 'I put duty above comfort.' },
    { section: 'B', qId: 20, olqName: 'Integrity', factor: 'IV', text: 'I remain honest always.' },
    { section: 'B', qId: 21, olqName: 'Fatigue Tolerance', factor: 'IV', text: 'I can perform even when tired.' }
];
