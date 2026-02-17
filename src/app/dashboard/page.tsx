import GiftCard from '@/components/dashboard/gift-card';
import PageHeading from '@/components/layout/heading';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { CircleSlashIcon, GiftIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
	const giftCards = [
		{
			id: 'gift-card-1',
			amount: 100,
			createdAt: new Date(),
			expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
			isRedeemed: false,
		},
		{
			id: 'gift-card-2',
			amount: 50,
			createdAt: new Date(),
			expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 48),
			isRedeemed: true,
		},
	];
	return (
		<div>
			<PageHeading
				title="My Gift Cards"
				icon={<GiftIcon className="h-5 w-5 text-neutral-500" />}
				action={
					<Button
						size="sm"
						className="cursor-pointer"
						asChild
					>
						<Link href="dashboard/create">
							<PlusIcon className="h-4 w-4" />
							Create Gift Card
						</Link>
					</Button>
				}
			/>
			<div className="flex flex-col gap-2">
				{giftCards.length === 0 && (
					<Alert>
						<CircleSlashIcon />
						<AlertTitle>No gift cards found</AlertTitle>
						<AlertDescription>
							Once you create a gift card, it will appear here.
						</AlertDescription>
					</Alert>
				)}
				{giftCards.map((giftCard) => (
					<GiftCard
						key={giftCard.id}
						id={giftCard.id}
						amount={giftCard.amount}
						createdAt={giftCard.createdAt}
						expiresAt={giftCard.expiresAt}
						isRedeemed={giftCard.isRedeemed}
						isExpired={giftCard.expiresAt.getTime() < Date.now()}
					/>
				))}
			</div>
		</div>
	);
}
