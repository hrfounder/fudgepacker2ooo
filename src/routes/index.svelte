<script>
	import { activeUser, loading } from 'src/utils/stores';

	async function login() {
		document.getElementById('ual-button').click();
	}

	async function logout() {
		window.logOut();
	}
	async function handleTransaction() {
		let actions = [
			{
				account: 'dothetokenss',
				name: 'transfer',
				authorization: [
					{
						actor: $activeUser.accountName,
						permission: $activeUser.requestPermission
					}
				],
				data: {
					from: $activeUser.accountName,
					to: 'jokesonyouyo',
					quantity: '1.000 SHELL',
					memo: '123123123'
				}
			}
		];

		let transaction = { actions };
		console.log(transaction);
		try {
			let res = await $activeUser.signTransaction(transaction, {
				broadcast: true,
				blocksBehind: 3,
				expireSeconds: 60
			});

			setTimeout(() => {
				console.log('probable success', res);
			});
		} catch (err) {
			console.error(err);
		}
	}
</script>

<h1>fudgepacker2ooo</h1>
{#if !$loading}
	{#if $activeUser.initialLoad}
		<button on:click={login}>Login</button>
	{:else}
		<!-- IF USER IS LOGGED IN AND READY -->
		<button on:click={logout}>Log out</button>
		<h3>Welcome {$activeUser.accountName}</h3>

		<button on:click={handleTransaction}>TEST TRANSACTION</button>
	{/if}
{/if}
