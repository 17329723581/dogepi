<template>
	<div class="section__footer wf-section">
            <div class="container-1440">
                <div class="footer-wrap">
                    <div class="h1">{{ this.$t("index_com_title") }}</div>
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
