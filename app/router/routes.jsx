FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Root />
        });
    }
});

FlowRouter.route('/referrals', {
    name: 'Referrals',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Referrals />
        });
    }
});

FlowRouter.route('/complete', {
    name: 'Complete',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Complete />
        });
    }
});