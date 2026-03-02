import {VscJson, VscFileCode, VscMarkdown, VscFile} from "react-icons/vsc"
import { SiCss3 } from "react-icons/si"
import { useState } from "react"
import { FaChevronRight, FaChevronDown, FaFolder, FaFolderOpen } from "react-icons/fa"


function FileTree({ node, openFile, activeFile }) {
    const [isOpen, setIsOpen] = useState(true)

    if (node.type === "folder") {
        return (
            <div className="ml-2">
                <div
                    className="flex items-center gap-2 cursor-pointer text-gray-300 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
                    {isOpen ? <FaFolderOpen /> : <FaFolder />}
                    <span>{node.name}</span>
                </div>

                {isOpen &&
                    node.children.map((child, index) => (
                        <FileTree
                            key={index}
                            node={child}
                            openFile={openFile}
                            activeFile={activeFile}
                        />
                    ))}
            </div>
        )
    };

    const getFileIcon = (fileName) => {
        const extension = fileName.split(".").pop()

        switch (extension) {
            case "tsx":
            case "ts":
            case "js":
            case "jsx":
                return <VscFileCode className="text-blue-400" />

            case "json":
                return <VscJson className="text-yellow-400" />

            case "md":
                return <VscMarkdown className="text-purple-400" />

            case "css":
                return <SiCss3 className="text-blue-500" />

            default:
                return <VscFile className="text-gray-400" />
        }
    }

    return (
        <div
            onClick={() => openFile(node.key)}
            className={`ml-6 flex items-center gap-2 cursor-pointer text-sm py-1 ${activeFile === node.key ? "text-blue-400" : "text-gray-400 hover:text-white"
                }`}
        >
            {getFileIcon(node.name)}
            <span>{node.name}</span>
        </div>
    )
}

export default FileTree