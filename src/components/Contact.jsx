function Contact() {
    return (
        <div className="p-6 font-mono text-sm text-gray-300 leading-7 space-y-6">

            <p className="text-green-400">
        /* Let's build something together */
            </p>

            <div>
                <p>
                    <span className="text-yellow-400">.socialLinks</span> {"{"}
                </p>

                <div className="ml-6 space-y-2">

                    <p>
                        <span className="text-blue-400">email</span>:{" "}
                        <span className="text-orange-400">"</span>
                        <a
                            href="mailto:durgasivijay2005@gmail.com"
                            className="text-orange-300 hover:underline"
                        >
                            durgasivijay2005@gmail.com
                        </a>
                        <span className="text-orange-400">"</span>;
                    </p>

                    <p>
                        <span className="text-blue-400">github</span>: url(
                        <span className="text-orange-400">"</span>
                        <a
                            href="https://github.com/vijaydurgasi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-300 hover:underline"
                        >
                            github.com/vijaydurgasi
                        </a>
                        <span className="text-orange-400">"</span>
                        );
                    </p>

                    <p>
                        <span className="text-blue-400">linkedin</span>: url(
                        <span className="text-orange-400">"</span>
                        <a
                            href="https://www.linkedin.com/in/vijaydurgasi/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-300 hover:underline"
                        >
                            linkedin.com/in/vijaydurgasi
                        </a>
                        <span className="text-orange-400">"</span>
                        );
                    </p>

                </div>

                <p>{"}"}</p>
            </div>

            <div>
                <p>
                    <span className="text-yellow-400">#location</span> {"{"}
                </p>

                <div className="ml-6 space-y-1">
                    <p>
                        city: <span className="text-orange-400">"Hyderabad"</span>;
                    </p>
                    <p>
                        country: <span className="text-orange-400">"India"</span>;
                    </p>
                </div>

                <p>{"}"}</p>
            </div>

            <p className="text-green-400">
        // Open to collaborations and freelance work.
            </p>

        </div>
    )
}

export default Contact