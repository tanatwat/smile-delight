<template>
<div class="slider-vue">
	<slick ref="slick" :options="slickOptions">
		<a :href="link" v-for="(link, index) in $root.banners">
			<img :src="'/img/banner/banner_' + (index + 1) + '.jpg'" alt="">
		</a>
	</slick>
</div>
</template>

<script>
import Slick from 'vue-slick';
export default {
	components: {
		Slick
	},
	props: ['auto', 'fading', 'bannerQty'],
	data() {
		return {
			slickOptions: {
				slidesToShow: 1,
				dots: true,
				infinite: true,
				autoplay: this.auto,
				autoplaySpeed: 2000,
				fade: this.fading,
				responsive: [
					{
						breakpoint: 768,
						settings: {
							arrows: false,
							dots: false
						}
					}
				]
			},
		};
	},
	methods: {

	},
	created() {

	}
};
</script>
