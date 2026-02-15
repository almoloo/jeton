'use client';

import { FlowProvider } from '@onflow/react-sdk';
import { ReactNode } from 'react';
import flowJSON from '../../flow.json';
import { walletConnectProjectId } from '@/lib/constants';

interface FlowProviderWrapperProps {
	children: ReactNode;
}

export function FlowProviderWrapper({ children }: FlowProviderWrapperProps) {
	return (
		<FlowProvider
			config={{
				// Testnet configuration
				accessNodeUrl: 'https://rest-testnet.onflow.org',
				discoveryWallet:
					'https://fcl-discovery.onflow.org/testnet/authn',
				discoveryAuthnEndpoint:
					'https://fcl-discovery.onflow.org/api/testnet/authn',
				flowNetwork: 'testnet',

				// App metadata
				appDetailTitle: 'Flow React SDK Starter',
				appDetailUrl:
					typeof window !== 'undefined' ? window.location.origin : '',
				appDetailIcon:
					'https://avatars.githubusercontent.com/u/62387156?v=4',
				appDetailDescription:
					'A Next.js starter template for Flow blockchain applications',

				// Optional configuration
				computeLimit: 1000,
				// Example WalletConnect project ID
				walletconnectProjectId: walletConnectProjectId,
			}}
			flowJson={flowJSON}
			colorMode="dark"
		>
			{children}
		</FlowProvider>
	);
}
