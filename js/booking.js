const WHATSAPP_NUMBER = "917717760120";

function openBookingModal(roomType) {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    if (roomType) {
      const select = document.getElementById("b_roomtype");
      if (select) select.value = roomType;
    }
    modal.style.display = "flex";
  }
}

function openBanquetModal() {
  const modal = document.getElementById("banquetModal");
  if (modal) {
    modal.style.display = "flex";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target.classList && event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

function handleRoomBooking(event) {
  event.preventDefault();

  const name = document.getElementById("b_name").value.trim();
  const checkin = document.getElementById("b_checkin").value;
  const checkout = document.getElementById("b_checkout").value;
  const guests = document.getElementById("b_guests").value;
  const roomType = document.getElementById("b_roomtype").value;

  const message = `Hello, I would like to book a room at HOTEL ARYAN Residency & Banquet Hall.\nGuest Name: ${name}\nCheck-in Date: ${checkin}\nCheck-out Date: ${checkout}\nNumber of Guests: ${guests}\nRoom Type: ${roomType}\nPlease confirm availability and booking details.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  closeModal("bookingModal");
}

function handleBanquetEnquiry(event) {
  event.preventDefault();

  const name = document.getElementById("bq_name").value.trim();
  const eventDate = document.getElementById("bq_date").value;
  const eventType = document.getElementById("bq_type").value;
  const guests = document.getElementById("bq_guests").value;
  const preferredHall = document.getElementById("bq_hall").value.trim();

  const message = `Hello, I would like to enquire about the Banquet Hall at HOTEL ARYAN Residency & Banquet Hall.\nName: ${name}\nEvent Date: ${eventDate}\nEvent Type: ${eventType}\nNumber of Guests: ${guests}\nPreferred Hall: ${preferredHall}\nPlease share the availability and details.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
  closeModal("banquetModal");
}