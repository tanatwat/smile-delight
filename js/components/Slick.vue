<template>
<div class="slider-vue">
	<slick ref="slick" :options="slickOptions">
		<a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
		<a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
		<a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
		<a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
	</slick>
</div>
</template>

<script>
import Slick from 'vue-slick';
export default {
	components: {
		Slick
	},
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
				dots: true,
			},
		};
	},
	methods: {

	},
	created() {

	}
};
</script>
