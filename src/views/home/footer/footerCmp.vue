<template>
	<div>
		<div class="section__footer wf-section">
            <div class="container-1440">
                <div class="footer-wrap">
                    <div class="h1">DogePi</div>
					<div class="text">{{$t('footerText')}}</div>
                    <div class="footer-soc-wrap">
						<a v-for="(item, index) in url" :key="index" :href="item.link" target="_blank" class="soc-link w-inline-block">
							<img :src="item.picture" loading="lazy" alt="" class="soc-link--img">
							<div>{{item.name}}<br></div>
						</a>
                    </div>
                </div>
            </div>
        </div>
		<div class="footer">{{$t('footer')}}</div>
	</div>
</template>

<script>
	// axios
	import axios from "axios";
	export default {
		data() {
			return {
				buttext:this.$t('Community')['buttext_url'],
				// url:[
				// 	this.$t('footer_twitter_url'),
				// 	this.$t('footer_telegram_url'),
				// 	this.$t('footer_discord_url'),
				// 	this.$t('footer_reddit_url'),
				// 	this.$t('footer_github_url'),
				// 	this.$t('footer_medium_url'),
				// 	this.$t('footer_copy_url')
				// ]
				url:[],
			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {
			this.getContactBottomPartners();
		},
		mounted() {},
		methods: {
			Jump(e) {
				window.open(e)
			},
			// 获取底部友情链接
			getContactBottomPartners(){
				axios.post('https://admintest.dogepi.net/api/getContactBottomPartners').then((e)=>{
					this.url = e.data.data;
				})
			}
		},
	};
</script>

<style scoped lang="less">
	@import "../../../styles/shiba-ui";
    @import "./footerCmp";
	p{
       max-width: 550px;
       font-size: 18px;
       line-height: 32px;
   }
   .art_p{
       max-width: 1440px;
       font-size: 18px;
       line-height: 32px;
   }
	
</style>
