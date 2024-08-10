<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">학습 SDL</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section_md">
        <div class="diag_intro learn_sdl">
          <div>
            멘토링 활동의 가장 중요한 사항은 학업 저성취자의 학교적응 및 학습습관 만들기입니다.<br />
            목표를 향해 달려가기 위해 결과보고회 및 결과물 제출을 하고 있지 않습니다. 활동에 최선을 다해주시기를
            부탁드립니다.
          </div>
        </div>
      </div>
      <div class="learn_grid">
        <div class="learn_apply_wrap">
          <div class="section_tit_wrap">
            <h4 class="section_tit">학습 SDL 신청 목록</h4>
            <div class="title_function">
              <button type="button" class="btn_round btn_md btn_primary" @click="$router.push('/learnSdl/detail')">
                학습 SDL 신청
              </button>
            </div>
          </div>
          <div class="box test_result">
            <!-- 결과 없을 경우 표출 -->
            <!--  
              <div class="test_before">
                <div>
                  <p>내용이 없습니다.</p>
                </div>
              </div>
            -->
            <ul class="testresult_list">
              <li>
                <router-link to="/learnSdl/detail">
                  <p class="title">[해운대캠퍼스] 학습튜터링 팀명 AAA</p>
                  <div class="function">
                    <p class="date">신청일<span>2024.04.11</span></p>
                    <span class="label orange">신청중</span>
                  </div>
                </router-link>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p class="title">[해운대캠퍼스] 학습튜터링 팀명 AAA</p>
                  <div class="function">
                    <p class="date">신청일<span>2024.04.11</span></p>
                    <span class="label">응시완료</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <p class="title">[양산캠퍼스] 학습튜터링 팀명 AAA</p>
                  <div class="function">
                    <p class="date">신청일<span>2024.04.11</span></p>
                    <span class="label">반려</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="learn_state_wrap">
          <div class="section_tit_wrap">
            <h4 class="section_tit">학습 SDL 진행 목록</h4>
          </div>
          <div class="box">
            <!-- 결과 없을 경우 표출 -->
            <!--  
              <div class="test_before">
                <div>
                  <p>내용이 없습니다.</p>
                </div>
              </div>
            -->
            <router-link to="/learnSdl/detail" class="learn_state_item">
              <div class="title">
                <p>[해운대캠퍼스] 학습 SDL 팀명 AAA <span class="label orange">신청중</span></p>
              </div>
              <div class="state_box">
                <p>학습보고서</p>
                <ul>
                  <!-- 완료주차 on 추가, 마지막 완료시점에 pin 추가 -->
                  <li class="on">1주차</li>
                  <li class="on">2주차</li>
                  <li class="on">3주차<span class="pin"></span></li>
                  <li>4주차</li>
                  <li>5주차</li>
                </ul>
              </div>
            </router-link>
            <a href="javascript:void(0);" class="learn_state_item">
              <div class="title">
                <p>[해운대캠퍼스] 학습 SDL 팀명 AAA <span class="label">종료</span></p>
              </div>
              <div class="state_box">
                <p>학습보고서</p>
                <ul>
                  <!-- 완료주차 on 추가, 마지막 완료시점에 pin 추가 -->
                  <li class="on">1주차</li>
                  <li class="on">2주차</li>
                  <li class="on">3주차</li>
                  <li class="on">4주차</li>
                  <li class="on">5주차<span class="pin"></span></li>
                </ul>
              </div>
            </a>
            <a href="javascript:void(0);" class="learn_state_item">
              <div class="title">
                <p>[해운대캠퍼스] 학습튜터링 팀명 AAA <span class="label orange">신청중</span></p>
              </div>
              <div class="state_box">
                <p>학습보고서</p>
                <ul>
                  <!-- 완료주차 on 추가, 마지막 완료시점에 pin 추가 -->
                  <li>1주차</li>
                  <li>2주차</li>
                  <li>3주차</li>
                  <li>4주차</li>
                  <li>5주차</li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
