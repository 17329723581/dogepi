<template>
  <div>
    <div id="ecosystem" class="section__eco wf-section">
      <div class="container-1440">
        <div class="eco-wrap">
          <div class="eco-left">
            <h2 class="h1">{{ this.$t("index_ecosystem_title") }}</h2>
            <p class="p">
              {{ this.$t("index_ecosystem_text1") }}
            </p><br>
            <p class="p">
              {{ this.$t("index_ecosystem_text2") }}
            </p>
          </div>
          <div class="eco-right">
            <a
              href="https://etherscan.io/tx/0xabc68f7d712a1552468331c6ec29f5c112bb500ed5ffa660fe2b5af378921e37"
              target="_blank"
              class="eco-cta w-inline-block"
            >
              <div class="eco-cta-holder uni">
                <div class="eco-cta-ico-wrap">
                  <img
                    src="@/assets/ico-uni.svg"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico"
                  /><img
                    src="images/ico-uni-col.svg"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico-hover"
                  />
                </div>
                <div class="eco-cta--txt">{{ this.$t("index_eco")[0] }}</div>
              </div>
              <div class="eco-cta--bg"></div>
            </a>
            <a
              href="https://etherscan.io/tx/0xb65bcbb85c1633b0ab4e4886c3cd8eeaeb63edbb39cacdb9223fdcf4454fd2c7"
              target="_blank"
              class="eco-cta w-inline-block"
            >
              <div class="eco-cta-holder indi">
                <div class="eco-cta-ico-wrap">
                  <img
                    src="@/assets/ico-icr.png"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico wallet"
                  /><img
                    src="images/ico-icr-b.png"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico-hover wallet"
                  />
                </div>
                <div class="eco-cta--txt">{{ this.$t("index_eco")[1] }}</div>
              </div>
              <div class="eco-cta--bg"></div>
            </a>
            <a
              href="https://etherscan.io/tx/0x125714bb4db48757007fff2671b37637bbfd6d47b3a4757ebbd0c5222984f905"
              target="_blank"
              class="eco-cta w-inline-block"
            >
              <div class="eco-cta-holder burn">
                <div class="eco-cta-ico-wrap">
                  <img
                    src="@/assets/ico-vb-burn.svg"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico wallet"
                  /><img
                    src="images/ico-vb-burn-f.svg"
                    loading="lazy"
                    alt=""
                    class="eco-cta--ico-hover wallet"
                  />
                </div>
                <div class="eco-cta--txt">{{ this.$t("index_eco")[2] }}</div>
              </div>
              <div class="eco-cta--bg"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="section__coin wf-section">
      <div class="container-1440">
        <div data-w-id="ea099555-1b52-f816-b372-4f0de20bb312" class="coin-grid">
          <div class="coin-box">
            <div class="coin-box-top">
              <div class="coin-img-wrap">
                <img
                  src="@/assets/shiba_coin-1.png"
                  loading="lazy"
                  data-w-id="5f864c4a-d4ce-4416-9e35-17cec00f6e38"
                  alt=""
                  class="coin-box--coin"
                /><img
                  src="@/assets/coin-shad-1.png"
                  loading="lazy"
                  data-w-id="ed2e5c3e-6418-f76d-e3e5-0b4ed0021441"
                  alt=""
                  class="coin1-shad"
                />
              </div>
              <img
                src="@/assets/coin-elip.png"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 1000px"
                srcset="
                  @/assets/coin-elip-p-500.png  500w,
                  @/assets/coin-elip-p-800.png  800w,
                  @/assets/coin-elip.png       1050w
                "
                alt=""
                class="coin-box-elip-bg"
              />
            </div>
            <div class="coin-box-content">
              <div class="coin-box-title-wrap">
                <h3 class="h3">{{ this.$t("index_coin")[0]["title"] }}</h3>
                <a
                  href="https://www.dextools.io/app/uniswap/pair-explorer/0x811beed0119b4afce20d2583eb608c6f7af1954f"
                  target="_blank"
                  class="coin-box-graph w-inline-block"
                  ><img
                    src="@/assets/ico-graph-ora.svg"
                    loading="lazy"
                    alt=""
                    class="coin-box-graph--ico"
                  />
                  <div class="text-block">See Live Charts</div>
                </a>
              </div>
              <p class="p">{{ this.$t("index_coin")[0]["text"] }}</p>
              <a href="https://shibaswap.com/#/swap" target="_blank">
                <div class="cta-btn__txt">Buy SHIB</div>
              </a>
            </div>
          </div>
          <div class="coin-box">
            <div class="coin-box-top">
              <div class="coin-img-wrap">
                <img
                  src="@/assets/leash_coin-1.png"
                  loading="lazy"
                  data-w-id="843ffd8a-d36c-f041-fb50-a761f94669bc"
                  alt=""
                  class="coin-box--coin"
                /><img
                  src="@/assets/coin-shad-2.png"
                  loading="lazy"
                  data-w-id="843ffd8a-d36c-f041-fb50-a761f94669bd"
                  alt=""
                  class="coin1-shad _2"
                />
              </div>
              <img
                src="@/assets/coin-elip.png"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 1000px"
                srcset="
                  @/assets/coin-elip-p-500.png  500w,
                  @/assets/coin-elip-p-800.png  800w,
                  @/assets/coin-elip.png       1050w
                "
                alt=""
                class="coin-box-elip-bg"
              />
            </div>
            <div class="coin-box-content">
              <div class="coin-box-title-wrap">
                <h3 class="h3">{{ this.$t("index_coin")[1]["title"] }}</h3>
                <a
                  href="https://dex.guru/token/0x27c70cd1946795b66be9d954418546998b546634-eth"
                  target="_blank"
                  class="coin-box-graph w-inline-block"
                  ><img
                    src="@/assets/ico-graph-ora.svg"
                    loading="lazy"
                    alt=""
                    class="coin-box-graph--ico"
                  />
                  <div class="text-block">See Live Charts</div>
                </a>
              </div>
              <p class="p">{{ this.$t("index_coin")[1]["text"] }}</p>
              <a href="https://shibaswap.com/#/swap" target="_blank">
                <div class="cta-btn__txt">Buy LEASH</div>
              </a>
            </div>
          </div>
          <div class="coin-box">
            <div class="coin-box-top">
              <div class="coin-img-wrap">
                <img
                  src="@/assets/bone_coin-2.png"
                  loading="lazy"
                  data-w-id="92350250-cbd3-7ab4-8c35-1b31729fc829"
                  alt=""
                  class="coin-box--coin"
                /><img
                  src="@/assets/coin-shad-2.png"
                  loading="lazy"
                  data-w-id="92350250-cbd3-7ab4-8c35-1b31729fc82a"
                  alt=""
                  class="coin1-shad _2"
                />
              </div>
              <img
                src="@/assets/coin-elip.png"
                loading="lazy"
                sizes="(max-width: 991px) 100vw, 1000px"
                srcset="
                  @/assets/coin-elip-p-500.png  500w,
                  @/assets/coin-elip-p-800.png  800w,
                  @/assets/coin-elip.png       1050w
                "
                alt=""
                class="coin-box-elip-bg"
              />
            </div>
            <div class="coin-box-content">
              <div class="coin-box-title-wrap">
                <h3 class="h3">{{ this.$t("index_coin")[2]["title"] }}</h3>
                <a
                  href="https://dex.guru/token/0x9813037ee2218799597d83d4a5b6f3b6778218d9-eth"
                  target="_blank"
                  class="coin-box-graph w-inline-block"
                  ><img
                    src="@/assets/ico-graph-ora.svg"
                    loading="lazy"
                    alt=""
                    class="coin-box-graph--ico"
                  />
                  <div class="text-block">See Live Charts</div>
                </a>
              </div>
              <p class="p">{{ this.$t("index_coin")[2]["text"] }}</p>
              <a href="https://shibaswap.com/#/swap" target="_blank">
                <div class="cta-btn__txt">Buy BONE</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-js2" class="particle-class"></div>
    </div>
    <div id="how-to-buy" class="section__htb wf-section">
      <div class="container-1440">
        <div class="htb-wrap">
          <div class="htb-hero">
            <div class="htb-left">
              <h2 class="h1">{{ this.$t("index_cta_title") }}</h2>
              <p class="p">{{ this.$t("index_cta_text") }}</p>
              <div class="htb-btn-wrap">
                <a
                  href="https://shibaswap.com/#/swap"
                  target="_blank"
                  class="cta-btn r-pad buy w-inline-block"
                >
                  <div class="cta-btn__txt">
                    {{ this.$t("index_cta_btn1") }}
                  </div>
                  <div class="cta-btn__bg"></div>
                </a>
                <a
                  href="https://shibaswap.com/#/swap"
                  target="_blank"
                  class="cta-btn r-pad buy w-inline-block"
                >
                  <div class="cta-btn__txt">
                    {{ this.$t("index_cta_btn2") }}
                  </div>
                  <div class="cta-btn__bg"></div>
                </a>
              </div>
            </div>
            <div class="htb-right">
              <div class="base-circle-wrap">
                <img
                  src="@/assets/c1.png"
                  loading="lazy"
                  alt=""
                  class="htb-circle-1"
                /><img
                  src="@/assets/circle-dashes.svg"
                  loading="lazy"
                  alt=""
                  class="htb-circle-dashes"
                />
                <div class="circle-glued-coins">
                  <img
                    src="@/assets/gc1.png"
                    loading="lazy"
                    alt=""
                    class="gc-1"
                  /><img
                    src="@/assets/gc2.png"
                    loading="lazy"
                    alt=""
                    class="gc-2"
                  /><img
                    src="images/gc4.png"
                    loading="lazy"
                    alt=""
                    class="gc-3"
                  />
                </div>
                <div class="front-coins-holder">
                  <img
                    src="@/assets/bc1.png"
                    loading="lazy"
                    alt=""
                    class="bc-1"
                  /><img
                    src="@/assets/bc2.png"
                    loading="lazy"
                    alt=""
                    class="bc-2"
                  /><img
                    src="images/bc4.png"
                    loading="lazy"
                    alt=""
                    class="bc-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="htb-sg-wrap">
            <h2 class="h1">{{ this.$t("index_qsg_title") }}</h2>
            <div class="qsg-wrap">
              <div class="qsg-line">
                <div class="qsg-line-left">
                  <div class="qsg-number-wrap">
                    <div>1</div>
                  </div>
                  <div class="qsg-yellow-line"></div>
                </div>
                <div class="qsg-line-right">
                  <h3 class="h3 qsg">{{ this.$t("index_qsg")[0]["title"] }}</h3>
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
                  <h3 class="h3 qsg">{{ this.$t("index_qsg")[1]["title"] }}</h3>
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
                  <h3 class="h3 qsg">
                    <strong>{{ this.$t("index_qsg")[2]["title"] }}</strong>
                  </h3>
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
                  <h3 class="h3 qsg">{{ this.$t("index_qsg")[3]["title"] }}</h3>
                  <p class="p">{{ this.$t("index_qsg")[3]["text"] }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="shibaswap" class="section__ss wf-section">
      <div class="container-1440">
        <div class="ss-wrap">
          <div class="ss-left">
            <div class="box box4">
              <div class="l animate__animated animate__fadeInDown">
                <div class="t1">{{ this.$t("index_tokenomics_title") }}</div>
                <div class="t2">
                  {{ this.$t("index_tokenomics_text") }}
                </div>
                <div class="t3">
                  <div class="t3-l animate__animated animate__fadeInBottomLeft">
                    <div>
                      <span class="pink">{{ this.$t("index_tokenomics1")[0]['title1'] }}</span>
                      <span class="pink">{{ this.$t("index_tokenomics1")[0]['title2'] }}</span>
                      <span class="pinks">&nbsp;{{ this.$t("index_tokenomics1")[0]['text'] }}</span>
                    </div>
                    <div>
                      <span class="pink">{{ this.$t("index_tokenomics1")[1]['title1'] }}</span>
                      <span class="pink">{{ this.$t("index_tokenomics1")[1]['title2'] }}</span>
                      <span class="pinks">&nbsp;{{ this.$t("index_tokenomics1")[1]['text'] }}</span>
                    </div>
                    <div>
                      <span class="pink">{{ this.$t("index_tokenomics1")[2]['title1'] }}</span>
                      <span class="pink">{{ this.$t("index_tokenomics1")[2]['title2'] }}</span>
                      <span class="pinks">&nbsp;{{ this.$t("index_tokenomics1")[2]['text'] }}</span>
                    </div>
                    <div>
                      <span class="pink">{{ this.$t("index_tokenomics1")[3]['title1'] }}</span>
                      <span class="pink">{{ this.$t("index_tokenomics1")[3]['title2'] }}</span>
                      <span class="pinks">&nbsp;{{ this.$t("index_tokenomics1")[3]['text'] }}</span>
                    </div>
                  </div>
                  <div
                    class="t3-r animate__animated animate__fadeInBottomRight"
                  >
                    <div class="t3-r-1 pinks">
                      {{ this.$t("index_tokenomics2")[0]['title1'] }}
                      {{ this.$t("index_tokenomics2")[0]['title2'] }}
                      {{ this.$t("index_tokenomics2")[0]['text'] }}
                    </div>
                    <div class="t3-r-2 pinks">
                      <span>{{ this.$t("index_tokenomics2")[1]['title1'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[1]['title2'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[1]['text'] }}</span>
                    </div>
                    <div class="t3-r-2 pinks">
                      <span>{{ this.$t("index_tokenomics2")[2]['title1'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[2]['title2'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[2]['text'] }}</span>
                    </div>
                    <div class="t3-r-3 pinks">
                      <span>{{ this.$t("index_tokenomics2")[3]['title1'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[3]['title2'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[3]['text'] }}</span>
                    </div>
                    <div class="t3-r-4 pinks">
                      <span>{{ this.$t("index_tokenomics2")[4]['title1'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[4]['title2'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[4]['text'] }}</span>
                    </div>
                    <div class="t3-r-5 pinks">
                      <span>{{ this.$t("index_tokenomics2")[5]['title1'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[5]['title2'] }}</span>
                      <span>{{ this.$t("index_tokenomics2")[5]['text'] }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ss-right">
            <div class="box box4">
              <div class="r animate__animated animate__fadeInRight">
                <img class="box4-img" src="@/assets/logo.png">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="particles-js3" class="particle-class"></div>
    </div>

    <div id="roadmap" class="section__htb wf-section">
      <div class="container-1440">
        <div class="htb-wrap">
    
          <div class="htb-sg-wrap">
            <h2 class="h1">{{this.$t("index_roadmap_title")}}</h2>
            <div class="qsg-wrap">
              <div class="qsg-line">
                <div class="qsg-line-left">
                  <div class="harrypronumberwrap">
                    <div>{{this.$t("index_roadmap")[0].title}}</div>
                  </div>
                  <div class="qsg-kingpro-line"></div>
                </div>
                <div class="qsg-line-right">
                  <h3 class="h3 qsg harryh3pro">
                    <ul class="text-ul">
                      <li><p class="p">{{this.$t("index_roadmap")[0].text1}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[0].text0}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[0].text2}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[0].text3}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[0].text4}}</p></li>
                    </ul>
                  </h3>
                  <!-- <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p> -->
                </div>
              </div>
              <div class="qsg--divider"></div>
              <div class="qsg-line">
                <div class="qsg-line-left">
                  <div class="harrypronumberwrap">
                    <div>{{this.$t("index_roadmap")[1].title}}</div>
                  </div>
                  <div class="qsg-kingpro-line"></div>
                </div>
                <div class="qsg-line-right">
                  <h3 class="h3 qsg harryh3pro">
                    <ul class="text-ul">
                      <li><p class="p">{{this.$t("index_roadmap")[1].text1}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[1].text2}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[1].text3}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[1].text4}}</p></li>
                    </ul>
                  </h3>
                  <!-- <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p> -->
                </div>
              </div>
              <div class="qsg--divider"></div>
              <div class="qsg-line">
                <div class="qsg-line-left">
                  <div class="harrypronumberwrap">
                    <div>{{this.$t("index_roadmap")[2].title}}</div>
                  </div>
                  <div class="qsg-kingpro-line"></div>
                </div>
                <div class="qsg-line-right">
                  <h3 class="h3 qsg harryh3pro">
                    <ul class="text-ul">
                      <li><p class="p">{{this.$t("index_roadmap")[2].text1}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[2].text2}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[2].text3}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[2].text4}}</p></li>
                    </ul>
                  </h3>
                  <!-- <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p> -->
                </div>
              </div>
              <div class="qsg--divider"></div>
              <div class="qsg-line">
                <div class="qsg-line-left">
                  <div class="harrypronumberwrap">
                    <div>{{this.$t("index_roadmap")[3].title}}</div>
                  </div>
                  <div class="qsg-kingpro-line"></div>
                </div>
                <div class="qsg-line-right">
                  <h3 class="h3 qsg harryh3pro">
                    <ul class="text-ul">
                      <li><p class="p">{{this.$t("index_roadmap")[3].text1}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[3].text2}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[3].text3}}</p></li>
                      <li><p class="p">{{this.$t("index_roadmap")[3].text4}}</p></li>
                    </ul>
                  </h3>
                  <!-- <p class="p">{{ this.$t("index_qsg")[0]["text"] }}</p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="community" class="section__com wf-section">
      <div class="container-1440">
        <div class="com-wrap">
          <h2 class="h1">{{ this.$t("index_com_title") }}</h2>
          <p class="art_p">
            If you'd like to donate to the
            <span class="p--white">Devs</span>
            , send
            <span class="p--orange">
              ETH </span
            >, <span class="p--orange">SHIB</span>,
            <span class="p--orange">LEASH</span> or
            <span class="p--orange">BONE</span>
            here. Thank you for your support! WOOF!
          </p>
          <div class="adress-wrap">
            <div class="adress-left">
              <div id="link-to-copy" class="adress--txt">
                {{ this.$t("index_adress") }}
              </div>
              <div class="adress-hider"></div>
            </div>
            <div class="adress-right">
              <a
                :data-clipboard-text="index_adress"
                href="#"
                class="cta-copy w-inline-block"
              >
                <img
                  src="@/assets/ico-copy.svg"
                  loading="eager"
                  alt=""
                  class="cta-btn--ico copy"
                />
                <div class="cta-btn__txt">{{ this.$t("index_cta_btn5") }}</div>
                <div class="cta-btn-transparent__gradhide dark"></div>
                <div class="cta-btn-transparent__gradhide-red"></div>
                <div class="cta-btn-transparent__animbox"></div>
                <div class="cta-copied-box">
                  <div class="cta-copied-txt"><strong>Copied</strong></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      airlist: [
        {
          img: "http://pcoindex.oss/images/art1.png",
        },
        {
          img: "http://pcoindex.oss/images/art2.png",
        },
        {
          img: "http://pcoindex.oss/images/art3.jpg",
        },
        {
          img: "http://pcoindex.oss/images/art4.png",
        },
        {
          img: "http://pcoindex.oss/images/art5.jpg",
        },
        {
          img: "http://pcoindex.oss/images/art6.png",
        },
        {
          img: "http://pcoindex.oss/images/art7.png",
        },
        {
          img: "http://pcoindex.oss/images/art8.png",
        },
        {
          img: "http://pcoindex.oss/images/art9.png",
        },
      ],
    };
  },
  props: {},
  computed: {},
  watch: {},
  components: {},
  created() {},
  mounted() {
    inst("presale_canvas");
  },
  methods: {},
};
</script>

<style scoped lang="less">
@import "../../../styles/shiba-ui";
p {
  max-width: 550px;
  font-family: Khula, sans-serif;
  color: #bbbbbe;
  font-size: 18px;
  line-height: 32px;
}
.art_p {
  max-width: 1440px;
  font-family: Khula, sans-serif;
  color: #bbbbbe;
  font-size: 18px;
  line-height: 32px;
}
 .harrypronumberwrap {
        font-weight: bold;
        font-size: 36px;
        text-align: center;
        color: #fff;
    }
  .harryh3pro{
        margin-left: 1vw;
        font-size: 20px;
        text-align: center;
        color: #bbbbbe;
  }
//TOKENOMICS
.box4 .pink{
    font-size:2vw;
}
.box4 .t3-r-1, .box4 .t3-r-2, .box4 .t3-r-3, .box4 .t3-r-4, .box4 .t3-r-5 {
    font-size: 1vw;
}
.pinks{
    color: #ffffff;
    white-space:nowrap;
    font-size:1vw;

}
@media (max-width: 768px){
    .ss-right{
        width:100%
    }
    .ss-left{
        width:100%
    }
    .box4 .l .t3 {
        display: block;
        flex-direction: row;
        font-size: 18px;
    }
    .box4 .pink{
        font-size:7vw;
    }
    .box4 .t3-r-1, .box4 .t3-r-2, .box4 .t3-r-3, .box4 .t3-r-4, .box4 .t3-r-5 {
        font-size: 4vw;
    }
    .pinks{
        font-size:3.5vw;
    }
    .box4 .t3-l{
        margin-bottom:10vw
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
  color: #fff;
  background: #f06500;
}

::selection {
  color: #fff;
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
