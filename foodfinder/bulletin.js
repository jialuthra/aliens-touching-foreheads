// Some starter posts so the board isn't empty on load
const starterPosts = [
  {
    title: "Free Bake Sale",
    location: "Republic Square Park",
    date: "Every Sunday",
    desc: "Free baked goods every Sunday morning while supplies last!"
  },
  {
    title: "Community Fridge",
    location: "East Austin Community Center",
    date: "Daily",
    desc: "Free fridge stocked daily — take what you need, leave what you can."
  }
];
//color for bulletin board background
const board_color = "#38380a";
// Rotate through these colors to make it look like a real bulletin board
const colors = ["#fdfd96", "#ffb7c5", "#b5ead7", "#aed6f1", "#f9c784"];
let colorIndex = 0;

function createPost(title, location, date, desc) {
  const note = document.createElement("div");
  note.classList.add("sticky-note");
  note.style.backgroundColor = colors[colorIndex % colors.length];
  colorIndex++;

  note.innerHTML = `
    <h3>${title}</h3>
    <p><strong>📍</strong> ${location}</p>
    <p><strong>📅</strong> ${date}</p>
    <p>${desc}</p>
  `;

  document.getElementById("board").appendChild(note);
}

function addPost() {
  const title = document.getElementById("event-title").value.trim();
  const location = document.getElementById("event-location").value.trim();
  const date = document.getElementById("event-date").value;
  const desc = document.getElementById("event-desc").value.trim();

  // Basic validation — don't post if fields are empty
  if (!title || !location || !date || !desc) {
    alert("Please fill out all fields before posting!");
    return;
  }

  createPost(title, location, date, desc);

  // Clear the form after submitting
  document.getElementById("event-title").value = "";
  document.getElementById("event-location").value = "";
  document.getElementById("event-date").value = "";
  document.getElementById("event-desc").value = "";
}

// Load starter posts when the page opens
starterPosts.forEach(p => createPost(p.title, p.location, p.date, p.desc));