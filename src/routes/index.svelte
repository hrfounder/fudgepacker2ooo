<script>
	import { activeUser, loading } from 'src/utils/stores';
	async function login() {
		document.getElementById('ual-button').click();
	}
	async function logout() {
		window.logOut();
	}
</script>

<h1>fudgepacker2ooo</h1>
{#if !$loading}
	{#if $activeUser.initialLoad}
		<button on:click={login}>Login</button>
	{:else}
		<button on:click={logout}>Log out</button>
		<h3>Welcome {$activeUser.accountName}</h3>
	{/if}
{/if}
