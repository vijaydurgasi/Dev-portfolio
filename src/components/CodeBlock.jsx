import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

function CodeBlock({ language, code }) {
    return (
        <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
                background: "#1e1e1e",
                margin: 0,
                padding: "20px",
            }}
        >
            {code}
        </SyntaxHighlighter>
    )
}

export default CodeBlock