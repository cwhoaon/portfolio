function hexToRGB(code) {
    let rStr = code.substring(0, 2)
    let gStr = code.substring(2, 4)
    let bStr = code.substring(4, 6)

    

    return {
        r: parseInt(rStr, 16),
        g: parseInt(gStr, 16),
        b: parseInt(bStr, 16)
    }
}

const color = [
    'FFC0C0', 'B2C3FF', 'FEC5FF', '17D3DE', 'C3AED8',
    'FFA8A8', '97AEFF', 'FDA6FF', '15C0CA', 'B59DCC',
    'FF8F8F', '809CFF', 'FD97FF', '11A4AD', '9D83B7',
    'FF6F6F', '6688FF', 'FC5BFF', '0F8F97', '8D6FAA',
    '00C1FF'
]

const Projects = [
    {
        name: "Mini Metro",
        type: "web",
        tools: ["javascript", "p5js"],
        desc: "Simple web game using p5js canvas drawing."
    },
    {
        name: "Team Project Manager",
        type: "web",
        tools: ["react", "nextjs", "firebase", "vercel"],
        desc: "Web service for team project. User can create their own account and log in. They can add their schedules or build teams. User can add a schdule for a team."
    },
    {
        name: "First Android",
        type: "android",
        tools: ["kotlin"],
        desc: "Test app for android developing study. In first tab, it gets user's contact and shows it. User can search, or add a new contact. In second tab, it gets user's photo and shows selected ones. In third tab, I use naver map api to show current location, and if user click some point of the map, it shows a toast message of that location."
    },
    {
        name: "Mad Runner",
        type: "android",
        tools: ["kotlin", "nodejs + express", "mongodb"],
        desc: "Running app for android. Users can track their running location. And they can see their previous runnings. There are also friend and group feature, so users can share their runnings with others."
    },
    {
        name: "MadCamp Exhibition",
        type: "web",
        tools: ["javascript", "p5js"],
        desc: "Gallery website for projects and people at KAIST MadCamp."
    }
]

export { hexToRGB, color, Projects }