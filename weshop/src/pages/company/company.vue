<template>
	<div class="about-wrap">
		<div class="logo-sh">
			<img src="@/assets/logo.png">
			<div class="logo-right">
				<div>广西牛皮软件有限公司</div>
				<div class="about-comp">关于</div>
			</div>
		</div>
		<div class="a-location">
			<div><i class="el-icon-location-outline"></i>
			广西南宁市西乡塘万秀牛皮村</div>
			<div>
				<i class="el-icon-arrow-right"></i>
			</div>
		</div>
		<contacts></contacts>
		 <transition name="slide-fade" class="fadeView">
            <div v-if="show">
                <image-view :imgArr="imgArr" 
                            :showImageView="true"
                            :imageIndex="imageIndex"
                            v-on:hideImage="hideImageView">
                </image-view>
            </div>
        </transition>
		<div class="car-show">
			<h2>展厅</h2>
			<div class="car-show-imgs my-gallery">
				<figure>
            		<div class="img-dv"><a href="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg" data-size="1920x1080"><img src="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg"></a></div>
        		</figure>
        		<figure>
            		<div class="img-dv"><a href="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg" data-size="1920x1080"><img src="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg"></a></div>
        		</figure>
        		<figure>
            		<div class="img-dv"><a href="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg" data-size="1920x1080"><img src="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg"></a></div>
        		</figure>
        		<figure>
            		<div class="img-dv"><a href="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg" data-size="1920x1080"><img src="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg"></a></div>
        		</figure>
        		<figure>
            		<div class="img-dv"><a href="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg" data-size="1920x1080"><img src="http://localhost/u=3247762451,3514512840&fm=200&gp=0.jpg"></a></div>
        		</figure>
			</div>
		</div>

		<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
            <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
            </div>
            <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                    <div class="pswp__counter"></div>
                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                    <!--<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>-->
                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                    <div class="pswp__preloader">
                        <div class="pswp__preloader__icn">
                            <div class="pswp__preloader__cut">
                                <div class="pswp__preloader__donut"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                    <div class="pswp__share-tooltip"></div>
                </div>
                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
                </button>
                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
                </button>
                <div class="pswp__caption">
                    <div class="pswp__caption__center"></div>
                </div>
            </div>
        </div>
    </div>
	</div>
</template>

<script>
	import contacts from'@/components/Contacts'
	import imageView from 'vue-imageview'

	import {initPhotoSwipeFromDOM} from '@/plugins/initphotowwipefromdom.js'
	export default {
		name:'company',
		data(){
			return {
				imgArr:['/static/img/14882888_192654240000_2.0ca620b.jpg','/static/img/14882888_192654240000_2.0ca620b.jpg','/static/img/14882888_192654240000_2.0ca620b.jpg','/static/img/14882888_192654240000_2.0ca620b.jpg','/static/img/14882888_192654240000_2.0ca620b.jpg'],
				show: false,
		        // 从哪一张图片开始
		        imageIndex: 0
			}
		},
		mounted(){
			 initPhotoSwipeFromDOM('.my-gallery');
		},
		methods:{
			showImgView () {
	        	this.show = true
	      	},
	      	hideImageView () {
	        	this.show = false
	      	},
	      	selectImg (index) {
		        this.show = true
		        this.imageIndex = index
	      	}
		},
		components:{
			contacts,
			'image-view': imageView
		}
	}
</script>

<style lang="scss">
	@import '../../plugins/imgspreview/photoswipe.css';
	@import '../../plugins/imgspreview/default-skin/default-skin.css';
	.about-wrap {
		background-color: #F2F2F2;
		font-family: 'Microsoft Yahei';
		padding-bottom: 60px;
	}
	.logo-sh {
		display: flex;
		background-color: #fff;
		img {
			width: 80px;
			height: 80px;
		}
		.logo-right {
			width: 75%;
			padding: 8px 0;
			&>div:nth-child(1) {
				font-size: 20px;
			}
			.about-comp {
				margin-top: 5px;
				color: #444;
			}
		}
	}
	.a-location {
		color: #444;
		padding: 5px;
		background-color: #fff;
		margin-top: 8px;
		display: flex;
		justify-content:space-between;
	}
	.car-show{
		background-color: #fff;
		padding: 5px;
		margin-top: 8px;
		h2 {
			font-size: 16px;
			border-left: 2px solid #FF4500;
			padding-left: 5px ;
			font-family:'Avenir' !important;
		}
		.car-show-imgs {
			display: flex;
			flex-wrap:wrap;
			margin-top: 8px;
			figure {
				width: 24%;
				height: 80px;
				margin: 0 3px 5px 0;
				img {
					width: 100%;
					height: 80px;
				}
			}
		}
	}

</style>