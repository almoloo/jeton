interface PageHeadingProps {
	title: string;
	icon?: React.ReactNode;
	action?: React.ReactNode;
}

export default function PageHeading({ title, icon, action }: PageHeadingProps) {
	return (
		<div className="flex items-center justify-between mb-5">
			<h1 className="flex items-center gap-2 text-lg font-bold">
				{icon}
				<span>{title}</span>
			</h1>
			{action && <>{action}</>}
		</div>
	);
}
