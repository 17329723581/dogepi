<template>
    <div class="presale bg">
        <div class="po-s"></div>
        <div class="apo">
            <!--<canvas id="presale_canvas"></canvas>-->
            <div class="bg-moon"></div>
            <div class="header-background">
                <!-- 导航 -->
                <div class="section__hero section__hero-s wf-section">
                    <div class="container-1440">
                        <header-cmp></header-cmp>
                    </div>
                </div>
            </div>
            <div class="header">



<a-menu mode="inline" class="whiteBookMenuChoose" >
                        <a-menu-item style="">菜单项</a-menu-item>
                        <a-sub-menu key="1" title="子菜单">
                            <a-menu-item>子菜单项</a-menu-item>
                        </a-sub-menu>
                        <a-menu-item>菜单项</a-menu-item>
                        <a-sub-menu key="2" title="子菜单">
                            <a-menu-item>子菜单项</a-menu-item>
                        </a-sub-menu>

                    </a-menu>

                <!-- 白皮书区域 -->
                
            </div>
            <!-- <footerCmp class="p-top"></footerCmp> -->
        </div>
    </div>
</template>

<script>
import headerCmp from "../home/components/headerCmp.vue";
import footerCmp from "../home/footer/footerCmp.vue";
export default {
    data() {
        return {
            whiteBook: [
                {
                    title: "1. 序幕",
                    status:false,
                    data: [{
                        title: "1. 序幕",
                        text: [
                            "The BORA 1.0, at the time of the formation of the project, was Layer2’s private blockchain based on Ethereum. By nature, the private chain has the benefits of ",
                            "BORA 1.0 was designed as a pri ",
                            "  Due to the reason as explained above, in the last three years, all of BORA’s products have been developed and upda"
                        ]
                    }]
                },
                {
                    title: "2. BORA 1.0 的限制",
                    status:true,
                    data: [{
                        title: "2.1. BORA 1.0 的限制",
                        text: [
                            " The BORA 1.0, at the time of the formation of the project, was Layer2’s private blockchain based on Ethereum. By nature, the private chain has the benefits of ",
                            " BORA 1.0 was designed as a pri",
                            " Due to the reason as explained above, in the last three years, all of BORA’s products have been developed and upda"
                        ]
                    },{
                        title: "2.2. BORA 1.0 的限制",
                        text: [
                            " The BORA 1.0, at the time of the formation of the project, was Layer2’s private blockchain based on Ethereum. By nature, the private chain has the benefits of ",
                            " BORA 1.0 was designed as a pri",
                            " Due to the reason as explained above, in the last three years, all of BORA’s products have been developed and upda"
                        ]
                    }]
                }
            ]
        };
    },
    props: {},
    computed: {},
    watch: {},
    components: {
        headerCmp,
        footerCmp,
    },
    created() { },
    mounted() { },
    methods: {},
};
</script>

<style scoped lang="less">
@import "../../styles/shiba-ui";
@import "./index";
</style>
