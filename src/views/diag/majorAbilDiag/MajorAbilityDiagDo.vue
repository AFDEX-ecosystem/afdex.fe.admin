<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">전공능력진단</h2>
        <div class="language_tab title_function">
          <p class="radio_tab inline">
            <input type="radio" id="radio1" v-model="langSelect" value="kr" /><label for="radio1">한국어</label>
          </p>
          <p class="radio_tab inline">
            <input type="radio" id="radio2" v-model="langSelect" value="en" /><label for="radio2">영어</label>
          </p>
          <p class="radio_tab inline">
            <input type="radio" id="radio3" v-model="langSelect" value="cn" /><label for="radio3">중국어</label>
          </p>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="diag_desc box">
        <div class="top">
          <div><strong>단과대학</strong>공과대학</div>
          <div><strong>학과</strong>소프트웨어공학과</div>
          <div><strong>이름</strong>홍길동</div>
          <div><strong>학번</strong>202506697</div>
          <div><strong>성별</strong>여</div>
          <div><strong>학년</strong>2학년</div>
        </div>
        <div class="bottom editor_area">
          전공능력진단입니다. <br />
          편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
        </div>
      </div>
      <div class="radio_tab_md_wrap">
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_1" v-model="abilityType" value="abil1" />
          <label for="radio_md_1">전공능력A</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_2" v-model="abilityType" value="abil2" />
          <label for="radio_md_2">전공능력B</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_3" v-model="abilityType" value="abil3" />
          <label for="radio_md_3">전공능력C</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_4" v-model="abilityType" value="abil4" />
          <label for="radio_md_4">전공능력D</label>
        </p>
      </div>
      <div class="diag_wrapper">
        <div class="diag_do_section">
          <p class="diag_qus"><span>1.</span>MICE 산업에 대한 전반적인 구조를 이해하고 있다.</p>
          <!-- [pp] Case: 척도형 문항-->
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" />
                <label for="scale1"><span class="number">1</span>매우 그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" />
                <label for="scale2"><span class="number">2</span>그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" />
                <label for="scale3"><span class="number">3</span>보통이다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" />
                <label for="scale4"><span class="number">4</span>아니다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" />
                <label for="scale5"><span class="number">5</span>전혀 그렇지 않다</label>
              </p>
            </div>
          </div>
        </div>
        <div class="diag_do_section">
          <p class="diag_qus"><span>2.</span>MICE 산업의 중요성 및 한국 MICE 산업현황을 이해하고 있다.</p>
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" />
                <label for="scale1"><span class="number">1</span>매우 그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" />
                <label for="scale2"><span class="number">2</span>그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" />
                <label for="scale3"><span class="number">3</span>보통이다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" />
                <label for="scale4"><span class="number">4</span>아니다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" />
                <label for="scale5"><span class="number">5</span>전혀 그렇지 않다</label>
              </p>
            </div>
          </div>
        </div>
        <div class="diag_do_section">
          <p class="diag_qus"><span>3.</span>MICE와 관련한 주요한 용어와 기관/기업들의 역할을 알고 있다.</p>
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" />
                <label for="scale1"><span class="number">1</span>매우 그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" />
                <label for="scale2"><span class="number">2</span>그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" />
                <label for="scale3"><span class="number">3</span>보통이다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" />
                <label for="scale4"><span class="number">4</span>아니다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" />
                <label for="scale5"><span class="number">5</span>전혀 그렇지 않다</label>
              </p>
            </div>
          </div>
        </div>
        <div class="diag_do_section">
          <p class="diag_qus"><span>4.</span>국제회의 기획 및 프로그램 구성 등을 할 수 있다.</p>
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" />
                <label for="scale1"><span class="number">1</span>매우 그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" />
                <label for="scale2"><span class="number">2</span>그렇다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" />
                <label for="scale3"><span class="number">3</span>보통이다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" />
                <label for="scale4"><span class="number">4</span>아니다</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" />
                <label for="scale5"><span class="number">5</span>전혀 그렇지 않다</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn_area ta_r">
        <button type="button" class="btn_xl btn_round2 btn_white">목록</button>
        <button type="button" class="btn_xl btn_round2 btn_white" @click="onclickNext()">다음</button>
        <button type="button" class="btn_xl btn_round2 btn_primary" @click="onclickSave()">저장</button>
        <button type="button" class="btn_xl btn_round2 btn_primary" @click="onclickDone()">제출</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    langSelect: "kr",
    abilityType: "abil1",
    ansRadio1: "",
    ansRadio2: "",
    ansRadio3: "",
    ansRadio4: "",
  }),
  methods: {
    // 화면 단위(전공능력) 모든 질문 응답 후 저장 시
    onclickNext() {
      const vm = this;
      vm.$confirm("저장하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("저장되었습니다.<br /> 다음 단계로 이동합니다.");
        }
      });
    },
    // 마지막 단계 모두 입력 후 저장 시 {
    onclickSave() {
      const vm = this;
      vm.$confirm("제출하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("정상 제출되었습니다.<br /> 목록화면으로 이동합니다.");
        }
      });
    },
    // 화면 내 일부 질문만 응답 후 저장 시
    onclickDone() {
      const vm = this;
      vm.$alert("현재 화면의 모든 질문 응답 시 저장 가능합니다.");
    },
  },
};
</script>
