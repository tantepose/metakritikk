const items = [
    {
        title: "The Exorcist: Believer",
        reviews: [
            {
                author: "NRK",
                url: "https://p3.no/filmpolitiet/2023/10/the-exorcist-believer/",
                snippet: "Var nå dette virkelig nødvendig, da?",
                score: 2,
                maxScore: 6
            },
            {
                author: "Filmmagasinet",
                url: "https://p3.no/filmpolitiet/2023/10/the-exorcist-believer/",
                snippet: "Å hoppe etter William.",
                score: 3,
                maxScore: 5
            }
        ]
    },
    {
        title: "Lars er LOL",
        reviews: [
            {
                author: "VG",
                url: "https://www.vg.no/rampelys/film/i/xgkQwp/filmanmeldelse-lars-er-lol-empaticus-maximus",
                snippet: "Filmatiseringen av Iben Akerlies barnebok tør å være trist.",
                score: 4,
                maxScore: 6
            },
            {
                author: "NRK",
                url: "https://p3.no/filmpolitiet/2023/09/lars-er-lol/",
                snippet: "Trekker åpenlyst i våre hjertetråder.",
                score: 4,
                maxScore: 6
            }
        ]
    },
    {
        title: "The Fall of the House of Usher",
        reviews: [
            {
                author: "NRK",
                url: "https://p3.no/filmpolitiet/2023/10/the-fall-of-the-house-of-usher/",
                snippet: "En uhyggelig god og mørk høstgryte.",
                score: 5,
                maxScore: 6
            },
            {
                author: "Aftenposten",
                url: "https://vink.aftenposten.no/artikkel/O8d8q1/tv-anmeldelse-the-fall-of-the-house-of-usher-er-ikke-horror-for-pyser",
                snippet: "«Succession» møter Edgar Allan Poe i Mike Flanagans skrekkinngytende nye serie.",
                score: 5,
                maxScore: 6
            }
        ]
    },
    {
        title: "Saw X",
        reviews: [
            {
                author: "NRK",
                url: "https://p3.no/filmpolitiet/2023/10/the-fall-of-the-house-of-usher/",
                snippet: "Begår et ekstremt overtramp som krenker all anstendighet.",
                score: 3,
                maxScore: 6
            },
            {
                author: "Jump Cut",
                url: "https://jump-cut.no/saw-x-en-blodig-affaere/",
                snippet: "“Saw” er tilbake, med dette tiende kapittelet av den groteske filmserien leverer de oss det vi forventer, noen forskrudde leker og masse blod.",
                score: 3.5,
                maxScore: 5
            },
            {
                author: "Filmmagasinet",
                url: "https://www.filmmagasinet.no/2023/09/saw-x/",
                snippet: "Tilbake til røttene med Jigsaw.",
                score: 4,
                maxScore: 5
            }
        ]
    },
    {
        title: "Royalteen: Prinsesse Margrethe",
        reviews: [
            {
                author: "NRK",
                url: "https://p3.no/filmpolitiet/2023/05/royalteen-prinsesse-margrethe/",
                snippet: "Skandaleangst og afterski.",
                score: 4,
                maxScore: 6
            },
            {
                author: "Dagsavisen",
                url: "https://www.dagsavisen.no/kultur/film/2022/08/17/femti-grader-rodt-hvitt-og-blatt/",
                snippet: "«Royalteen» er en rojalistisk såpeopera for tenåringer, en slags kysk fjortisvariant av «Fifty Shades of Grey», der rumpedaskingen er byttet ut med erketypiske prinsessedrømmer.",
                score: 3,
                maxScore: 6
            }
        ]
    }
]

// lag totalScore for hver item
items.forEach(item => {
    // lag array med alle scores fra 0 til 1, i stedet for max og min
    let scores = []
    item.reviews.forEach(review => {
        scores.push(review.score / review.maxScore)
    });

    // regne ut snittet av alle poengene
    item.totalScore = scores.reduce((a, b) => a + b, 0) / scores.length // https://www.logilax.com/javascript-calculate-average/
})

export { items }