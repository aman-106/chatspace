export function generateTemplate(style, script) {
    return (
        `
            <html>
            <head>
                <title>Socket.IO chat</title>
            </head>
            ${style}
            <body>
                <div id='root'></div>
                ${script}
            </body>
            </html>
        `
    )
}

