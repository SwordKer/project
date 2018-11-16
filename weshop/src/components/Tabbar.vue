<template>
	<div class='tabbar'>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'tabbar',
		props:['value']
	}
</script>

<style lang='scss' scoped>
	.tabbar {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-top: 1px solid #eee;
		padding-top: 5px;
		background-color: #fff;
	}

</style>