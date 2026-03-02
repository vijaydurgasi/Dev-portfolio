function Projects() {

    const projects = [
        {
            id: 0,
            name: "Swiggy Clone",
            description: "Full-featured food ordering application with cart logic and state management.",
            impact: "Implemented Redux for scalable state handling.",
            link: "https://namaste-react-wheat-xi.vercel.app/",
            tags: ["React", "Redux", "Tailwind"]
        },
        {
            id: 1,
            name: "YouTube Clone",
            description: "Dynamic video browsing interface using real API integration.",
            impact: "Handled asynchronous data fetching and optimized rendering.",
            link: "https://namaste-youtube-psi.vercel.app/",
            tags: ["React", "API", "Frontend"]
        },
        {
            id: 2,
            name: "Netflix Clone",
            description: "Authentication-enabled streaming UI with Firebase integration.",
            impact: "Integrated Firebase auth and built protected routes.",
            link: "https://netflixgpt2026.vercel.app/",
            tags: ["React", "Redux", "Firebase", "Tailwind"]
        }
    ]

    return (
        <div className="p-6 font-mono text-sm text-gray-300 leading-6">

            <p>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-400">projects</span> = [
            </p>

            <div className="ml-6 space-y-6">

                {projects.map((project, index) => (
                    <div key={project.id}>
                        <p>{"  {"}</p>

                        <div className="ml-6 space-y-1">

                            <p>
                                <span className="text-blue-400">id</span>:{" "}
                                <span className="text-orange-300">{project.id}</span>,
                            </p>

                            <p>
                                <span className="text-blue-400">name</span>:{" "}
                                <span className="text-orange-300">
                                    "{project.name}"
                                </span>,
                            </p>

                            <p>
                                <span className="text-blue-400">description</span>:{" "}
                                <span className="text-orange-300">
                                    "{project.description}"
                                </span>,
                            </p>

                            <p>
                                <span className="text-blue-400">impact</span>:{" "}
                                <span className="text-orange-300">
                                    "{project.impact}"
                                </span>,
                            </p>

                            <p>
                                <span className="text-blue-400">link</span>:{" "}
                                <span className="text-orange-300">"</span>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-300 hover:underline"
                                >
                                    {project.link}
                                </a>
                                <span className="text-orange-400">"</span>,
                            </p>

                            <p>
                                <span className="text-blue-400">tags</span>: [
                                {project.tags.map((tag, i) => (
                                    <span key={i}>
                                        <span className="text-orange-300">
                                            "{tag}"
                                        </span>
                                        {i !== project.tags.length - 1 && ", "}
                                    </span>
                                ))}
                                ],
                            </p>

                        </div>

                        <p>
                            {"  }"}
                            {index !== projects.length - 1 && ","}
                        </p>
                    </div>
                ))}

            </div>

            <p>];</p>

            <p className="text-green-400 mt-4">
        // Currently building AI-integrated applications 🚀
            </p>

        </div>
    )
}

export default Projects