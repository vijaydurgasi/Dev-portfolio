import Sidebar from "./Sidebar"
import Editor from "./Editor"

function VSCodeLayout() {
    return (
        <div className="flex h-screen w-screen bg-[#1e1e1e] text-white">
            <Sidebar />
            <Editor />
        </div>
    )
}

export default VSCodeLayout