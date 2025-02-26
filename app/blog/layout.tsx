import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Portfolio',
    description: 'Read my latest thoughts, tutorials, and insights',
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='pt-0'>
            {children}
        </main>
    );
}
