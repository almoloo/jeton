import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LayoutFooter() {
	return (
		<footer className="flex items-center justify-center">
			<Button
				variant="ghost"
				size="icon"
				asChild
			>
				<Link
					href="https://github.com/almoloo/jeton"
					target="_blank"
				>
					<GithubIcon className="h-4 w-4" />
				</Link>
			</Button>
		</footer>
	);
}
