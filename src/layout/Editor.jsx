import Tabs from "./Tabs"
import CodeBlock from "../components/CodeBlock"
import { HiMenu } from "react-icons/hi"

function Editor({
    openTabs,
    activeFile,
    setActiveFile,
    closeTab,
    toggleSidebar,
    openFile
}) {
    const files = {
        home: {
            language: "javascript",
            code: `const developer = {
            name: "Vijay Durgasi",
            role: "AI + Full Stack Developer",
            stack: ["React", "Node.js", "MongoDB", "AI Systems"],
            mission: "Building intelligent, scalable products."
            };`,
        },

        about: {
            language: "markdown",
            code: ""
        },
        readme: {
            language: "markdown",
            code: `# Developer's Portfolio 🚀

Welcome to my interactive developer portfolio built with a VS Code-inspired UI.

---

## 👨‍💻 About This Project

This portfolio is designed to simulate a real development environment.

It features:
- 📁 File explorer with folder structure
- 🗂 Dynamic tab system
- 🖥 Resizable terminal panel
- 🎨 VS Code-style UI theme
- ⚡ Fully responsive layout

---

## 🧠 Tech Stack

- React (Vite)
- Tailwind CSS
- JavaScript
- React Icons

---

## 📂 Project Structure

\`\`\`
Developer's Portfolio
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── data/
│   └── styles/
│
├── package.json
└── README.md
\`\`\`

---

## 🎯 Features Implemented

- Multiple open tabs behavior
- Prevent duplicate tabs
- Close tab logic
- Active file highlighting
- Scroll containment (like VS Code)
- Clickable links inside files

---

## 🚀 Future Improvements

- Add AI chatbot inside terminal
- Ctrl + Click to follow links
- File collapse animations
- Drag & reorder tabs
- Custom scrollbar styling

---

## 📩 Contact

If you'd like to collaborate or connect:

Email: vijaydurgasi2005@gmail.com  
GitHub: https://github.com/vijaydurgasi  
LinkedIn: https://www.linkedin.com/in/vijaydurgasi/

---

### Always building. Always learning. 🚀`,
        },

        projects: {
            language: "javascript",
            code: `const projects = [
        {
            id: 0,
            name: "Swiggy Clone",
            description: "Food ordering app built with React + Redux.",
            link: "https://your-swiggy-clone-link.com",
            tags: ["React", "Redux", "Tailwind"]
        },
        {
            id: 1,
            name: "YouTube Clone",
            description: "Video streaming UI with API integration.",
            link: "https://your-youtube-clone-link.com",
            tags: ["React", "API", "Frontend"]
        },
        {
            id: 2,
            name: "Backend Auth System",
            description: "JWT authentication with Node & MongoDB.",
            link: "https://github.com/vijaydurgasi",
            tags: ["Node", "MongoDB", "Backend"]
        }
];

// TODO: Build AI-powered products 🚀`,
        },

        package: {
            language: "json",
            code: `{
            "name": "vijay-ai-dev",
            "version": "2.0.0",
            "description": "AI + Full Stack Engineer",
            "skills": ["React", "Node", "MongoDB", "AI"],
            "mindset": "Builder"
            }`,
        },

        contact: {
            language: "javascript",
            code: `const contact = {
            email: "vijaydurgasi2005@gmail.com",
            github: "https://github.com/vijaydurgasi",
            linkedin: "https://www.linkedin.com/in/vijaydurgasi/"
            };`,
        },
    }

    return (
        <div className="flex-1 flex flex-col min-h-0">

            {/* Mobile Header */}
            <div className="md:hidden bg-[#2d2d2d] p-2 border-b border-gray-700">
                <HiMenu
                    className="text-2xl cursor-pointer"
                    onClick={toggleSidebar}
                />
            </div>

            {/* Tabs */}
            <Tabs
                openTabs={openTabs}
                activeFile={activeFile}
                setActiveFile={setActiveFile}
                closeTab={closeTab}
            />

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">

                {/* ================= HOME FILE ================= */}
                {activeFile === "home" && (
                    <div className="p-10 max-w-5xl mx-auto space-y-10">

                        {/* Heading */}
                        <h1 className="text-5xl font-bold text-white">
                            Hello, I'm{" "}
                            <span className="text-blue-500">Vijay Durgasi</span>
                        </h1>

                        {/* Code Block Box */}
                        <div className="bg-[#1e1e1e] border border-gray-700 rounded-md p-6 font-mono text-sm text-gray-300">
                            <p>
                                <span className="text-blue-400">const</span> developer = {"{"}
                            </p>
                            <p className="ml-6">
                                name: <span className="text-orange-400">"Vijay Durgasi"</span>,
                            </p>
                            <p className="ml-6">
                                role: <span className="text-orange-400">"AI + Full Stack Developer"</span>,
                            </p>
                            <p className="ml-6">
                                location: <span className="text-orange-400">"Hyderabad, India"</span>,
                            </p>
                            <p className="ml-6">
                                mission: <span className="text-orange-400">"Building intelligent, scalable products."</span>
                            </p>
                            <p>{"};"}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-lg leading-relaxed">
                            I build scalable web applications using React, Node.js and modern technologies.
                            Passionate about AI systems and full stack architecture.
                        </p>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => openFile("projects")}
                                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white"
                            >
                                View Projects
                            </button>

                            <button
                                onClick={() => openFile("contact")}
                                className="border border-blue-500 hover:bg-blue-500/10 px-6 py-2 rounded text-blue-400"
                            >
                                Contact Me
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-700 pt-6" />

                        {/* Quick Links */}
                        <div>
                            <h2 className="text-gray-500 text-sm uppercase tracking-wide mb-4">
                                Quick Links
                            </h2>

                            <div className="flex flex-wrap gap-8 text-blue-400 font-mono text-sm">
                                <span
                                    onClick={() => openFile("about")}
                                    className="cursor-pointer hover:underline"
                                >
                                    About.md
                                </span>

                                <span
                                    onClick={() => openFile("projects")}
                                    className="cursor-pointer hover:underline"
                                >
                                    Projects.json
                                </span>

                                {/* <span
                                    onClick={() => openFile("videos")}
                                    className="cursor-pointer hover:underline"
                                >
                                    Videos.tsx
                                </span> */}

                                <span
                                    onClick={() => openFile("contact")}
                                    className="cursor-pointer hover:underline"
                                >
                                    Contact.css
                                </span>
                            </div>
                        </div>

                    </div>
                )}

                {/* ================= CONTACT FILE ================= */}
                {activeFile === "contact" && (
                    <div className="p-6 font-mono text-sm text-gray-300 leading-6">
                        <p className="text-green-400">/* Reach out to me anytime! */</p>

                        <p>
                            <span className="text-yellow-400">.social-links</span> {"{"}
                        </p>

                        <div className="ml-6 space-y-1">

                            <p>
                                <span className="text-blue-400">email</span>:{" "}
                                <span className="text-orange-400">"</span>
                                <a
                                    href="mailto:vijaydurgasi2005@gmail.com"
                                    className="text-orange-400 hover:underline"
                                >
                                    vijaydurgasi2005@gmail.com
                                </a>
                                <span className="text-orange-400">"</span>;
                            </p>

                            <p>
                                <span className="text-blue-400">github</span>: url(
                                <span className="text-orange-400">"</span>
                                <a
                                    href="https://github.com/vijaydurgasi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:underline"
                                >
                                    github.com/vijaydurgasi
                                </a>
                                <span className="text-orange-400">"</span>
                                );
                            </p>

                            <p>
                                <span className="text-blue-400">linkedin</span>: url(
                                <span className="text-orange-400">"</span>
                                <a
                                    href="https://www.linkedin.com/in/vijaydurgasi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:underline"
                                >
                                    linkedin.com/in/vijaydurgasi
                                </a>
                                <span className="text-orange-400">"</span>
                                );
                            </p>

                        </div>

                        <p>{"}"}</p>

                        <br />

                        <p>
                            <span className="text-yellow-400">#location</span> {"{"}
                        </p>

                        <div className="ml-6 space-y-1">
                            <p>
                                city: <span className="text-orange-400">"Hyderabad"</span>;
                            </p>
                            <p>
                                country: <span className="text-orange-400">"India"</span>;
                            </p>
                        </div>

                        <p>{"}"}</p>
                    </div>
                )}

                {/* ================= PROJECTS FILE ================= */}
                {activeFile === "projects" && (
                    <div className="p-6 font-mono text-sm text-gray-300 leading-6 space-y-2">

                        <p>
                            <span className="text-blue-400">const</span>{" "}
                            <span className="text-yellow-400">projects</span> = [
                        </p>

                        <div className="ml-6 font-mono text-sm text-gray-300">

                            {/* Swiggy */}
                            <div>
                                <p>{"  {"}</p>

                                <div className="ml-6">
                                    <p>
                                        <span className="text-blue-400">id</span>:{" "}
                                        <span className="text-orange-300">0</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">name</span>:{" "}
                                        <span className="text-orange-300">"Swiggy Clone"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">description</span>:{" "}
                                        <span className="text-orange-300">
                                            "Food ordering app built with React + Redux."
                                        </span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">link</span>:{" "}
                                        <span className="text-orange-300">"</span>
                                        <a
                                            href="https://namaste-react-wheat-xi.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-300 hover:underline"
                                        >
                                            https://namaste-react-wheat-xi.vercel.app/
                                        </a>
                                        <span className="text-orange-300">"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">tags</span>: [
                                        <span className="text-orange-300">"React"</span>,{" "}
                                        <span className="text-orange-300">"Redux"</span>,{" "}
                                        <span className="text-orange-300">"Tailwind"</span>
                                        ],
                                    </p>
                                </div>

                                <p>{"  },"}</p>
                            </div>

                            {/* YouTube */}
                            <div>
                                <p>{"  {"}</p>

                                <div className="ml-6">
                                    <p>
                                        <span className="text-blue-400">id</span>:{" "}
                                        <span className="text-orange-300">1</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">name</span>:{" "}
                                        <span className="text-orange-300">"YouTube Clone"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">description</span>:{" "}
                                        <span className="text-orange-300">
                                            "Video streaming UI with API integration."
                                        </span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">link</span>:{" "}
                                        <span className="text-orange-300">"</span>
                                        <a
                                            href="https://namaste-youtube-psi.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-300 hover:underline"
                                        >
                                            https://namaste-youtube-psi.vercel.app/
                                        </a>
                                        <span className="text-orange-300">"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">tags</span>: [
                                        <span className="text-orange-300">"React"</span>,{" "}
                                        <span className="text-orange-300">"API"</span>,{" "}
                                        <span className="text-orange-300">"Frontend"</span>
                                        ],
                                    </p>
                                </div>

                                <p>{"  },"}</p>
                            </div>

                            {/* Netflix */}
                            <div>
                                <p>{"  {"}</p>

                                <div className="ml-6">
                                    <p>
                                        <span className="text-blue-400">id</span>:{" "}
                                        <span className="text-orange-300">2</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">name</span>:{" "}
                                        <span className="text-orange-300">"Netflix Clone"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">description</span>:{" "}
                                        <span className="text-orange-300">
                                            "Netflix clone built with React + Redux and Firebase auth."
                                        </span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">link</span>:{" "}
                                        <span className="text-orange-300">"</span>
                                        <a
                                            href="https://netflixgpt2026.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-300 hover:underline"
                                        >
                                            https://netflixgpt2026.vercel.app/
                                        </a>
                                        <span className="text-orange-400">"</span>,
                                    </p>

                                    <p>
                                        <span className="text-blue-400">tags</span>: [
                                        <span className="text-orange-300">"React"</span>,{" "}
                                        <span className="text-orange-300">"Redux"</span>,{" "}
                                        <span className="text-orange-300">"Firebase"</span>,{" "}
                                        <span className="text-orange-300">"Tailwind"</span>
                                        ],
                                    </p>
                                </div>

                                <p>{"  }"}</p>
                            </div>

                        </div>

                        <p>];</p>

                        <p className="text-green-400">
                             // TODO: Build AI-powered products 🚀
                        </p>

                    </div>
                )}

                {activeFile === "about" && (
                    <div className="p-6 font-mono text-sm text-gray-300 leading-7 whitespace-pre-wrap">

                        <p className="text-xl font-bold text-blue-300 mb-4">
                            # Hi, I'm Vijay Durgasi 👋
                        </p>

                        <p>
                            I am an AI + Full Stack Developer based in Hyderabad, India.
                            I have a deep passion for building scalable software systems and exploring AI technologies.
                        </p>

                        <br />

                        <p className="text-lg text-blue-300 font-semibold"> # What I Do</p>
                        <p>🔗 Build scalable full-stack applications</p>
                        <p>🤖 Explore and implement AI systems</p>
                        <p>💻 Develop modern React-based user interfaces</p>
                        <p>🛠 Design backend APIs with authentication</p>

                        <br />

                        <p className="text-lg text-blue-300 font-semibold"># 🤝 Collaborations & Opportunities</p>

                        <p>
                            For collaborations, freelance work, or tech discussions,
                            please reach out at:
                        </p>

                        <p>
                            📩{" "}
                            <a
                                href="mailto:vijaydurgasi2005@gmail.com"
                                className="text-blue-400 hover:underline"
                            >
                                vijaydurgasi2005@gmail.com
                            </a>
                        </p>

                        <p className="text-green-300">// Always building. Always learning. 🚀</p>

                    </div>
                )}

                {/* ================= DEFAULT FILES ================= */}
                {activeFile &&
                    activeFile !== "home" &&
                    activeFile !== "contact" &&
                    activeFile !== "projects" &&
                    files[activeFile] && (
                        <CodeBlock
                            language={files[activeFile].language}
                            code={files[activeFile].code}
                        />
                    )}

            </div>
        </div>
    )
}
export default Editor