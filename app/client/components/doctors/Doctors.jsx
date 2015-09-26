App.Doctors = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('doctors');

        if (handle.ready()) {
            data.doctors = Doctors.find({}, {sort: {rating: 1}}).fetch();
        }

        return data;
    },

    setAppointment: function (event) {
        event.preventDefault();

        FlowRouter.go('Appointments');
    },

    render: function () {
        return (
            <div className="doctors module" onSubmit={this.setAppointment}>
                DOCTORS MODULE
            </div>
        )
    }
});