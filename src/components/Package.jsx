function Package() {

    const packageData = {
        name: "vijay-dev-portfolio",
        version: "1.0.0",
        private: true,
        description: "VS Code inspired developer portfolio",
        author: "Vijay Durgasi",
        license: "MIT",
        scripts: {
            dev: "vite",
            build: "vite build",
            preview: "vite preview"
        },
        dependencies: {
            react: "^18.2.0",
            "react-dom": "^18.2.0",
            tailwindcss: "^3.x",
            "react-icons": "^4.x"
        }
    }

    return (
        <div className="p-6 font-mono text-sm text-gray-300 leading-6">

            <p>{"{"}</p>

            <div className="ml-6 space-y-1">

                <p>
                    <span className="text-blue-400">"name"</span>:{" "}
                    <span className="text-orange-400">
                        "{packageData.name}"
                    </span>,
                </p>

                <p>
                    <span className="text-blue-400">"version"</span>:{" "}
                    <span className="text-orange-400">
                        "{packageData.version}"
                    </span>,
                </p>

                <p>
                    <span className="text-blue-400">"private"</span>:{" "}
                    <span className="text-purple-400">
                        {packageData.private.toString()}
                    </span>,
                </p>

                <p>
                    <span className="text-blue-400">"description"</span>:{" "}
                    <span className="text-orange-400">
                        "{packageData.description}"
                    </span>,
                </p>

                <p>
                    <span className="text-blue-400">"author"</span>:{" "}
                    <span className="text-orange-400">
                        "{packageData.author}"
                    </span>,
                </p>

                <p>
                    <span className="text-blue-400">"license"</span>:{" "}
                    <span className="text-orange-400">
                        "{packageData.license}"
                    </span>,
                </p>

                {/* Scripts */}
                <p>
                    <span className="text-blue-400">"scripts"</span>: {"{"}
                </p>

                <div className="ml-6">
                    {Object.entries(packageData.scripts).map(([key, value], index, arr) => (
                        <p key={key}>
                            <span className="text-blue-400">"{key}"</span>:{" "}
                            <span className="text-orange-400">"{value}"</span>
                            {index !== arr.length - 1 && ","}
                        </p>
                    ))}
                </div>

                <p>{"},"}</p>

                {/* Dependencies */}
                <p>
                    <span className="text-blue-400">"dependencies"</span>: {"{"}
                </p>

                <div className="ml-6">
                    {Object.entries(packageData.dependencies).map(([key, value], index, arr) => (
                        <p key={key}>
                            <span className="text-blue-400">"{key}"</span>:{" "}
                            <span className="text-orange-400">"{value}"</span>
                            {index !== arr.length - 1 && ","}
                        </p>
                    ))}
                </div>

                <p>{"}"}</p>

            </div>

            <p>{"}"}</p>

        </div>
    )
}

export default Package