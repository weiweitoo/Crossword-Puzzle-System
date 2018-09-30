const Appointment = require('../models').appointments;

module.exports = {
  create(req, res) {
    return Appointment.create({
        appointmenttitle: req.body.appointmenttitle,
        appointmentdesc: req.body.appointmentdesc,
        appointmentdate: req.body.appointmentdate,
        teacherId: req.body.teacherId
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
  //TODO tbc
  getAvailableSlot(req, res) {
    return Appointment.findAll({
      where:{
        studentId : null,
        teacherId : req.params.teacherId
      }
    })
      .then(appointment => res.status(200).send(appointment))
      .catch(error => res.status(400).send(error));
  },
  bookSlot(req, res) {
    return Appointment.update(
      {studentId: req.body.userId},
      {where: { id: req.body.appointmentId}}
    )
      .then(appointment => res.status(200).send({"status":"success"}))
      .catch(error => res.status(400).send(error));
  },
};