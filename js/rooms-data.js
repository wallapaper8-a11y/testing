window.roomsData = [
  {
  id: "ac",
  title: "AC Room",
  cover: "killer/photo 26.jpg",
  images: [
    "killer/photo 26.jpg",
    "killer/photo 28.jpg",
    "killer/photo 23.jpg",
    "killer/photo 7.jpg",
  ]
},
  {
    id: "nonAc",
    title: "Non-AC Room",
    price: "₹1,300",
    images: [
      "killer/photo 21.jpg",
      "killer/photo 7.jpg",
      "killer/photo 28.jpg",
      "killer/photo 23.jpg",
    ]
  },
  {
    id: "doubleBed",
    title: "Double Bed Non-AC Room",
    price: "₹1,000",
    images: [
      "assets/favicon.svg"
    ]
  },
  {
    id: "normal",
    title: "Normal Room",
    price: "₹800",
    images: [
      "killer/photo 13.jpg",
      "killer/photo 7.jpg", 
      "killer/photo 28.jpg",
      "killer/photo 23.jpg",
    ]
  },
  {
        id: "about",
        title: "About Hotel Aryan",
        cover: "killer/T2.png",
        images: [
            "killer/T2.png",
            "killer/photo 6.jpg",
            "killer/photo 28.jpg",
            "killer/photo 23.jpg",
            "killer/photo 10.jpg"

        ]
    }
];
document.addEventListener("DOMContentLoaded", function () {
    // AC Room
    const acRoom = window.roomsData.find(r => r.id === "ac");
    const acImg = document.getElementById("img-ac");
    if (acImg && acRoom) {
        acImg.src = acRoom.cover || acRoom.images[0];
    }

    // Non-AC Room
    const nonAcRoom = window.roomsData.find(r => r.id === "nonAc");
    const nonAcImg = document.getElementById("img-nonAc");
    if (nonAcImg && nonAcRoom) {
        nonAcImg.src = nonAcRoom.cover || nonAcRoom.images[0];
    }

    // Double Bed Non-AC Room
    const doubleBedRoom = window.roomsData.find(r => r.id === "doubleBed");
    const doubleBedImg = document.getElementById("img-doubleBed");
    if (doubleBedImg && doubleBedRoom) {
        doubleBedImg.src = doubleBedRoom.cover || doubleBedRoom.images[0];
    }

    // Normal Room
    const normalRoom = window.roomsData.find(r => r.id === "normal");
    const normalImg = document.getElementById("img-normal");
    if (normalImg && normalRoom) {
        normalImg.src = normalRoom.cover || normalRoom.images[0];
    }
    // About photo dynamically load karne ke liye
const aboutData = window.roomsData.find(r => r.id === "about");
const aboutImg = document.getElementById("img-about");
if (aboutImg && aboutData) {
    aboutImg.src = aboutData.cover || aboutData.images[0];
}
});
