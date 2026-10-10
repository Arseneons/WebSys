const albums = {
    gitz: {
        title: "Get In The Zone",
        background: "#e4c7a5",
        tracks: [
            "Alab (Burning)",
            "Go Up",
            "Tilaluha",
            "Love Goes",
            "Hanggang Sa Huli",
            "Wag Mong Ikunot Ang Iyong Noo",
            "Love Goes (EDM Version)",
            "Tilaluha (Instrumental)",
            "Hanggang Sa Huli (Instrumental)"
        ]
    },

    pagsibol: {
        title: "Pagsibol",
        background: "#030103",
        tracks: [
            "What?",
            "MAPA",
            "Mana",
            "Bazinga",
            "Ikako",
            "SLMT"
        ]
    },

    pagtatag: {
        title: "Pagtatag!",
        background: "#b8910f",
        tracks: [
            "GENTO",
            "I WANT YOU",
            "CRIMZONE",
            "ILAW",
            "LIHAM",
            "FREEDOM"
        ]
    },

    saw: {
        title: "Simula at Wakas",
        background: "#1d1312",
        tracks: [
            "DAM",
            "Time",
            "8TonBall",
            "Quit",
            "Shooting For The Stars",
            "DUNGKA!",
            "DAM (Extended Ver.)"
        ]
    },

    was: {
        title: "Wakas at Simula",
        background: "#713a15",
        tracks: [
            "VISA",
            "Memories",
            "Toyfriend",
            "Everblack",
            "Emoji",
            "Wakas",
            "What? (Wakas at Simula)",
            "MAPA (Wakas at Simula)",
            "Mana (Wakas at Simula)",
            "Bazinga (Wakas at Simula)",
            "Ikako (Wakas at Simula)",
            "SLMT (Wakas at Simula)"
        ]
    }
};

const albumButtons = document.querySelectorAll(".album-button");
const albumInfo = document.getElementById("album-info");

albumButtons.forEach(button => {
    button.addEventListener("click", () => {
        const album = albums[button.dataset.album];

        // Change the page background
        document.body.style.backgroundColor = album.background;

        // Display the selected album's tracklist
        albumInfo.innerHTML = `
            <h2>${album.title}</h2>
            <ul>
                ${album.tracks.map(track =>
                    `<li>${track}</li>`
                ).join("")}
            </ul>
        `;

        // Highlight the selected album
        albumButtons.forEach(btn => {
            btn.style.outline = "none";
        });

        button.style.outline = "3px solid #333";
        button.style.outlineOffset = "-3px";
    });
});