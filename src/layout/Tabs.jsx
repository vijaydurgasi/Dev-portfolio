import { IoClose } from "react-icons/io5"

function Tabs({ openTabs, activeFile, setActiveFile, closeTab }) {
    const fileNames = {
        home: "Home.ts",
        about: "about.md",
        projects: "projects.json",
        package: "package.json",
        contact: "contact.css",
    }

    return (
        <div className="bg-[#2d2d2d] border-b border-gray-700 flex text-sm">
            {openTabs.map((tab) => (
                <div
                    key={tab}
                    onClick={() => setActiveFile(tab)}
                    className={`flex items-center gap-2 px-4 py-2 cursor-pointer border-r border-gray-700
            ${activeFile === tab
                            ? "bg-[#1e1e1e] text-blue-400"
                            : "bg-[#2d2d2d] hover:bg-[#37373d]"
                        }`}
                >
                    <span>{fileNames[tab]}</span>
                    <IoClose
                        onClick={(e) => {
                            e.stopPropagation()
                            closeTab(tab)
                        }}
                        className="text-gray-400 hover:text-red-400"
                    />
                </div>
            ))}
        </div>
    )
}

export default Tabs