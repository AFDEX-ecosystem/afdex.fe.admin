<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">핵심역량진단</h2>
        <div class="language_tab title_function">
          <div class="radio_tab_wrap">
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
          핵심역량진단입니다. <br />
          편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
        </div>
      </div>
      <div class="section_tit_wrap">
        <div class="section_tit_md">핵심역량진단 설문지</div>
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
      <div class="radio_text_sm_wrap">
        <p class="radio_text_sm">
          <input type="radio" id="radio_text_sm1" v-model="abilityType2" value="abil1" />
          <label for="radio_text_sm1">1. 하위역량 A</label>
        </p>
        <p class="radio_text_sm">
          <input type="radio" id="radio_text_sm2" v-model="abilityType2" value="abil2" />
          <label for="radio_text_sm2">2. 하위역량 B</label>
        </p>
        <p class="radio_text_sm">
          <input type="radio" id="radio_text_sm3" v-model="abilityType2" value="abil3" />
          <label for="radio_text_sm3">3. 하위역량 C</label>
        </p>
        <p class="radio_text_sm">
          <input type="radio" id="radio_text_sm4" v-model="abilityType2" value="abil4" />
          <label for="radio_text_sm4">3. 하위역량 D</label>
        </p>
      </div>
      <div class="sub_section_md">
        <div class="box">
          <div class="section_tit_wrap">
            <h3 class="section_tit_xxs">상황스토리</h3>
          </div>
          <p class="lh_22">
            대학 OO 교양 수업에서 ‘자신은 어떤 사람인가’를 소개해야 합니다. 자신의 성격과 적성뿐만 아니라 일상 생활 속
            자신의 행동과 감정 등을 생각해보고 스스로 어떤 사람인가를 글로 표현해야 합니다. 이런 상황을 염두에 두고 다음
            질문으로 자신의 역량을 진단해 보시기 바랍니다.
          </p>
        </div>
      </div>
      <div class="diag_wrapper">
        <div class="core_qus_section">
          <p class="diag_qus">
            <span>1.</span>당신은 스스로의 성격과 가치관, 능력 등에 대하여 어떻게 생각하고 있습니까?
          </p>
          <div class="box">
            <div class="tbl tbl_row tbl_diag">
              <table>
                <caption>
                  핵심역량진단질문
                </caption>
                <colgroup>
                  <col style="width: 10.5%" />
                  <col style="width: auto" />
                  <col style="width: 7%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">5수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있으며, 단점을 극복하고 성장(발전)하기
                      위해 다양한 방법으로 실천한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_1" class="hidden" v-model="ansRadio1" value="1R" />
                        <label for="radio1_1">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있고, 단점을 극복하고자 노력한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_2" class="hidden" v-model="ansRadio1" value="2R" />
                        <label for="radio1_2">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알지만 단점을 꼭 개선하지 않는다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_3" class="hidden" v-model="ansRadio1" value="3R" />
                        <label for="radio1_3">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2수준</th>
                    <td>
                      나의 성격과 가치관, 능력에 대해 생각하지만 내가 어떤 사람인지 잘 알지 못한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_4" class="hidden" v-model="ansRadio1" value="4R" />
                        <label for="radio1_4">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1수준</th>
                    <td>
                      나 자신에 대하여 생각해 본 적이 없다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_5" class="hidden" v-model="ansRadio1" value="5R" />
                        <label for="radio1_5">5수준</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="core_qus_section">
          <p class="diag_qus">
            <span>2.</span>당신은 스스로의 성격과 가치관, 능력 등에 대하여 어떻게 생각하고 있습니까?
          </p>
          <div class="box">
            <div class="tbl tbl_row tbl_diag">
              <table>
                <caption>
                  핵심역량진단질문
                </caption>
                <colgroup>
                  <col style="width: 10.5%" />
                  <col style="width: auto" />
                  <col style="width: 7%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">5수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있으며, 단점을 극복하고 성장(발전)하기
                      위해 다양한 방법으로 실천한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_1" class="hidden" v-model="ansRadio1" value="1R" />
                        <label for="radio1_1">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있고, 단점을 극복하고자 노력한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_2" class="hidden" v-model="ansRadio1" value="2R" />
                        <label for="radio1_2">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알지만 단점을 꼭 개선하지 않는다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_3" class="hidden" v-model="ansRadio1" value="3R" />
                        <label for="radio1_3">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2수준</th>
                    <td>
                      나의 성격과 가치관, 능력에 대해 생각하지만 내가 어떤 사람인지 잘 알지 못한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_4" class="hidden" v-model="ansRadio1" value="4R" />
                        <label for="radio1_4">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1수준</th>
                    <td>
                      나 자신에 대하여 생각해 본 적이 없다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_5" class="hidden" v-model="ansRadio1" value="5R" />
                        <label for="radio1_5">5수준</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="core_qus_section">
          <p class="diag_qus">
            <span>3.</span>당신은 스스로의 성격과 가치관, 능력 등에 대하여 어떻게 생각하고 있습니까?
          </p>
          <div class="box">
            <div class="tbl tbl_row tbl_diag">
              <table>
                <caption>
                  핵심역량진단질문
                </caption>
                <colgroup>
                  <col style="width: 10.5%" />
                  <col style="width: auto" />
                  <col style="width: 7%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">5수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있으며, 단점을 극복하고 성장(발전)하기
                      위해 다양한 방법으로 실천한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_1" class="hidden" v-model="ansRadio1" value="1R" />
                        <label for="radio1_1">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있고, 단점을 극복하고자 노력한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_2" class="hidden" v-model="ansRadio1" value="2R" />
                        <label for="radio1_2">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알지만 단점을 꼭 개선하지 않는다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_3" class="hidden" v-model="ansRadio1" value="3R" />
                        <label for="radio1_3">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2수준</th>
                    <td>
                      나의 성격과 가치관, 능력에 대해 생각하지만 내가 어떤 사람인지 잘 알지 못한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_4" class="hidden" v-model="ansRadio1" value="4R" />
                        <label for="radio1_4">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1수준</th>
                    <td>
                      나 자신에 대하여 생각해 본 적이 없다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_5" class="hidden" v-model="ansRadio1" value="5R" />
                        <label for="radio1_5">5수준</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="core_qus_section">
          <p class="diag_qus">
            <span>4.</span>당신은 스스로의 성격과 가치관, 능력 등에 대하여 어떻게 생각하고 있습니까?
          </p>
          <div class="box">
            <div class="tbl tbl_row tbl_diag">
              <table>
                <caption>
                  핵심역량진단질문
                </caption>
                <colgroup>
                  <col style="width: 10.5%" />
                  <col style="width: auto" />
                  <col style="width: 7%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">5수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있으며, 단점을 극복하고 성장(발전)하기
                      위해 다양한 방법으로 실천한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_1" class="hidden" v-model="ansRadio1" value="1R" />
                        <label for="radio1_1">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알고 있고, 단점을 극복하고자 노력한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_2" class="hidden" v-model="ansRadio1" value="2R" />
                        <label for="radio1_2">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3수준</th>
                    <td>
                      나의 성격과 가치관, 능력을 통해 내가 어떤 사람인지 알지만 단점을 꼭 개선하지 않는다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_3" class="hidden" v-model="ansRadio1" value="3R" />
                        <label for="radio1_3">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2수준</th>
                    <td>
                      나의 성격과 가치관, 능력에 대해 생각하지만 내가 어떤 사람인지 잘 알지 못한다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_4" class="hidden" v-model="ansRadio1" value="4R" />
                        <label for="radio1_4">5수준</label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1수준</th>
                    <td>
                      나 자신에 대하여 생각해 본 적이 없다
                      <p></p>
                    </td>
                    <td class="td_radio_btn">
                      <div class="radio_row">
                        <input type="radio" id="radio1_5" class="hidden" v-model="ansRadio1" value="5R" />
                        <label for="radio1_5">5수준</label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="core_qus_section">
          <p class="diag_qus">
            <span>5.</span>
            주관식 문제 질문입니다. 답변을 입력해주세요.
          </p>
          <div class="box">
            <div class="tbl tbl_row tbl_diag">
              <table>
                <caption>
                  핵심역량진단질문
                </caption>
                <colgroup>
                  <col style="width: 10.5%" />
                  <col style="width: auto" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">답변</th>
                    <td>
                      <input type="text" class="form_style wd_p100" placeholder="답변을 입력해주세요" />
                    </td>
                  </tr>
                </tbody>
              </table>
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
