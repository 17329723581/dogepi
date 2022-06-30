<template>
  <div>
    <!--关于BDOGE和生态系统-->
    <div id="ecosystem" class="section__eco wf-section">
      <m-logo class="hero--art"></m-logo>
      <div class="section__eco-c section__top">
        <div class="container-1440">
          <!-- The Web 3.0 Ecosystem Built by DogePi -->
          <div class="eco-wrap">


            <div class="eco-left">
              <div class="h1">{{ this.$t("index_ecosystem_title") }}</div>
              <p class="p">
                {{ this.$t("index_ecosystem_text1") }}
              </p>
              <br />
              <p class="p">
                {{ this.$t("index_ecosystem_text2") }}
              </p>
              <!-- <img class="eco-right-img" src="@/assets/eco-car.png"> -->
            </div>


            <div class="eco-right pc" style="margin-top: 2.3vw;">
              <div class="eco-right-s eco-right-s-t">
                <div class="img">
                    <img src="@/assets/tuzi.svg" class="img-w">
                    <img src="@/assets/tuyzi-cai.svg" class="img-y">
                  </div>
                  <span class="text">{{this.$t('index_eco')[0]}}</span>
              </div>
              <div class="eco-right-s eco-right-s-c eco-right-s-t">
                <div class="img">
                    <img src="@/assets/gongyi.svg" class="img-w">
                    <img src="@/assets/gongyi-cai.svg" class="img-y">
                  </div>
                  <span class="text">{{this.$t('index_eco')[1]}}</span>
              </div>
              <div class="eco-right-s eco-right-s-t">
                <div class="img">
                    <img src="@/assets/suoding.svg" class="img-w">
                    <img src="@/assets/suoding-cai.svg" class="img-y">
                  </div>
                  <span class="text">{{this.$t('index_eco')[2]}}</span>
              </div>
              <!-- <img class="eco-right-img" src="@/assets/eco-car.png"> -->
            </div>
            <div class="eco-right mo" style="margin-top: 2.3vw;">
              <img class="eco-right-img-s" src="@/assets/eco-car.png">
              <div class="eco-right-car-s">
                <div class="img">
                    <img src="@/assets/tuzi.png" class="img-w">
                  </div>
                  <span class="text">{{this.$t('index_eco')[0]}}</span>
              </div>
              <div class="eco-right-car-s">
                <div class="img">
                    <img src="@/assets/gongyi.png" class="img-w">
                  </div>
                  <span class="text">{{this.$t('index_eco')[1]}}</span>
              </div>
              <div class="eco-right-car-s">
                <div class="img">
                    <img src="@/assets/suoding.png" class="img-w">
                  </div>
                  <span class="text">{{this.$t('index_eco')[2]}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--电脑端-轮播图-->
        <div id="ecosystem-map" class="section__eco pc">
          <span class="map-title">
            {{this.$t('index_friends')}}
          </span>
          <div class="map-text">
            <a class="map-a" v-for="(item, index) in friends" :key="index" target="_blank" :href="item.link">
              <img src="@/assets/h/binance-wuse.png" class="w">
              <img :src="item.picture" class="y">
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--移动端-轮播图-->
    <div id="ecosystem-map" class="section__eco mo" style=" background: #2C0058;">
          <span class="map-title">
            {{this.$t('index_friends')}}
          </span>
          <div class="map-text">
            <a class="map-a" v-for="(item, index) in friends" :key="index" target="_blank" :href="item.link">
              <img src="@/assets/h/binance-wuse.png" class="w">
              <img :src="item.picture" class="y">
            </a>
          </div>
    </div>
    <div id="ecosystem-car" class="section__eco">
      <div class="section__eco-c">
        <div class="container-1440">
          <div class="coin-grid section__coin wf-section">
            <div class="coin-box">
              <div class="coin-box-top">
                <div class="coin-img-wrap">
                  <car1 class="coin-box--coin"></car1>
                </div>
              </div>
              <div class="coin-box-content">
                <div class="coin-box-title-wrap">
                  <div class="h3 c-y">
                    <div class="fillet">
                      <div class="fillet-r"></div>
                    </div>
                    {{ this.$t("index_coin")[0]["title"] }}
                  </div>
                </div>
                <p class="p c-y">{{ this.$t("index_coin")[0]["text"] }}</p>
                <br />
                <p class="p c-y">{{ this.$t("index_coin")[0]["text1"] }}</p>
              </div>
              <div class="coin-box-like">
                <span></span>
              </div>
            </div>
            <div class="coin-box">
              <div class="coin-box-top">
                <div class="coin-img-wrap">
                  <car2 class="coin-box--coin"></car2>
                </div>
              </div>
              <div class="coin-box-content">
                <div class="coin-box-title-wrap">
                  <div class="h3 c-y">
                    <div class="fillet">
                      <div class="fillet-r"></div>
                    </div>
                    {{ this.$t("index_coin")[1]["title"] }}
                  </div>
                </div>
                <p class="p c-y">{{ this.$t("index_coin")[1]["text"] }}</p>
                <br />
                <p class="p c-y">{{ this.$t("index_coin")[1]["text1"] }}</p>
              </div>
              <div class="coin-box-like">
                <span></span>
              </div>
            </div>
            <div class="coin-box">
              <div class="coin-box-top">
                <div class="coin-img-wrap">
                  <car3 class="coin-box--coin"></car3>
                </div>
              </div>
              <div class="coin-box-content">
                <div class="coin-box-title-wrap">
                  <div class="h3">
                    <div class="fillet">
                      <div class="fillet-r"></div>
                    </div>
                    {{ this.$t("index_coin")[2]["title"] }}
                  </div>
                </div>
                <p class="p">{{ this.$t("index_coin")[2]["text"] }}</p>
                <br />
                <p class="p c-y">{{ this.$t("index_coin")[2]["text1"] }}</p>
              </div>
              <div class="coin-box-like">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!---->
    <div id="how-to-buy" class="section__htb wf-section" v-if="this.$route.name == 'Home'">
      <div class="buyBg">
        <div class="container-1440">
          <div class="htb-wrap">
            <!--如何购买BDOGE-->
            <div class="htb-hero">
              <div class="htb-left">
                <div class="h1">{{ this.$t("index_cta_title") }}</div>
                <p class="p">{{ this.$t("index_cta_text") }}</p>
                <div class="htb-btn-wrap">
                  <div class="cta-btn">
                    <a target="_blank" class="r-pad buy w-inline-block">
                      <div class="cta-btn__txt">
                        {{ this.$t("index_cta_btn1") }}
                      </div>
                      <div class="cta-btn__bg"></div>
                    </a>
                  </div>

                </div>
              </div>
              <div class="htb-right">
                <div class="base-circle-wrap">
                  <homeLogo class="htb-circle-1"></homeLogo>
                </div>
              </div>
            </div>
            <!--快速入门指南-->
            <div class="htb-sg-wrap" v-if="this.$route.name == 'Home'">
              <div class="h1">{{ this.$t("index_qsg_title") }}</div>
              <div class="qsg-wrap">
                <div class="qsg-line">
                  <div class="qsg-line-left">
                    <div class="qsg-number-wrap">
                      <div>1</div>
                    </div>
                    <div class="qsg-yellow-line"></div>
                  </div>
                  <div class="qsg-line-right">
                  <div class="f">
                    <div class="h3 qsg">
                      <div class="fillet">
                        <div class="fillet-r"></div>
                      </div>
                      {{ this.$t("index_qsg")[0]["title"] }}
                    </div>
                  </div>
                  <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p>
                  </div>
                </div>
                <div class="qsg--divider"></div>
                <div class="qsg-line">
                  <div class="qsg-line-left">
                    <div class="qsg-number-wrap">
                      <div>2</div>
                    </div>
                    <div class="qsg-yellow-line"></div>
                  </div>
                  <div class="qsg-line-right">
                  <div class="f">
                    <div class="h3 qsg">
                      <div class="fillet">
                        <div class="fillet-r"></div>
                      </div>
                      {{ this.$t("index_qsg")[1]["title"] }}
                    </div>
                  </div>
                  <p class="p">{{ this.$t("index_qsg")[1]["text"] }}</p>
                  </div>
                </div>
                <div class="qsg--divider"></div>
                <div class="qsg-line">
                  <div class="qsg-line-left">
                    <div class="qsg-number-wrap">
                      <div>3</div>
                    </div>
                    <div class="qsg-yellow-line"></div>
                  </div>
                  <div class="qsg-line-right">
                    <div class="f">
                      <div class="h3 qsg">
                        <div class="fillet">
                          <div class="fillet-r"></div>
                        </div>
                        {{ this.$t("index_qsg")[2]["title"] }}
                      </div>
                    </div>
                    <p class="p">{{ this.$t("index_qsg")[2]["text"] }}</p>
                  </div>
                </div>
                <div class="qsg--divider"></div>
                <div class="qsg-line">
                  <div class="qsg-line-left">
                    <div class="qsg-number-wrap">
                      <div>4</div>
                    </div>
                    <div class="qsg-yellow-line"></div>
                  </div>
                  <div class="qsg-line-right">
                    <div class="f">
                      <div class="h3 qsg">
                        <div class="fillet">
                          <div class="fillet-r"></div>
                        </div>
                        {{ this.$t("index_qsg")[3]["title"] }}
                      </div>
                    </div>
                    <p class="p">{{ this.$t("index_qsg")[3]["text"] }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





    <!--代币经济学-->
    <div class="section__ss-bg">
      <div class="section__ss wf-section">
        <div class="container-1440 container-1500 section__ss-token">
          <div class="ss-wrap">
            <div>
              <div class="box box4" v-if="this.$route.name == 'Home'">
                <div class="l animate__animated animate__fadeInDown">
                  <div class="t1">
                    {{ this.$t("index_tokenomics_title") }}
                  </div>
                  <div class="t2-s">
                    <div class="t2">
                      {{ this.$t("index_tokenomics_text") }}
                    </div>
                  </div>
                  <div class="t3-s">

                    <div class="t3">
                      <div class="t3-l animate__animated animate__fadeInBottomLeft">
                        <div>
                          <span class="pink">{{
                            this.$t("index_tokenomics1")[0]["title1"]
                          }}{{
                            this.$t("index_tokenomics1")[0]["title2"]
                          }}</span>
                          <span class="pinks"
                            >&nbsp;{{
                              this.$t("index_tokenomics1")[0]["text"]
                            }}</span
                          >
                        </div>
                        <div>
                          <span class="pink">{{
                            this.$t("index_tokenomics1")[1]["title1"]
                          }}{{
                            this.$t("index_tokenomics1")[1]["title2"]
                          }}</span>
                          <span class="pinks"
                            >&nbsp;{{
                              this.$t("index_tokenomics1")[1]["text"]
                            }}</span
                          >
                        </div>
                        <div>
                          <span class="pink">{{
                            this.$t("index_tokenomics1")[2]["title1"]
                          }}{{
                            this.$t("index_tokenomics1")[2]["title2"]
                          }}</span>
                          <span class="pinks"
                            >&nbsp;{{
                              this.$t("index_tokenomics1")[2]["text"]
                            }}</span
                          >
                        </div>
                        <div>
                          <span class="pink">{{
                            this.$t("index_tokenomics1")[3]["title1"]
                          }}{{
                            this.$t("index_tokenomics1")[3]["title2"]
                          }}</span>
                          <span class="pinks"
                            >&nbsp;{{
                              this.$t("index_tokenomics1")[3]["text"]
                            }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="t3-r animate__animated animate__fadeInBottomRight"
                      >
                        <div class="t3-r-1 pinks">
                          {{ this.$t("index_tokenomics2")[0]["title1"] }}
                          {{ this.$t("index_tokenomics2")[0]["title2"] }}
                          {{ this.$t("index_tokenomics2")[0]["text"] }}
                        </div>
                        <div class="t3-r-2 pinks">
                          <span>{{
                            this.$t("index_tokenomics2")[1]["title1"]
                          }}</span>
                          <span>{{
                            this.$t("index_tokenomics2")[1]["title2"]
                          }}</span>
                          <span>{{ this.$t("index_tokenomics2")[1]["text"] }}</span>
                        </div>
                        <div class="t3-r-2 pinks">
                          <span>{{
                            this.$t("index_tokenomics2")[2]["title1"]
                          }}</span>
                          <span>{{
                            this.$t("index_tokenomics2")[2]["title2"]
                          }}</span>
                          <span>{{ this.$t("index_tokenomics2")[2]["text"] }}</span>
                        </div>
                        <div class="t3-r-3 pinks">
                          <span>{{
                            this.$t("index_tokenomics2")[3]["title1"]
                          }}</span>
                          <span>{{
                            this.$t("index_tokenomics2")[3]["title2"]
                          }}</span>
                          <span>{{ this.$t("index_tokenomics2")[3]["text"] }}</span>
                        </div>
                        <div class="t3-r-4 pinks">
                          <span>{{
                            this.$t("index_tokenomics2")[4]["title1"]
                          }}</span>
                          <span>{{
                            this.$t("index_tokenomics2")[4]["title2"]
                          }}</span>
                          <span>{{ this.$t("index_tokenomics2")[4]["text"] }}</span>
                        </div>
                        <div class="t3-r-5 pinks">
                          <span>{{
                            this.$t("index_tokenomics2")[5]["title1"]
                          }}</span>
                          <span>{{
                            this.$t("index_tokenomics2")[5]["title2"]
                          }}</span>
                          <span>{{ this.$t("index_tokenomics2")[5]["text"] }}</span>
                        </div>
                      </div>
                      <div class="box box4 p">
                        <div class="r animate__animated animate__fadeInRight">
                          <div class="token-img-subject">
                            <div>
                              <img class="dogepi-logo" src="@/assets/dogepi-logo.png" />
                            </div>
                            <div class="token-line"></div>
                            <div>
                              <img class="bnb-logo" src="@/assets/bnb-logo.png" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="box4 m">
                      <div class="r animate__animated animate__fadeInRight">
                        <!-- <img class="box4-img" src="@/assets/TOKENOMICS-m.png" /> -->
                        <div class="token-img-subject">
                            <div>
                              <img class="dogepi-logo" src="@/assets/dogepi-logo.png" />
                            </div>
                            <div class="token-line"></div>
                            <div>
                              <img class="bnb-logo" src="@/assets/bnb-logo.png" />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div id="particles-js3" class="particle-class"></div>
    </div>
      </div>
      <!--路线图-->
      <div id="roadmap" class="section__htb wf-section" v-if="this.$route.name == 'Home'">
        <div class="roadmap-bg">
          <div class="container-1440 ">
            <div class="htb-wrap">
              <div class="htb-sg-wrap">
                <div class="h1">
                  {{ this.$t("index_roadmap_title") }}
                  <div class="h1-img mo">
                    <!-- <img src="../../../assets/roadmap.png"> -->
                    <roadmapAnimation style="width: 30vw;"></roadmapAnimation>
                  </div>
                </div>
                <div class="qsg-wrap">
                  <div class="qsg-line">
                    <div class="qsg-line-left">
                      <div class="harrypronumberwrap">
                        {{ this.$t("index_roadmap")[0].title }}
                      </div>
                    </div>
                    <div class="qsg-line-right">
                      <div class="h3 qsg harryh3pro">
                        <ul class="text-ul">
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text1 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text0 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text2 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text3 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text4 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[0].text5 }}</span>
                          </li>
                        </ul>
                      </div>
                      <!-- <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p> -->
                    </div>
                  </div>
                  <div class="qsg-line">
                    <div class="qsg-line-left">
                      <div class="harrypronumberwrap">
                        {{ this.$t("index_roadmap")[1].title }}
                      </div>
                    </div>
                    <div class="qsg-line-right">
                      <div class="h3 qsg harryh3pro">
                        <ul class="text-ul">
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[1].text1 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[1].text2 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[1].text3 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[1].text4 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[1].text5 }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="qsg-line">
                    <div class="qsg-line-left">
                      <div class="harrypronumberwrap">
                        {{ this.$t("index_roadmap")[2].title }}
                      </div>
                    </div>
                    <div class="qsg-line-right">
                      <div class="h3 qsg harryh3pro">
                        <ul class="text-ul">
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[2].text1 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[2].text2 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[2].text3 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[2].text4 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[2].text5 }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="qsg-line">
                    <div class="qsg-line-left">
                      <div class="harrypronumberwrap">
                        {{ this.$t("index_roadmap")[3].title }}
                      </div>
                    </div>
                    <div class="qsg-line-right">
                      <div class="h3 qsg harryh3pro">
                        <ul class="text-ul">
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[3].text1 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[3].text2 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[3].text3 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[3].text4 }}</span>
                          </li>
                          <li>
                            <span class="text-line"></span>
                            <span class="p">{{ this.$t("index_roadmap")[3].text5 }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--ShibaSwap-->
      <div id="shibaswap" class="section__ss wf-section" style="display: none;">
              <div class="container-1440">
                  <div class="ss-wrap">
                      <div class="ss-left">
                          <div class="ss-img-holder"><img src="@/assets/ss-img2x.png" loading="eager" alt="" class="ss--img"><img src="@/assets/ss-glow.svg" loading="eager" alt="" class="ss--img-glow"></div>
                      </div>
                      <div class="ss-right">
                          <div class="h1">{{ this.$t("index_shibaswap_title")}}</div>
                          
                          <p class="p">{{ this.$t("index_shibaswap_text")}}</p>
                      </div>
                  </div>
              </div>
              <div id="particles-js3" class="particle-class"></div>
      </div>
      <!--Art-->
      <div id="art" class="section__art wf-section">
            <div class="container-1440">
                <div class="art-wrap">
                    <div class="h1">{{ this.$t("index_art_title")}}</div>
                    <p class="art_p">{{ this.$t("index_shibaswap_text")}}</p>
                </div>
            </div>
            
            
            <div class="swiper">
                <div class="swiper-container first-swiper" style="align-items: center;">
                    <div class="swiper-wrapper first-swiper-wrapper" :style="swiper">
                        <div class="swiper-slide" v-for="(item, index) in airlist" :key="index">
                            <div class="slide">
                                <a href="#" class="slide-lightbox w-inline-block w-lightbox">
                                    <img :src="item" loading="lazy" alt="" class="slider-lb--img">
                                    <!-- <div class="slider-lb--bg"></div> -->
                                </a>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="arrow-previous w-inline-block" @click="swiperClick(1)" style=""></a>
                    <a href="#" class="arrow-next w-inline-block" @click="swiperClick(2)"></a>
                </div>
            </div>



      </div>
    </div>
    <footer-cmp></footer-cmp>
  </div>
</template>

<script>
import axios from "axios";
import logo from "./logo.vue";
import mLogo from "./m-logo.vue";
import footerCmp from "../footer/footerCmp.vue";
import car1 from "./car1.vue"
import car2 from "./car2.vue"
import car3 from "./car3.vue"
import homeLogo from "./homeLogo.vue"
import roadmapAnimation from "./roadmapAnimation.vue"

export default {
  data() {
    return {
        swiper:{
            "transition-duration": "0ms",
            transform: "translate3d(0, 0px, 0px)"
        },
        swiper_index:0,
        size:0,
        airlist: [
            '/nft/1.png',
            '/nft/2.png',
            '/nft/3.png',
            '/nft/4.png',
            '/nft/5.png',
            '/nft/6.png',
            '/nft/7.png',
            '/nft/8.png',
        ],
        friends:[]
    };
  },
  props: {},
  computed: {},
  watch: {},
  components: {
    logo,
    mLogo,
    footerCmp,
    car1,
    car2,
    car3,
    homeLogo,
    roadmapAnimation
  },
  created() {
    this.getFriends();
  },
  mounted() {
  },
  methods: {
    swiperClick(e){
        /*if(this.airlist.length>this.size){
            this.size = e==1?this.size-1:this.size+1;
            console.log('size数据',this.size)
        }else{
            this.size = e==1?this.size-1:this.size+1;
            console.log('size数据',this.size)
        }*/
        
        /*this.swiper.transform = "translate3d(-"+this.size*190.3+"px, 0px, 0px)";*/
        
        /*判断是否数量小于当前数量*/
        var count = this.airlist.length;
        if(e==1)
        {
            if(this.swiper_index>0){
                if(this.size!=0)
                {
                    let a = this.size==1?1:this.size -1;
                    let size = a;
                    this.swiper_index = this.swiper_index-1;
                    this.swiper.transform = "translate3d(-"+size*16+"vw, 0px, 0px)";
                    console.log('数据',size)
                }else{
                    this.swiper.transform = "";
                }
            }
        }else{
            if(count>this.swiper_index)
            {
                let b= this.size +1;
                let size = b;
                this.swiper_index = this.swiper_index+1;
                this.swiper.transform = "translate3d(-"+size*16+"vw, 0px, 0px)";
                console.log('数据',size)
                /*console.log('数据',size)*/
            }
        }
        

    },
    // 获取 getFriends
    getFriends(){
      axios.post('https://admintest.dogepi.net/api/getFriends').then((e)=>{
					this.friends = e.data.data;
			})
    },
    Jump(e) {
				window.open(e)
			},
  },
};
</script>

<style scoped lang="less">
@import "../../../styles/shiba-ui";
@import './bdoge.less';
.uin:hover{
    display: none;
}
.swiper-slide{
    width: 10vw;
}
p {
  max-width: 550px;
  font-size: 18px;
  line-height: 32px;
  text-align: justify;
}
.art_p {
  max-width: 1440px;
  font-size: 18px;
  line-height: 32px;
}
.harrypronumberwrap {
  font-weight: bold;
  font-size: 36px;
  text-align: center;
}
.harryh3pro {
  margin-left: 1vw;
  font-size: 20px;
  text-align: center;
}
//TOKENOMICS
.box4 .pink {
  font-size: 2vw;
}
.box4 .t3-r-1,
.box4 .t3-r-2,
.box4 .t3-r-3,
.box4 .t3-r-4,
.box4 .t3-r-5 {
  font-size: 1vw;
}
.pinks {
  color: #FEA626;
  white-space: nowrap;
  font-size: 1vw;
}
.htb-circle-1 {
  position: absolute;
}
.ss-right {
  //padding-top: 150px;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
.htb-circle-dashes {
  animation: rotation 60s linear infinite;
}
.circle-glued-coins {
  //-webkit-transform: rotate(900deg);
  animation: rotation 30s linear infinite;
  /*-moz-animation: rotation 60s linear infinite;
  -webkit-animation: rotation 60s linear infinite;
  -o-animation: rotation 60s linear infinite;*/
}
.front-coins-holder {
  animation: rotation 60s linear infinite;
}
#shibaswap .ss-left{
  width: auto;
}
#shibaswap .ss-right{
  width: auto;
}
@media (max-width: 768px) {
    .swiper-slide{
        width: 30vw;
    }
  .ss-right {
    width: 100%;
  }
  .ss-left {
    width: 100%;
  }
  .box4 .l .t3 {
    display: block;
    flex-direction: row;
    font-size: 18px;
  }
  .box4 .pink {
    font-size: 7vw;
  }
  .box4 .t3-r-1,
  .box4 .t3-r-2,
  .box4 .t3-r-3,
  .box4 .t3-r-4,
  .box4 .t3-r-5 {
    font-size: 4vw;
  }
  .pinks {
    font-size: 3.5vw;
  }
  .box4 .t3-l {
    margin-bottom: 10vw;
  }
  .qsg-line-right {
    display: block;
    margin-left: 0;
  }
  .circle-glued-coins {
    .gc-1 {
      width: 17vw;
    }
    .gc-2 {
      width: 17vw;
      bottom: -10vw;
      left: 17vw;
    }
    .gc-3 {
      width: 17vw;
    }
  }
  .front-coins-holder {
    .bc-1 {
      width: 22vw;
    }
    .bc-2 {
      width: 22vw;
    }
    .bc-3 {
      width: 22vw;
      bottom: 20vw;
      left: -5vw;
    }
  }
  .ss-right {
    padding-top: 0px;
    padding-bottom: 50px;
  }
}
</style>
<style>
body,
html {
  max-width: 100% !important;
  overflow-x: hidden !important;
}

::-moz-selection {
  background: #f06500;
}

::selection {
  background: #f06500;
}

@media (min-width: 992px) AND (max-width: 1340px) {
  .hero--art {
    width: 350px;
  }

  .hero--moon {
    width: 518px;
  }
}

@media (min-width: 992px) AND (max-width: 1400px) {
  .nav-link.more {
    display: none;
  }

  .nav-drop.more {
    display: block;
  }
}

@media (min-width: 992px) AND (max-width: 1250px) {
  .nav-link.ss {
    display: none;
  }

  .nav-drop-link.ss {
    display: block;
  }
}

@media (min-width: 992px) AND (max-width: 1200px) {
  .coin-grid {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  .coin-box-content {
    padding-top: 40px;
    padding-right: 40px;
    padding-bottom: 48px;
    padding-left: 40px;
  }

  .coin-box--coin {
    height: 100px;
  }

  .coin-box-top {
    height: 200px;
  }
}

.brand-url--logo,
.coin-box--coin,
.coin-box-elip-bg,
.coin-box-graph--ico,
.coin1-shad,
.cta-btn--ico,
.eco-cta--ico,
.eco-cta--ico-hover,
.hero--moon,
.hero-bg-glow,
.hero__scrollbtn--arrow,
.hero__scrollbtn--img,
.meat,
.scrol-up-cta--ico,
.ss--img-glow {
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

.arr-up-trigger,
.brand-url--logo,
.cta-btn--ico,
.eco-cta--ico,
.eco-cta--ico-hover,
.hero--moon,
.hero-bg-glow,
.hero__scrollbtn--arrow,
.hero__scrollbtn--img,
.meat {
  pointer-events: none;
}

#modal::-webkit-scrollbar {
  width: 10px;
  border-radius: 16px;
  background-color: transparent;
}

#modal::-webkit-scrollbar-thumb {
  background-color: #2b2a36;
  border-radius: 16px;
}

html.wf-loading * {
  opacity: 0;
}
</style>
