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

FlowRouter.route('/appointments', {
    name: 'Appointments',
    action() {
        ReactLayout.render(App.Layout, {
            content: <App.Appointments />
        });
    }
});