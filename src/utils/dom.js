let elements = {};

export default function getElements() {
  if (Object.keys(elements).length === 0) {
    elements = {
      form: document.getElementById("myForm"),
      doctorEle: document.getElementById("doctor"),
      btnHalf: document.getElementById("btn-half"),
      btnFull: document.getElementById("btn-full"),
      dateEle: document.getElementById("date"),
      sortEle: document.getElementById("sort"),
      slotEle: document.getElementById("slot"),
      appointmentCards: document.getElementById("appointment-cards"),
      toast: document.getElementById("toast-message"),
      docList: document.getElementById("doc-options"),
      nameEle: document.getElementById("name"),
      emailEle: document.getElementById("email"),
      purposeEle: document.getElementById("purpose"),
      slotOptionsEle: document.getElementById("slot-options"),
      totalAppEle: document.getElementById("total-appointments"),
      appointmentListContainer: document.getElementById("appointment-list-container"),
      appointmentTable: document.getElementById("appointment-table")
    };
  }

  return elements;
}
