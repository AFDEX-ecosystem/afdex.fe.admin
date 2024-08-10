<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">기초학력진단</h2>
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
      </div>
      <div class="radio_tab_md_wrap">
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_1" v-model="abilityType" value="abil1" />
          <label for="radio_md_1">역량구분 A</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_2" v-model="abilityType" value="abil2" />
          <label for="radio_md_2">역량구분 B</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_3" v-model="abilityType" value="abil3" />
          <label for="radio_md_3">역량구분 C</label>
        </p>
        <p class="radio_tab_md">
          <input type="radio" id="radio_md_4" v-model="abilityType" value="abil4" />
          <label for="radio_md_4">역량구분 D</label>
        </p>
      </div>
      <div class="diag_wrapper">
        <div class="diag_do_section">
          <p class="diag_qus"><span>1.</span>MICE 산업에 대한 전반적인 구조를 이해하고 있다.</p>
          <div class="diag_ans">
            <div class="radio_row">
              <input type="radio" id="radio1_1" class="hidden" v-model="ansRadio1" value="1R" />
              <label for="radio1_1">1번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio1_2" class="hidden" v-model="ansRadio1" value="2R" />
              <label for="radio1_2">2번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio1_3" class="hidden" v-model="ansRadio1" value="3R" />
              <label for="radio1_3">3번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio1_4" class="hidden" v-model="ansRadio1" value="4R" />
              <label for="radio1_4">4번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio1_5" class="hidden" v-model="ansRadio1" value="5R" />
              <label for="radio1_5">5번 보기</label>
            </div>
          </div>
        </div>
        <div class="diag_do_section">
          <p class="diag_qus"><span>2.</span>MICE 산업의 중요성 및 한국 MICE 산업현황을 이해하고 있다.</p>
          <!-- 문항답변이 한줄이면 row 추가 -->
          <div class="diag_ans row">
            <div class="radio_row">
              <input type="radio" id="radio2_1" class="hidden" v-model="ansRadio2" value="1R" />
              <label for="radio2_1">1번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio2_2" class="hidden" v-model="ansRadio2" value="2R" />
              <label for="radio2_2">2번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio2_3" class="hidden" v-model="ansRadio2" value="3R" />
              <label for="radio2_3">3번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio2_4" class="hidden" v-model="ansRadio2" value="4R" />
              <label for="radio2_4">4번 보기</label>
            </div>
            <div class="radio_row">
              <input type="radio" id="radio2_5" class="hidden" v-model="ansRadio2" value="5R" />
              <label for="radio2_5">5번 보기</label>
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
    abilityType2: "abil1",
    ansRadio1: "",
    ansRadio2: "",
    ansRadio3: "",
    ansRadio4: "",
  }),
  methods: {
    // 화면 단위(학습역량) 모든 질문 응답 후 저장 시
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
