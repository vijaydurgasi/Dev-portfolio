function Home({ openFile }) {
    return (
        <div className="p-10 max-w-5xl mx-auto space-y-10">

            {/* Hero Heading */}
            <div className="space-y-4">
                <h1 className="text-5xl font-bold text-white leading-tight">
                    Vijay Durgasi
                </h1>

                <p className="text-xl text-blue-400">
                    AI + Full Stack Developer
                </p>

                <p className="text-gray-400 max-w-2xl">
                    I build scalable web applications and explore AI-driven systems.
                    Focused on clean architecture, performance, and real-world impact.
                </p>
            </div>

            {/* Code Style Intro */}
            <div className="bg-[#1e1e1e] border border-gray-700 rounded-md p-6 font-mono text-sm text-gray-300">
                <p>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-yellow-400">developer</span> = {"{"}
                </p>

                <p className="ml-6">
                    name: <span className="text-orange-300">"Vijay Durgasi"</span>,
                </p>

                <p className="ml-6">
                    role: <span className="text-orange-300">"AI + Full Stack Engineer"</span>,
                </p>

                <p className="ml-6">
                    location: <span className="text-orange-300">"India"</span>,
                </p>

                <p className="ml-6">
                    focus: <span className="text-orange-300">"Scalable Systems & Intelligent Applications"</span>
                </p>

                <p>{"};"}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">

                <button
                    onClick={() => openFile("projects")}
                    className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white transition"
                >
                    View Projects
                </button>

                <button
                    onClick={() => openFile("about")}
                    className="border border-blue-500 hover:bg-blue-500/10 px-6 py-2 rounded text-blue-400 transition"
                >
                    About Me
                </button>

                <button
                    onClick={() => openFile("contact")}
                    className="border border-gray-600 hover:bg-gray-700/30 px-6 py-2 rounded text-gray-300 transition"
                >
                    Contact
                </button>

            </div>

            {/* Subtle Statement */}
            <p className="text-green-400 text-sm">
        // Building with intention. Scaling with intelligence.
            </p>

        </div>
    )
}

export default Home