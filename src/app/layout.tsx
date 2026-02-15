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
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-1 xl:grid-cols-6 min-h-screen p-5`}
			>
				<FlowProviderWrapper>
					<main className="xl:col-start-3 xl:col-end-5 flex flex-col gap-5">
						<LayoutHeader />
						<div className="grow flex flex-col">{children}</div>
						<LayoutFooter />
					</main>
				</FlowProviderWrapper>
			</body>
		</html>
	);
}
