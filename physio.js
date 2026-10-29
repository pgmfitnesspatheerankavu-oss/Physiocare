const PhysioCare = {
  getPatients() {
    return JSON.parse(
      localStorage.getItem("physiocare_patients") || "[]"
    );
  },

  addPatient(patient) {
    const patients = this.getPatients();

    patients.push({
      id: "P" + Date.now(),
      name: patient.name,
      phone: patient.phone || "",
      age: patient.age || "",
      createdAt: new Date().toISOString()
    });

    localStorage.setItem(
      "physiocare_patients",
      JSON.stringify(patients)
    );

    return patients;
  },

  deletePatient(id) {
    const patients = this.getPatients().filter(
      patient => patient.id !== id
    );

    localStorage.setItem(
      "physiocare_patients",
      JSON.stringify(patients)
    );

    return patients;
  },

  getAppointments() {
    return JSON.parse(
      localStorage.getItem("physiocare_appointments") || "[]"
    );
  },

  addAppointment(appointment) {
    const appointments = this.getAppointments();

    appointments.push({
      id: "A" + Date.now(),
      patientId: appointment.patientId,
      date: appointment.date,
      time: appointment.time || "",
      therapist: appointment.therapist || "",
      status: "Scheduled"
    });

    localStorage.setItem(
      "physiocare_appointments",
      JSON.stringify(appointments)
    );

    return appointments;
  },

  getSessions() {
    return JSON.parse(
      localStorage.getItem("physiocare_sessions") || "[]"
    );
  },

  addSession(session) {
    const sessions = this.getSessions();

    sessions.push({
      id: "S" + Date.now(),
      patientId: session.patientId,
      treatment: session.treatment,
      therapist: session.therapist || "",
      date: session.date || new Date().toISOString().slice(0, 10),
      notes: session.notes || ""
    });

    localStorage.setItem(
      "physiocare_sessions",
      JSON.stringify(sessions)
    );

    return sessions;
  },

  getBills() {
    return JSON.parse(
      localStorage.getItem("physiocare_bills") || "[]"
    );
  },

  addBill(bill) {
    const bills = this.getBills();

    bills.push({
      id: "INV" + Date.now(),
      patientId: bill.patientId,
      amount: Number(bill.amount) || 0,
      description: bill.description || "Treatment",
      status: bill.status || "Unpaid",
      date: new Date().toISOString().slice(0, 10)
    });

    localStorage.setItem(
      "physiocare_bills",
      JSON.stringify(bills)
    );

    return bills;
  }
};

window.PhysioCare = PhysioCare;

