const fileTree = [
    {
        type: "folder",
        name: "Developer's Portfolio",
        children: [
            {
                type: "folder",
                name: "src",
                children: [
                    {
                        type: "folder",
                        name: "components",
                        children: [
                            { type: "file", name: "Home.tsx", key: "home" },
                        ],
                    },
                    {
                        type: "folder",
                        name: "pages",
                        children: [
                            { type: "file", name: "About.md", key: "about" },
                        ],
                    },
                    {
                        type: "folder",
                        name: "data",
                        children: [
                            { type: "file", name: "projects.json", key: "projects" },
                        ],
                    },
                    {
                        type: "folder",
                        name: "styles",
                        children: [
                            { type: "file", name: "contact.css", key: "contact" },
                        ],
                    },
                    { type: "file", name: "README.md", key: "readme" },
                    { type: "file", name: "package.json", key: "package" },
                ],
            },
        ],
    },
]

export default fileTree