'use client';

import { Connect } from '@onflow/react-sdk';
import { SlashIcon } from 'lucide-react';
import Link from 'next/link';

export default function LayoutHeader() {
	return (
		<header className="flex items-center justify-between">
			<Link
				href="/"
				className="font-black"
			>
				<div className="flex items-center gap-2">
					<h1 className="text-2xl">Jeton</h1>
					<SlashIcon
						className="h-3 w-3"
						strokeWidth={5}
					/>
				</div>
				<p className="text-neutral-500 text-lg">
					The gift that keeps on giving.
				</p>
			</Link>
			<Connect />
		</header>
	);
}
