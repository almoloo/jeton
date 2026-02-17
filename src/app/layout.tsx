import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { FlowProviderWrapper } from '@/components/flow-provider-wrapper';
import LayoutHeader from '@/components/layout/header';
import LayoutFooter from '@/components/layout/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Flow React SDK Starter',
	description:
		'A Next.js starter template for Flow blockchain applications using @onflow/react-sdk',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 min-h-screen p-5`}
			>
				<FlowProviderWrapper>
					<div className="xl:col-start-2 xl:col-end-5 2xl:col-start-3 2xl:col-end-5 lg:col-start-2 lg:col-end-4 flex flex-col gap-5">
						<LayoutHeader />
						<main className="flex flex-col bg-slate-100 rounded-2xl p-5">
							{children}
						</main>
						<LayoutFooter />
					</div>
				</FlowProviderWrapper>
			</body>
		</html>
	);
}
