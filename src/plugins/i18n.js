import Vue from 'vue'
import Vue18n from 'vue-i18n'
import Cookie from 'js-cookie'

Vue.use(Vue18n);

const i18n = new Vue18n({
    locale: Cookie.get('lang') || 'en-US',
    messages: {
        'en-US': require('../locale/en').default,
        'zh-CN': require('../locale/zh').default,
		'zh_TW':require('../locale/tw').default,
        'ja_JP': require('../locale/ja').default,
		'ru_RU': require('../locale/ru').default,
		'ko-KR': require('../locale/ko').default,
		'de-DE': require('../locale/de').default,
		'fr-FR': require('../locale/fr').default,
		'ar-AR': require('../locale/ar').default,
		'th-TH': require('../locale/th').default,
		'vi-VN': require('../locale/vi').default,
		'id-ID': require('../locale/id').default,
    }
})

export default i18n;
