import Link from 'next/link';

interface GiftCardProps {
	id: string;
	amount: number;
	createdAt: Date;
	expiresAt: Date;
	isRedeemed: boolean;
}

export default function GiftCard(props: GiftCardProps) {
	return (
		<Link href="#">
			<div className="border">
				<h1>gift card</h1>
				<p>amount: {props.amount}</p>
				<p>created at: {props.createdAt.toLocaleString()}</p>
				<p>expires at: {props.expiresAt.toLocaleString()}</p>
				<p>is redeemed: {props.isRedeemed ? 'yes' : 'no'}</p>
			</div>
		</Link>
	);
}
