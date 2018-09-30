const Appointment = require('../models').appointments;

module.exports = {
  create(req, res) {
    // res.send(req.body);
    return Appointment.create({
        appointmenttitle: req.body.appointmenttitle,
        appointmentdesc: req.body.appointmentdesc,
        appointmentdate: req.body.appointmentdate,
        teacherId: req.body.teacherId,
        studentId: req.body.studentId,
      })
      .then(Appointment => res.status(201).send(Appointment))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Appointment
      .all()
      .then(appointment => res.status(200).send(appointment))
      .catch(error => res.status(400).send(error));
  },
};