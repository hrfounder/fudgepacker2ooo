<script>
	import { WAX_BASE_ENDPOINT_HOST, WAX_CHAIN_ID } from '/src/utils/config.js';
	import { activeUser } from '/src/utils/stores.js';

	import { UALJs } from 'ual-plainjs-renderer';
	import { Anchor } from 'ual-anchor';
	import { Wax } from '@eosdacio/ual-wax';
	import { onMount } from 'svelte';
	import { loading } from 'src/utils/stores';

	let ual;
	const myCallback = (arrayOfUsers) => {
		$activeUser = arrayOfUsers[0];
		$loading = false;
	};

	console.log(`	`);
	const myChain = {
		chainId: WAX_CHAIN_ID,
		name: 'WAX',
		rpcEndpoints: [
			{
				protocol: 'https',
				host: WAX_BASE_ENDPOINT_HOST,
				port: 443
			}
		]
	};

	const myAppName = 'i dont need no name';

	const anchor = new Anchor([myChain], { appName: myAppName });
	const wax = new Wax([myChain]);
	onMount(() => {
		const style = `
      #ual-button {
	display:none
    `;
		const myAppRoot = {
			containerElement: document.getElementById('my-ual-app'),
			buttonStyleOverride: style
		};
		let auths = [wax, anchor];

		ual = new UALJs(myCallback, [myChain], myAppName, auths, myAppRoot);
		try {
			ual.init();
		} catch (error) {
			console.log('UAL ERROR');
		}
		window.logOut = () => {
			$activeUser = { initialLoad: true };
			ual.logoutUser();
		};

		setTimeout(() => {
			if (!$activeUser.accountName) {
				$loading = false;
			}
		}, 2000);
	});
</script>

<slot />
