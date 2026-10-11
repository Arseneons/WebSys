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

const members = {
    ken: {
        stageName: "Ken",
        birthName: "Felip Jhon Suson",
        positions: "Main Dancer, Lead Vocalist, Lead Rapper",
        birthdate: "January 12, 1997",
        zodiacSign: "Capricorn",
        mbtiType: "INTJ"
    },
    stell: {
        stageName: "Stell",
        birthName: "Stellvester Ajero",
        positions: "Main Vocalist, Lead Dancer",
        birthdate: "June 16, 1995",
        zodiacSign: "Gemini",
        mbtiType: "ENFJ"
    },
    pablo:{
        stageName: "Pablo",
        birthName: "John Paulo Nase",
        positions: "Leader, Main Rapper, Lead Vocalist",
        birthdate: "September 14, 1994",
        zodiacSign: "Virgo",
        mbtiType: "INTJ"
    },
    josh: {
        stageName: "Josh",
        birthName: "Josh Cullen Santos",
        positions: "Lead Rapper, Lead Dancer, Sub-Vocalist",
        birthdate: "October 22, 1993",
        zodiacSign: "Libra",
        mbtiType: "INTJ"
    },
    justin: {
        stageName: "Justin",
        birthName: "Justin De Dios",
        positions: "Sub-Vocalist, Visual",
        birthdate: "July 7, 1998",
        zodiacSign: "Cancer",
        mbtiType: "INFJ"
    }
};


const albumInfo = document.getElementById("album-info");

if (albumInfo){
    const albumButtons = document.querySelectorAll(".album-button");
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
}

const memberInfo = document.getElementById("member-info");

if (memberInfo){
    const memberButtons = document.querySelectorAll(".member-button");
memberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const member = members[button.dataset.member];

        memberInfo.innerHTML = `
            <h2>${member.stageName}</h2>
            <h3>${member.birthName}</h3>
            <p>
            <strong>Positions: </strong>${member.positions}<br>
            <strong>Birthdate: </strong>${member.birthdate}<br>
            <strong>Zodiac Sign: </strong>${member.zodiacSign}<br>
            <strong>MBTI Type: </strong>${member.mbtiType}
            </p>
        `;


        
        memberButtons.forEach(btn => {
            btn.style.outline = "none";
        });

        button.style.outline = "3px solid #333";
        button.style.outlineOffset = "-3px";
    });
});
}