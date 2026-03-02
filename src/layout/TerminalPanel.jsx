import { useState } from "react"

function TerminalPanel({ height, startResizing }) {
    const [activeTab, setActiveTab] = useState("terminal")

    const tabs = ["terminal", "output", "debug", "problems"]

    return (

        <div
            style={{ height: `${height}px` }}
            className="bg-[#1e1e1e] border-t border-gray-700 flex flex-col"
        >
            {/* Drag Handle */}
            <div
                onMouseDown={startResizing}
                className="h-1 bg-gray-600 cursor-row-resize hover:bg-blue-500"
            />
            <div className="h-48 bg-[#1e1e1e] border-t border-gray-700 flex flex-col">

                {/* Tab Bar */}
                <div className="flex text-xs border-b border-gray-700 bg-[#252526]">
                    {tabs.map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 cursor-pointer uppercase tracking-wide
                            ${activeTab === tab
                                    ? "bg-[#1e1e1e] text-white"
                                    : "text-gray-400 hover:bg-[#2a2d2e]"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* Terminal Content */}
                <div className="flex-1 p-3 text-xs font-mono text-gray-300 overflow-auto">
                    {activeTab === "terminal" && (
                        <>
                            <p>&gt; npm run dev</p>
                            <p>Starting development server...</p>
                            <p>Compiled successfully!</p>
                            <p>You can now view Dev-portfolio in the browser.</p>
                            <p className="text-green-400">
                                Local: http://localhost:5173/
                            </p>
                        </>
                    )}

                    {activeTab === "output" && <p>No output logs.</p>}
                    {activeTab === "debug" && <p>No debug session running.</p>}
                    {activeTab === "problems" && <p>No problems detected.</p>}
                </div>

            </div>
        </div>
    )
}

export default TerminalPanel