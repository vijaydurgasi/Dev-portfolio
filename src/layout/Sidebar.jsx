import fileTree from "../data/fileTree"
import FileTree from "../components/FileTree"

function Sidebar({ openFile, activeFile }) {
    return (
        <div className="w-60 h-full bg-[#252526] border-r border-gray-700 p-2 overflow-auto">
            <h2 className="text-gray-400 text-xs mb-2 uppercase tracking-wide">
                Explorer
            </h2>

            {fileTree.map((node, index) => (
                <FileTree
                    key={index}
                    node={node}
                    openFile={openFile}
                    activeFile={activeFile}
                />
            ))}
        </div>
    )
}

export default Sidebar