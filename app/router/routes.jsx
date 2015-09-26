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