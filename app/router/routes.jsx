FlowRouter.route('/', {
    name: 'Root',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Root />
        });
    }
});

FlowRouter.route('/diagnosis', {
    name: 'Diagnosis',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Diagnosis />
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

FlowRouter.route('/appointments', {
    name: 'Appointments',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Appointments />
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