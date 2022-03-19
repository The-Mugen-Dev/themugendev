import * as React from 'react';
import Link from "gatsby-link";

export default function IndexPage() {
    return (
        <main>
            <Link to="/about">About</Link>
            <Link to="/broken-link">broken</Link>
            Gatsby Site 2
        </main>
    );
}