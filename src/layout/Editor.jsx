import Tabs from "./Tabs"
import CodeBlock from "../components/CodeBlock"
import { HiMenu } from "react-icons/hi"

import Home from "../components/Home"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Readme from "../components/Readme"
import Package from "../components/Package"

function Editor({
    openTabs,
    activeFile,
    setActiveFile,
    closeTab,
    toggleSidebar,
    openFile
}) {

    // Only keep pure code-based files here
    const files = {
        package: {
            language: "json",
            code: `{
  "name": "vijay-ai-dev",
  "version": "2.0.0",
  "description": "AI + Full Stack Engineer",
  "skills": ["React", "Node", "MongoDB", "AI"],
  "mindset": "Builder"
}`
        }
    }

    // Map file keys to components
    const fileComponents = {
        home: <Home openFile={openFile} />,
        about: <About />,
        projects: <Projects />,
        contact: <Contact />,
        readme: <Readme />,
        package: <Package />
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

                {/* Welcome Screen */}
                {!activeFile && (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center px-4">
                            <h2 className="text-2xl mb-2">Welcome 👋</h2>
                            <p className="text-sm">
                                Select a file from the explorer to begin.
                            </p>
                        </div>
                    </div>
                )}

                {/* Render Custom Components */}
                {activeFile && fileComponents[activeFile]}

                {/* Render Code Files (Fallback) */}
                {activeFile &&
                    !fileComponents[activeFile] &&
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