<template>
	<div class="home">
		<core-view></core-view>
	</div>
</template>

<script>

export default {
	name: 'Home',
	components: {
		CoreView:()=>import('../components/core/CoreView.vue')
		},
};
</script>
