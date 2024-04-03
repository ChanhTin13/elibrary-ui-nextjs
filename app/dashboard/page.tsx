'use client';
import React from 'react';
import Link from 'next/link';

export default function HomePage() {
    return (
        <> 
            <Link href={'/dashboard/statistic'}> click</Link>
        </>
    );
}
