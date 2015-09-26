Fixtures = typeof Fixtures !== 'undefined' ? Fixtures : {};

Fixtures.reports = [
    {
        from: 0,
        to: 4,
        message: 'You don\'t seem to be depressed... stay happy.',
        status: 'positive'
    },
    {
        from: 5,
        to: 9,
        message: 'You seem to have mild depression... all things pass.',
        status: 'caution'
    },
    {
        from: 10,
        to: 14,
        message: 'You seem to have moderate depression... how about seeing one of these specialists?',
        status: 'negative'
    },
    {
        from: 15,
        to: 19,
        message: 'You seem to have moderately severe depression... consider seeing one of these specialists:',
        status: 'negative'
    },
    {
        from: 20,
        to: 27,
        message: 'You seem to have severe depression... please schedule to see one of these specialists:',
        status: 'negative'
    }
];
