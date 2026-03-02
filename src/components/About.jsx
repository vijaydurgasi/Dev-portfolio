function About() {
    return (
        <div className="p-6 font-mono text-sm text-gray-300 leading-7 space-y-6">

            <h1 className="text-2xl text-white font-bold">
                About Me
            </h1>

            <p>
                I’m <span className="text-blue-400">Vijay Durgasi</span>,
                an AI + Full Stack Developer based in India.
            </p>

            <p>
                I specialize in building scalable web applications using modern technologies like React and Node.js,
                with a strong focus on performance, clean architecture, and real-world usability.
            </p>

            <p>
                My long-term goal is to design intelligent systems that combine software engineering
                with AI-driven problem solving.
            </p>

            <div>
                <h2 className="text-blue-400 font-semibold mb-2">
                    What I Focus On
                </h2>

                <ul className="space-y-1">
                    <li>• Frontend architecture & UI systems</li>
                    <li>• Backend APIs & authentication systems</li>
                    <li>• Scalable project structure</li>
                    <li>• AI-integrated applications</li>
                    <li>• creating chat bots</li>
                </ul>
            </div>

            <p className="text-green-400">
        // Always learning. Always building.
            </p>

        </div>
    )
}

export default About