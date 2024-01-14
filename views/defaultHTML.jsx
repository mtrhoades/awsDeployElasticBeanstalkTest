const React = require('react');

function defaultHTML (html) {
    return (
        <html>
            <head>
            <title>{html.title || 'test'}</title>
            <link href="/styles.css" rel="stylesheet"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = defaultHTML;