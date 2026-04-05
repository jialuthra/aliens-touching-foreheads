//color for bulletin board background
const board_color = "#38380a";
// Rotate through these colors to make it look like a real bulletin board
const colors = ["#fdfd96", "#ffb7c5", "#b5ead7", "#aed6f1", "#f9c784"];
let colorIndex = 0;

const photoInput = document.getElementById("event-photo");

function createPost(title, userName, location, date, desc, id = null, link = null, photo = null) {
  const note = document.createElement("div");
  note.classList.add("sticky-note");
  note.style.backgroundColor = colors[colorIndex % colors.length];
  colorIndex++;

  const titleHTML = link
    ? `<a href="${link}" target="_blank" rel="noopener noreferrer">${title}</a>`
    : title;

  // only add the img tag if a photo was provided
  const photoHTML = photo
    ? `<img src="${photo}" alt="Event photo" class="note-photo" />`
    : "";
    
  note.innerHTML = `
    <h3>${titleHTML}</h3>
    ${userName ? `<p>👤 Posted by: ${userName}</p>` : ""}
    <p>📍 ${location}</p>
    <p>📅 ${date}</p>
    <p>${desc}</p>
    ${id ? `<a href="index.html#${id}" class="map-link">📌 view on map</a>` : ''}
`

  const wrapper = document.createElement("div")
  wrapper.classList.add("note-wrapper")

  const photoEl = photo ? (() => {
    const img = document.createElement("img")
    img.src = photo
    img.classList.add("note-photo")
    return img
  })() : null

  wrapper.appendChild(note)
  if (photoEl) wrapper.appendChild(photoEl)
  document.getElementById("board").appendChild(wrapper)

  if (id) note.id = id;
}

function addPost() {
  const title = document.getElementById("event-title").value.trim();
  const userName = document.getElementById("user-name").value.trim();
  const location = document.getElementById("event-location").value.trim();
  const date = document.getElementById("event-date").value;
  const desc = document.getElementById("event-desc").value.trim();
  const link = document.getElementById("event-link").value.trim();
  // const file = photoInput.files[0];
  // Basic validation — don't post if fields are empty
  if (!title || !userName || !location || !date || !desc) {
    alert("Please fill out all fields before posting!");
    return;
  }

// if a photo was uploaded, read it before creating the post
  // if (file) {
  //   const reader = new FileReader();
  //   reader.onload = function(e) {
  //     createPost(title, location, date, desc, link, e.target.result);  // e.target.result is the image as a data URL
  //   };
  //   reader.readAsDataURL(file);
  // } else {
  //   createPost(title, location, date, desc, link, null);
  // }

  createPost(title, userName, location, date, desc, null, link);

  // Clear the form after submitting
  document.getElementById("event-title").value = "";
  document.getElementById("user-name").value = "";
  document.getElementById("event-location").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-desc").value = "";
  document.getElementById("event-link").value = "";
}

locations.forEach(loc => {
  console.log("image path", loc.image)
  createPost(
    loc.name,
    null,
    loc.location,
    loc.hours,
    loc.description,
    loc.id,
    null, 
    loc.image
)})

window.addEventListener('load', () => {
  const id = window.location.hash.replace('#', '')
  if (id) {
    const note = document.getElementById(id)
    if (note) {
      note.scrollIntoView({ behavior: 'smooth '})
      note.style.outline = '3px solid #ffffff'
    }
  }
})

const harnold = document.getElementById("harnold");
document.addEventListener("mousemove", (e) => {
  harnold.style.left = e.clientX + "px";
  harnold.style.top = e.clientY + "px";
});