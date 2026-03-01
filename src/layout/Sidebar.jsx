function Sidebar() {
    return (
        <div className="w-60 bg-[#252526] border-r border-gray-700 p-4">
            <h2 className="text-gray-400 text-sm mb-4">EXPLORER</h2>

            <div className="text-sm space-y-2">
                <p>📄 home.ts</p>
                <p>📄 about.md</p>
                <p>📦 projects.json</p>
                <p>⚙ package.json</p>
                <p>🎨 contact.css</p>
            </div>
        </div>
    )
}

export default Sidebar