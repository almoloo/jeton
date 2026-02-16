import Link from 'next/link';

interface GiftCardProps {
	id: string;
	amount: number;
	createdAt: Date;
	expiresAt: Date;
	isRedeemed: boolean;
	isExpired: boolean;
}

export default function GiftCard(props: GiftCardProps) {
	return (
		<Link
			href="#"
			className={
				props.isExpired || props.isRedeemed ? 'pointer-events-none' : ''
			}
		>
			<div className="relative border rounded-lg p-3 flex flex-col-reverse md:flex-row mds:grid mds:grid-cols-4 hover:bg-neutral-50 hover:border-neutral-300 transition-colors">
				{(props.isRedeemed || props.isExpired) && (
					<div className="absolute top-0 left-0 right-0 flex justify-end z-10">
						<div className="bg-rose-400 text-sm text-rose-50 rounded-bl-lg rounded-tr-lg shadow shadow-rose-300 px-2 py-1">
							{props.isRedeemed && 'Redeemed'}
							{props.isExpired && 'Expired'}
						</div>
					</div>
				)}
				<div className="mds:col-span-3 md:grow flex flex-col">
					<div>
						<small className="text-xs text-neutral-500">
							Created at
						</small>
						<p className="text-sm font-medium">
							{props.createdAt.toLocaleString()}
						</p>
					</div>
					<div>
						<small className="text-xs text-neutral-500">
							Expires at
						</small>
						<p className="text-sm font-medium">
							{props.expiresAt.toLocaleString()}
						</p>
					</div>
				</div>
				<div
					className={`mds:col-span-1 rounded-lg p-3 flex flex-col justify-center items-center min-w-[120px] shrink-0 ${props.isRedeemed || props.isExpired ? 'opacity-50 bg-neutral-400' : 'bg-radial from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-200'}`}
				>
					<strong className="text-white text-3xl font-black">
						{props.amount}
					</strong>
					<span className="text-xs font-medium text-neutral-50">
						FLOW
					</span>
				</div>
			</div>
		</Link>
	);
}
