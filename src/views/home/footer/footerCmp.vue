<template>
	<div class="section__footer wf-section">
            <div class="container-1440">
                <div class="footer-wrap">
                    <p class="p footer">{{this.$t('index_footer_text1')}}<br><br>{{this.$t('index_footer_text2')}}</p>
                    <div class="footer-country-link">{{this.$t('index_footer_link')}}</div>
                    <div class="footer-soc-wrap">
                        <a data-w-id="a5635a4e-89b7-9198-04ba-a93660281b0e" :href="url[1]" target="_blank" class="soc-link w-inline-block"><img src="@/assets/ico-tel.svg" loading="lazy" alt="" class="soc-link--img">
                            <div>Telegram<br></div>
                        </a>
                        <a :href="url[0]" target="_blank" class="soc-link w-inline-block"><img src="@/assets/ico-tw.svg" loading="lazy" alt="" class="soc-link--img">
                            <div>Twitter</div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container-1440">
                    <div class="footer-bottom-wrap">
                        <a href="https://blog.shibaswap.com/" target="_blank" class="footer--link">{{this.$t('footer_link1')}}</a>
                        <a href="https://etherscan.io/token/0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE" target="_blank" class="footer--link">{{this.$t('footer_link2')}}</a>
                        <a href="https://coinmarketcap.com/en/currencies/shiba-inu/" target="_blank" class="footer--link">{{this.$t('footer_link3')}}</a>
                        <a href="https://www.coingecko.com/en/coins/shiba-inu" target="_blank" class="footer--link">{{this.$t('footer_link4')}}</a>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
	export default {
		data() {
			return {
				buttext:this.$t('Community')['buttext_url'],
				url:[
					this.$t('footer_twitter_url'),
					this.$t('footer_telegram_url'),
					this.$t('footer_discord_url'),
					this.$t('footer_reddit_url'),
					this.$t('footer_github_url'),
					this.$t('footer_medium_url'),
					this.$t('footer_copy_url')
				]
			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {},
		created() {},
		mounted() {},
		methods: {
			Jump(e) {
				window.open(e)
			},
		},
	};
</script>

<style scoped lang="less">
	@import "../../../styles/shiba-ui";
	p{
       max-width: 550px;
       font-family: Khula, sans-serif;
       color: #bbbbbe;
       font-size: 18px;
       line-height: 32px;
   }
   .art_p{
       max-width: 1440px;
       font-family: Khula, sans-serif;
       color: #bbbbbe;
       font-size: 18px;
       line-height: 32px;
   }
	
</style>
