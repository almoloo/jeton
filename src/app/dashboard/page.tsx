import GiftCard from '@/components/dashboard/gift-card';

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
			<h1>dashboard</h1>
			{giftCards.map((giftCard) => (
				<GiftCard
					key={giftCard.id}
					id={giftCard.id}
					amount={giftCard.amount}
					createdAt={giftCard.createdAt}
					expiresAt={giftCard.expiresAt}
					isRedeemed={giftCard.isRedeemed}
				/>
			))}
		</div>
	);
}
