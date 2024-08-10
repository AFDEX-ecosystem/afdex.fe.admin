<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">만족도 조사 참여하기</h2>
      </div>
      <div class="satis_wrap">
        <div class="diag_desc box">
          <div class="top">
            <div><strong>조사명</strong>24년도 학교구성원 만족도조사_학생용</div>
            <div><strong>문항수</strong>11</div>
            <div><strong>응시기간</strong>2024-07-22 00:00 ~ 2024-07-27 17:30</div>
          </div>
          <div class="bottom editor_area">
            <ul class="list_line">
              <li>조사 내용 안내글입니다.</li>
              <li>조사 내용 안내글입니다.</li>
            </ul>
          </div>
        </div>
        <div class="box">
          <div class="diag_qus">
            <div class="qus_header">
              <strong class="qus_num">01.</strong>
              <p class="qus_tit">만족도 질문입니다.</p>
            </div>
            <!-- [pp] Case 1: 객관식 문항-->
            <div class="qus_cnt">
              <div class="radio_row">
                <input type="radio" name="qus_radio1" id="qus1_1" class="hidden" />
                <label for="qus1_1">1. 선형 회귀</label>
              </div>
              <div class="radio_row">
                <input type="radio" name="qus_radio1" id="qus1_2" class="hidden" />
                <label for="qus1_2">2. K-평균 군집화</label>
              </div>
              <div class="radio_row">
                <input type="radio" name="qus_radio1" id="qus1_3" class="hidden" />
                <label for="qus1_3">3. 의사결정 트리</label>
              </div>
              <div class="radio_row">
                <input type="radio" name="qus_radio1" id="qus1_4" class="hidden" />
                <label for="qus1_4">4. k-최근접 이웃</label>
              </div>
            </div>
          </div>
          <div class="diag_qus">
            <div class="qus_header">
              <strong class="qus_num">02.</strong>
              <p class="qus_tit">만족도 문항입니다.</p>
            </div>
            <!-- [pp] Case 2: 선다형 문항-->
            <div class="qus_cnt">
              <div class="check_row">
                <input type="checkbox" name="qus_check" id="qus2_1" class="hidden" checked />
                <label for="qus2_1">1. MLP (다층 퍼셉트론)</label>
              </div>
              <div class="check_row">
                <input type="checkbox" name="qus_check" id="qus2_2" class="hidden" />
                <label for="qus2_2">2. RNN (순환 신경망)</label>
              </div>
              <div class="check_row">
                <input type="checkbox" name="qus_check" id="qus2_3" class="hidden" />
                <label for="qus2_3">3. CNN (합성곱 신경망)</label>
              </div>
              <div class="check_row">
                <input type="checkbox" name="qus_check" id="qus2_4" class="hidden" />
                <label for="qus2_4">4. GAN (적대적 생성 신경망)</label>
              </div>
            </div>
          </div>
          <div class="diag_qus">
            <div class="qus_header">
              <strong class="qus_num">03.</strong>
              <p class="qus_tit">만족도 주관식입니다.</p>
            </div>
            <!-- [pp] Case 3: 주관식 문항-->
            <div class="qus_cnt">
              <input type="text" class="form_style wd_p100" placeholder="입력해주세요" />
            </div>
          </div>
        </div>
        <div class="btn_area ta_r">
          <button type="button" class="btn_round2 btn_white btn_xl">이전</button>
          <button type="button" class="btn_round2 btn_primary btn_xl">다음</button>
          <button type="button" class="btn_round2 btn_primary btn_xl">제출</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>
