App.Doctors = React.createClass({
    mixins: [ReactMeteorData],
    PropTypes: {},

    getMeteorData() {
        var data = {},
            handle = Meteor.subscribe('doctors');

        if (handle.ready()) {
            data.doctors = Doctors.find({}, {sort: {rating: -1}}).fetch();
        }

        return data;
    },

    renderDoctors() {
        return this.data.doctors.map(function (doctor) {
            return (
                <a className="doctor" href="/appointments" key={doctor._id}>
                    <img className="image thumb" src={doctor.image} />
                    <h4 className="name">
                        {doctor.name}
                    </h4>
                </a>
            )
        });
    },

    render: function () {
        return (
            <div className="centered doctors module">
                {(this.data.doctors) ? this.renderDoctors() : <App.Loading />}
            </div>
        )
    }
});