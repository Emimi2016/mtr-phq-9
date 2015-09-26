Fixtures = typeof Fixtures !== 'undefined' ? Fixtures : {};

var now = new Date();

Fixtures.questions = [
    {
        order: 1,
        name: 'question1',
        question: 'Little interest or pleasure in doing things?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 2,
        name: 'question2',
        question: 'Feeling down, depressed, or hopeless?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 3,
        name: 'question3',
        question: 'Trouble falling or staying asleep, or sleeping too much?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 4,
        name: 'question4',
        question: 'Feeling tired or having little energy?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 5,
        name: 'question5',
        question: 'Poor appetite or overeating?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 6,
        name: 'question6',
        question: 'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 7,
        name: 'question7',
        question: 'Trouble concentrating on things, such as reading the newspaper or watching television?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 8,
        name: 'question8',
        question: 'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    },
    {
        order: 9,
        name: 'question9',
        question: 'Thoughts that you would be better off dead, or of hurting yourself in some way?',
        choices: [
            {
                choice: 'Not at all',
                value: 0
            },
            {
                choice: 'Several days',
                value: 1
            },
            {
                choice: 'More than half the days',
                value: 2
            },
            {
                choice: 'Nearly every day',
                value: 3
            }
        ],
        createdAt: now
    }
];
