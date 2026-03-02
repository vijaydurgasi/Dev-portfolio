import { useState, useEffect } from "react"
import Sidebar from "./Sidebar"
import Editor from "./Editor"
import TerminalPanel from "./TerminalPanel"

function VSCodeLayout() {
    const [openTabs, setOpenTabs] = useState(["home"])
    const [activeFile, setActiveFile] = useState("home")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [terminalHeight, setTerminalHeight] = useState(180)
    const [isResizing, setIsResizing] = useState(false)

    const startResizing = () => {
        setIsResizing(true)
    }

    const stopResizing = () => {
        setIsResizing(false)
    }

    const resize = (e) => {
        if (isResizing) {
            const newHeight = window.innerHeight - e.clientY
            if (newHeight > 100 && newHeight < 500) {
                setTerminalHeight(newHeight)
            }
        }
    }

    const openFile = (fileKey) => {
        if (!openTabs.includes(fileKey)) {
            setOpenTabs([...openTabs, fileKey])
        }
        setActiveFile(fileKey)
    }

    const closeTab = (fileKey) => {
        const filteredTabs = openTabs.filter((tab) => tab !== fileKey)
        setOpenTabs(filteredTabs)

        if (filteredTabs.length === 0) {
            setActiveFile(null)
        } else if (activeFile === fileKey) {
            setActiveFile(filteredTabs[filteredTabs.length - 1])
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", resize)
        window.addEventListener("mouseup", stopResizing)

        return () => {
            window.removeEventListener("mousemove", resize)
            window.removeEventListener("mouseup", stopResizing)
        }
    });
    console.log("Tabs", openTabs)

    return (
        <div className="flex flex-col h-screen w-screen bg-[#1e1e1e] text-white">

            {/* TOP AREA */}
            <div className="flex flex-1 overflow-hidden min-h-0">

                {/* Desktop Sidebar */}
                <div className="hidden md:block h-full">
                    <Sidebar
                        activeFile={activeFile}
                        openFile={openFile}
                    />
                </div>

                {/* Mobile Sidebar */}
                <div
                    className={`
          fixed md:hidden top-0 left-0 h-full z-40
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
                >
                    <Sidebar
                        activeFile={activeFile}
                        openFile={openFile}
                    />
                </div>

                {/* Overlay for Mobile */}
                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                {/* Editor */}
                <div className="flex-1 flex flex-col">
                    <Editor
                        openTabs={openTabs}
                        activeFile={activeFile}
                        setActiveFile={setActiveFile}
                        closeTab={closeTab}
                        toggleSidebar={() => setIsSidebarOpen(true)}
                        openFile={openFile}
                    />
                </div>

            </div>

            {/* BOTTOM TERMINAL */}
            <TerminalPanel
                height={terminalHeight}
                startResizing={startResizing}
            />

        </div>
    )
}

export default VSCodeLayout