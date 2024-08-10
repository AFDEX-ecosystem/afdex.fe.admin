<template>
  <div class="content_wrap">
    <div class="grid_content portfolio_wrap">
      <div class="page_toparea">
        <h2 class="page_title">포트폴리오</h2>
      </div>
      <!-- 인적사항 PersonalInfo -->
      <div class="sub_section personal_section">
        <div class="personal_grid">
          <div class="intro_box box">
            <div>
              <strong>
                안녕하세요,<br />
                와이즈유님!
              </strong>
              <p class="info"><span>교육대학ㆍ교육학과 </span><span>3학년</span></p>
            </div>
          </div>
          <div class="input_box">
            <div class="section_tit_wrap ta_r">
              <h3 class="section_tit">인적사항</h3>
              <p class="check_row">
                <input type="checkbox" id="check1" class="hidden" />
                <label for="check1">공개</label>
              </p>
            </div>
            <div class="box">
              <div class="input_box_row">
                <div class="input_item">
                  <p class="part required2">이름</p>
                  <input type="text" value="와이즈유" readonly />
                </div>
                <div class="input_item">
                  <p class="part required2">생년월일</p>
                  <input type="text" value="2005.08.31" readonly />
                </div>
                <div class="input_item">
                  <p class="part required2">핸드폰</p>
                  <input type="text" value="010-1234-5678" readonly />
                </div>
              </div>
              <div class="input_box_row">
                <div class="input_item">
                  <p class="part required2">이메일</p>
                  <input type="text" value="wiseuuu@gmail.com" readonly />
                </div>
                <div class="input_item">
                  <p class="part required2">주소</p>
                  <input type="text" value="경기도 고양시 무궁화로 187번길 38 6층 609호" readonly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 학적정보 EnrollmentInfo -->
      <div class="sub_section enrollment_section">
        <div class="section_tit_wrap ta_r">
          <h3 class="section_tit">학적정보</h3>
          <p class="check_row">
            <input type="checkbox" id="check2" class="hidden" />
            <label for="check2">공개</label>
          </p>
        </div>
        <div class="enrollment_grid">
          <div class="enrollment_info box">
            <div>
              <p><strong>학적정보</strong>Information</p>
            </div>
          </div>
          <div class="input_section">
            <div class="profile_img_add">
              <div class="img_wrap">
                <label class="btn_add_photo">
                  <p>프로필 사진</p>
                  <input type="file" class="hidden" />
                </label>
                <img src="@/assets/images/common/img_logo.svg" alt="예시" />
              </div>
            </div>
            <div class="input_item">
              <p class="part required2">출신고등학교</p>
              <input type="text" value="하나고등학교" readonly />
            </div>
            <div class="input_item">
              <p class="part required2">입학구분</p>
              <input type="text" value="신입(2020.03.04)" readonly />
            </div>
            <div class="input_item">
              <p class="part required2">학번</p>
              <input type="text" value="20********" readonly />
            </div>
            <div class="input_item">
              <p class="part required2">내국인/외국인</p>
              <input type="text" value="내국인" readonly />
            </div>
            <div class="input_item">
              <p class="part required2">대학</p>
              <input type="text" value="공과대학" readonly />
            </div>
            <div class="input_item">
              <p class="part required2">학부/과</p>
              <input type="text" value="소프트웨어공학과" readonly />
            </div>
          </div>
        </div>
      </div>
      <!-- 포트폴리오 Portfolio, 자기소개서 CoverLetter -->
      <div class="sub_section portcl_section">
        <div class="portfolio_section">
          <div class="section_tit_wrap">
            <h3 class="section_tit">포트폴리오</h3>
            <div class="title_function">
              <label class="btn_round btn_sm btn_white"> 파일선택 <input type="file" class="hidden" /></label>
              <p class="check_row">
                <input type="checkbox" id="check3" class="hidden" />
                <label for="check3">공개</label>
              </p>
            </div>
          </div>
          <div class="box">
            <div class="portfolio_file_grid">
              <div class="port_file pptx">
                <div class="name">
                  <p>길어지면말줄임길어지면말줄임길어지면말줄임</p>
                  <span>.pptx</span>
                </div>
                <strong class="bytes">115MB</strong>
                <button type="button" class="delete_portfolio btn_icon icon_only">삭제</button>
              </div>
              <div class="port_file pptx">
                <div class="name">
                  <p>길어지면말줄임길어지면말줄임길어지면말줄임</p>
                  <span>.pptx</span>
                </div>
                <strong class="bytes">115MB</strong>
                <button type="button" class="delete_portfolio btn_icon icon_only">삭제</button>
              </div>
              <div class="port_file image">
                <div class="name">
                  <p>플랫폼마케팅 성공요인 분석</p>
                  <span>.jpg</span>
                </div>
                <strong class="bytes">115MB</strong>
                <button type="button" class="delete_portfolio btn_icon icon_only">삭제</button>
              </div>
            </div>
          </div>
        </div>
        <div class="coverletter_section">
          <div class="section_tit_wrap">
            <h3 class="section_tit">
              자기소개서
              <span>대표 자기소개서를 선정해 주세요.</span>
            </h3>
            <div class="title_function">
              <button type="button" class="btn_round btn_sm btn_white" @click="popupShow(7)">등록</button>
              <p class="check_row">
                <input type="checkbox" id="check4" class="hidden" />
                <label for="check4">공개</label>
              </p>
            </div>
          </div>
          <div class="box">
            <div class="cl_grid">
              <div class="cl_item">
                <input type="radio" id="cl_item1" class="hidden" v-model="cl_item" value="1" />
                <label for="cl_item1">
                  <div class="title">
                    <p>자기소개서의 제목입니다</p>
                    <span class="label" v-if="cl_item === '1'">대표</span>
                  </div>
                  <p class="date">2024/03/02</p>
                </label>
              </div>
              <div class="cl_item">
                <input type="radio" id="cl_item2" class="hidden" v-model="cl_item" value="2" />
                <label for="cl_item2">
                  <div class="title">
                    <p>자기소개서의 제목입니다1111 두줄까지 보여짐11</p>
                    <span class="label" v-if="cl_item === '2'">대표</span>
                  </div>
                  <p class="date">2024/03/02</p>
                </label>
              </div>
              <div class="cl_item">
                <input type="radio" id="cl_item3" class="hidden" v-model="cl_item" value="3" />
                <label for="cl_item3">
                  <div class="title">
                    <p>자기소개서의 제목입니다2222</p>
                    <span class="label" v-if="cl_item === '3'">대표</span>
                  </div>
                  <p class="date">2024/03/02</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 와이즈 핵심역량 인증 Awards -->
      <div class="sub_section awards_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">와이즈 핵심역량 인증</h3>
          <div class="title_function">
            <p class="check_row">
              <input type="checkbox" id="check5" class="hidden" />
              <label for="check5">공개</label>
            </p>
          </div>
        </div>
        <div class="arrow_slide paging box">
          <!-- 내용없을때 -->
          <!-- <div class="no_cnt">
            <p>인증이 없습니다</p>
          </div> -->
          <!-- 내용없을때 -->

          <swiper v-bind="swiperOptions" :modules="modules">
            <swiper-slide>
              <!-- 인증달성 : achieved 추가 -->
              <div class="awards_item achieved">
                <p>
                  역량별 우수인재
                  <strong>(지혜로움)</strong>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="awards_item">
                <p>
                  역량별 우수인재
                  <strong>(융합실무)</strong>
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="awards_item achieved">
                <p>최우수인재</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="awards_item achieved">
                <p>올해의 우수인재</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="awards_item">
                <p>와이즈 인재</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="awards_item">
                <p>
                  역량별 우수인재
                  <strong>(융합실무)</strong>
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- 이수학점 SpecInfo -->
      <div class="sub_section spec_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">이수학점</h3>
          <div class="title_function">
            <p class="check_row">
              <input type="checkbox" id="check6" class="hidden" />
              <label for="check6">공개</label>
            </p>
          </div>
        </div>
        <div class="box">
          <div class="spec_status">
            <div class="spec_item">
              <p class="title">전공필수 학점</p>
              <p class="point"><span>80</span>학점</p>
            </div>
            <div class="spec_item">
              <p class="title">전공선택 학점</p>
              <p class="point"><span>22</span>학점</p>
            </div>
            <div class="spec_item">
              <p class="title">교양 학점</p>
              <p class="point"><span>18</span>학점</p>
            </div>
            <div class="spec_item gpa_score">
              <p class="title">학점 평점</p>
              <p class="point"><span>3.17</span>/4.50</p>
            </div>
            <div class="spec_item">
              <p class="title">전체이수 학점</p>
              <p class="point"><span>120</span>학점</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 병역사항 MilitaryStatus -->
      <div class="sub_section military_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">병역사항</h3>
          <div class="title_function">
            <p class="check_row">
              <input type="checkbox" id="check7" class="hidden" />
              <label for="check7">공개</label>
            </p>
          </div>
        </div>
        <div class="box">
          <div class="mili_wrap">
            <div class="mili_item">
              <strong>병역구분</strong>
              <div class="mili_box">
                <div class="radio_row">
                  <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" checked />
                  <label for="radio1">군필</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                  <label for="radio2">미필</label>
                </div>
              </div>
            </div>
            <div class="mili_item">
              <strong>군별</strong>
              <div class="mili_box">
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="1R" id="radio3" class="hidden" checked />
                  <label for="radio3">육군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="2R" id="radio4" class="hidden" />
                  <label for="radio4">공군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="3R" id="radio5" class="hidden" />
                  <label for="radio5">해군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="4R" id="radio6" class="hidden" />
                  <label for="radio6">해병대</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="5R" id="radio7" class="hidden" />
                  <label for="radio7">기타</label>
                  <p>
                    <input type="text" class="form_style" placeholder="입력하세요" />
                  </p>
                </div>
              </div>
            </div>
            <div class="mili_item">
              <strong>입대일 / 전역일</strong>
              <div class="mili_box">
                <div class="search_daywrap flex_fit wd_p100">
                  <div class="wd_200">
                    <VDateInput placeholder="Khanh" v-model="date"></VDateInput>
                  </div>
                  <p class="input_tilde">~</p>
                  <div class="wd_200">
                    <VDateInput v-model="date"></VDateInput>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 자격증어학... Achievements -->
      <div class="sub_section_sm achieve_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">자격증·어학·수상·인턴·해외경험·봉사활동·기타</h3>
          <div class="title_function">
            <p class="check_row">
              <input type="checkbox" id="check8" class="hidden" />
              <label for="check8">공개</label>
            </p>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title lang">외국어</div>
          <div class="circlearrow_slide">
            <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">토익 스피킹 894점</p>
                  <p class="info">
                    <span>2024-09-09</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">아이엘츠 스피킹</p>
                  <p class="info">
                    <span>2024-09-09</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item add_item" @click="popupShow(0)"></div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title license">자격증</div>
          <div class="circlearrow_slide">
            <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">정보처리기사</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">자격증명 두줄까지 자격증명 두줄</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">아이엘츠 스피킹</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">아이엘츠 스피킹</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item add_item" @click="popupShow(1)"></div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title awards">수상내역</div>
          <div class="circlearrow_slide">
            <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">수상내역</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">수상내역</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">수상내역</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">수상내역</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item add_item" @click="popupShow(2)"></div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title volunteer">봉사활동</div>
          <div class="circlearrow_slide">
            <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">봉사활동명</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">봉사활동명</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">봉사활동명</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="achieve_item add_item" @click="popupShow(3)"></div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title intern">인턴경험</div>
          <div class="circlearrow_slide">
            <!-- 내용없을때 -->
            <div class="no_item" @click="popupShow(4)">
              <p>등록된 정보가 없습니다</p>
            </div>
            <!-- 내용없을때 -->
            <!-- <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">HSK 4급</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
            </swiper> -->
          </div>
        </div>

        <div class="achieve_row box">
          <div class="title overseas">해외경험</div>
          <div class="circlearrow_slide">
            <!-- 내용없을때 -->
            <div class="no_item" @click="popupShow(5)">
              <p>등록된 정보가 없습니다</p>
            </div>
            <!-- 내용없을때 -->
            <!-- <swiper v-bind="swiperOptions2" :modules="modules">
              <swiper-slide>
                <div class="achieve_item">
                  <p class="name">HSK 4급</p>
                  <p class="info">
                    <span>2024-09-09</span>
                    <span>발급기관명</span>
                  </p>
                </div>
              </swiper-slide>
            </swiper> -->
          </div>
        </div>
      </div>
      <div class="btn_area ta_r">
        <button class="btn_round2 btn_xl btn_white" @click="popupShow(6)">미리보기</button>
        <button class="btn_round2 btn_xl btn_white" @click="popupShow(8)">공유하기</button>
        <button class="btn_round2 btn_xl btn_primary">저장</button>
      </div>
    </div>
  </div>

  <!-- 외국어 점수 등록 -->
  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>외국어 점수 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(0)">닫기</button>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(0)">삭제</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(0)">저장</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">시험명</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">점수</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">응시일</th>
          <td>
            <div class="search_daywrap wd_p100">
              <VDateInput v-model="date" placeholder="시작일"></VDateInput>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[1]" class="medium">
    <template #title>자격증 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(1)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(1)">저장</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">자격증명</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">발급일</th>
          <td>
            <div class="search_daywrap wd_p100">
              <VDateInput v-model="date" placeholder="시작일"></VDateInput>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">발급기관</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[2]" class="medium">
    <template #title>수상 내역 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(2)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(2)">저장</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">수상명</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">수상일</th>
          <td>
            <div class="search_daywrap wd_p100">
              <VDateInput v-model="date" placeholder="시작일"></VDateInput>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">수상기관</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[3]" class="medium">
    <template #title>봉사활동 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(3)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(3)">저장</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">봉사활동명</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">봉사시간</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">봉사기간</th>
          <td>
            <div class="search_daywrap flex_fit wd_p100">
              <div class="wd_200">
                <VDateInput v-model="date"></VDateInput>
              </div>
              <p class="input_tilde">~</p>
              <div class="wd_200">
                <VDateInput v-model="date"></VDateInput>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">봉사기관</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[4]" class="medium">
    <template #title>인턴 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(4)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(4)">저장</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 22%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">인턴 기간</th>
          <td>
            <div class="search_daywrap flex_fit wd_p100">
              <div class="wd_200">
                <VDateInput v-model="date"></VDateInput>
              </div>
              <p class="input_tilde">~</p>
              <div class="wd_200">
                <VDateInput v-model="date"></VDateInput>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">인턴 기간(개월)</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[5]" class="medium">
    <template #title>해외 경험 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(5)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(5)">저장</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          등록 테이블
        </caption>
        <colgroup>
          <col style="width: 22%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">해외경험 제목</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        <tr>
          <th scope="row">기간(개월)</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[6]" class="xlarge">
    <template #title>포트폴리오 미리보기</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(6)">닫기</button>
    </template>
    <div class="popup_portfolio">
      <!-- 인적사항 PersonalInfo -->
      <div class="sub_section personal_section">
        <div class="personal_grid">
          <div class="intro_box box">
            <div>
              <strong>
                안녕하세요,<br />
                와이즈유님!
              </strong>
              <p class="info"><span>교육대학ㆍ교육학과 </span><span>3학년</span></p>
            </div>
          </div>
          <div class="input_box">
            <div class="box">
              <div class="input_box_row">
                <div class="input_item">
                  <p class="part">이름</p>
                  <input type="text" value="와이즈유" readonly />
                </div>
                <div class="input_item">
                  <p class="part">생년월일</p>
                  <input type="text" value="2005.08.31" readonly />
                </div>
                <div class="input_item">
                  <p class="part">핸드폰</p>
                  <input type="text" value="010-1234-5678" readonly />
                </div>
              </div>
              <div class="input_box_row">
                <div class="input_item">
                  <p class="part">이메일</p>
                  <input type="text" value="wiseuuu@gmail.com" readonly />
                </div>
                <div class="input_item">
                  <p class="part">주소</p>
                  <input type="text" value="경기도 고양시 무궁화로 187번길 38 6층 609호" readonly />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 학적정보 EnrollmentInfo -->
      <div class="sub_section enrollment_section">
        <div class="section_tit_wrap ta_r">
          <h3 class="section_tit">학적정보</h3>
        </div>
        <div class="enrollment_grid">
          <div class="enrollment_info box">
            <div>
              <p><strong>학적정보</strong>Information</p>
            </div>
          </div>
          <div class="input_section">
            <div class="profile_img_add">
              <div class="img_wrap">
                <label class="btn_add_photo">
                  <p>프로필 사진</p>
                  <input type="file" class="hidden" />
                </label>
                <img src="@/assets/images/common/img_logo.svg" alt="예시" />
              </div>
            </div>
            <div class="input_item">
              <p class="part">출신고등학교</p>
              <input type="text" value="하나고등학교" readonly />
            </div>
            <div class="input_item">
              <p class="part">입학구분</p>
              <input type="text" value="신입(2020.03.04)" readonly />
            </div>
            <div class="input_item">
              <p class="part">학번</p>
              <input type="text" value="20********" readonly />
            </div>
            <div class="input_item">
              <p class="part">내국인/외국인</p>
              <input type="text" value="내국인" readonly />
            </div>
            <div class="input_item">
              <p class="part">대학</p>
              <input type="text" value="공과대학" readonly />
            </div>
            <div class="input_item">
              <p class="part">학부/과</p>
              <input type="text" value="소프트웨어공학과" readonly />
            </div>
          </div>
        </div>
      </div>
      <!-- 포트폴리오 Portfolio, 자기소개서 CoverLetter -->
      <div class="sub_section portcl_section">
        <div class="portfolio_section">
          <div class="section_tit_wrap">
            <h3 class="section_tit">포트폴리오</h3>
          </div>
          <div class="box">
            <div class="portfolio_file_grid">
              <div class="port_file pptx">
                <div class="name">
                  <p>길어지면말줄임길어지면말줄임길어지면말줄임</p>
                  <span>.pptx</span>
                </div>
                <strong class="bytes">115MB</strong>
              </div>
              <div class="port_file pptx">
                <div class="name">
                  <p>길어지면말줄임길어지면말줄임길어지면말줄임</p>
                  <span>.pptx</span>
                </div>
                <strong class="bytes">115MB</strong>
              </div>
              <div class="port_file image">
                <div class="name">
                  <p>플랫폼마케팅 성공요인 분석</p>
                  <span>.jpg</span>
                </div>
                <strong class="bytes">115MB</strong>
              </div>
            </div>
          </div>
        </div>
        <div class="coverletter_section">
          <div class="section_tit_wrap">
            <h3 class="section_tit">자기소개서</h3>
          </div>
          <div class="box">
            <div class="cl_grid">
              <div class="cl_item">
                <input type="radio" id="cl_item1" class="hidden" v-model="cl_item" value="1" />
                <label for="cl_item1">
                  <div class="title">
                    <p>자기소개서의 제목입니다</p>
                    <span class="label" v-if="cl_item === '1'">대표</span>
                  </div>
                  <p class="date">2024/03/02</p>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 와이즈 핵심역량 인증 Awards -->
      <div class="sub_section awards_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">와이즈 핵심역량 인증</h3>
        </div>
        <div class="arrow_slide paging box">
          <!-- 내용없을때 -->
          <!-- <div class="no_cnt">
            <p>인증이 없습니다</p>
          </div> -->
          <!-- 내용없을때 -->
          <div class="awards_wrap">
            <div class="awards_item achieved">
              <p>
                역량별 우수인재
                <strong>(지혜로움)</strong>
              </p>
            </div>
            <div class="awards_item">
              <p>
                역량별 우수인재
                <strong>(융합실무)</strong>
              </p>
            </div>
            <div class="awards_item achieved">
              <p>최우수인재</p>
            </div>
            <div class="awards_item achieved">
              <p>올해의 우수인재</p>
            </div>
            <div class="awards_item">
              <p>와이즈 인재</p>
            </div>
            <div class="awards_item achieved">
              <p>올해의 우수인재</p>
            </div>
            <div class="awards_item">
              <p>와이즈 인재</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 이수학점 SpecInfo -->
      <div class="sub_section spec_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">이수학점</h3>
        </div>
        <div class="box">
          <div class="spec_status">
            <div class="spec_item">
              <p class="title">전공필수 학점</p>
              <p class="point"><span>80</span>학점</p>
            </div>
            <div class="spec_item">
              <p class="title">전공선택 학점</p>
              <p class="point"><span>22</span>학점</p>
            </div>
            <div class="spec_item">
              <p class="title">교양 학점</p>
              <p class="point"><span>18</span>학점</p>
            </div>
            <div class="spec_item gpa_score">
              <p class="title">학점 평점</p>
              <p class="point"><span>3.17</span>/4.50</p>
            </div>
            <div class="spec_item">
              <p class="title">전체이수 학점</p>
              <p class="point"><span>120</span>학점</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 병역사항 MilitaryStatus -->
      <div class="sub_section military_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">병역사항</h3>
        </div>
        <div class="box">
          <div class="mili_wrap">
            <div class="mili_item">
              <strong>병역구분</strong>
              <div class="mili_box">
                <div class="radio_row">
                  <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" checked />
                  <label for="radio1">군필</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                  <label for="radio2">미필</label>
                </div>
              </div>
            </div>
            <div class="mili_item">
              <strong>군별</strong>
              <div class="mili_box">
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="1R" id="radio3" class="hidden" checked />
                  <label for="radio3">육군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="2R" id="radio4" class="hidden" />
                  <label for="radio4">공군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="3R" id="radio5" class="hidden" />
                  <label for="radio5">해군</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="4R" id="radio6" class="hidden" />
                  <label for="radio6">해병대</label>
                </div>
                <div class="radio_row">
                  <input type="radio" v-model="radioValue2" value="5R" id="radio7" class="hidden" />
                  <label for="radio7">기타</label>
                  <p>
                    <input type="text" class="form_style" placeholder="입력하세요" />
                  </p>
                </div>
              </div>
            </div>
            <div class="mili_item">
              <strong>입대일 / 전역일</strong>
              <div class="mili_box">
                <div class="search_daywrap flex_fit wd_p100">
                  <div class="wd_200">
                    <VDateInput v-model="date"></VDateInput>
                  </div>
                  <p class="input_tilde">~</p>
                  <div class="wd_200">
                    <VDateInput v-model="date"></VDateInput>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 자격증어학... Achievements -->
      <div class="sub_section_sm achieve_section">
        <div class="section_tit_wrap">
          <h3 class="section_tit">자격증·어학·수상·인턴·해외경험·봉사활동·기타</h3>
        </div>
        <div class="achieve_row box">
          <div class="title lang">외국어</div>
          <div class="achieve_wrap">
            <div class="achieve_item">
              <p class="name">토익 스피킹 894점</p>
              <p class="info">
                <span>2024-09-09</span>
              </p>
            </div>
            <div class="achieve_item">
              <p class="name">토익 스피킹 894점</p>
              <p class="info">
                <span>2024-09-09</span>
              </p>
            </div>
            <div class="achieve_item">
              <p class="name">토익 스피킹 894점</p>
              <p class="info">
                <span>2024-09-09</span>
              </p>
            </div>
            <div class="achieve_item">
              <p class="name">토익 스피킹 894점</p>
              <p class="info">
                <span>2024-09-09</span>
              </p>
            </div>
            <div class="achieve_item">
              <p class="name">토익 스피킹 894점</p>
              <p class="info">
                <span>2024-09-09</span>
              </p>
            </div>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title license">자격증</div>
          <div class="achieve_wrap">
            <div class="achieve_item">
              <p class="name">정보처리기사</p>
              <p class="info">
                <span>2024-09-09</span>
                <span>발급기관명</span>
              </p>
            </div>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title awards">수상내역</div>
          <div class="achieve_wrap">
            <div class="achieve_item">
              <p class="name">수상내역</p>
              <p class="info">
                <span>2024-09-09</span>
                <span>발급기관명</span>
              </p>
            </div>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title volunteer">봉사활동</div>
          <div class="achieve_wrap">
            <div class="achieve_item">
              <p class="name">봉사활동명</p>
              <p class="info">
                <span>2024-09-09</span>
                <span>발급기관명</span>
              </p>
            </div>
            <div class="achieve_item">
              <p class="name">봉사활동명</p>
              <p class="info">
                <span>2024-09-09</span>
                <span>발급기관명</span>
              </p>
            </div>
          </div>
        </div>
        <div class="achieve_row box">
          <div class="title intern">인턴경험</div>
          <div class="achieve_wrap">
            <!-- 내용없을때 -->
            <div class="no_item">
              <p>등록된 정보가 없습니다</p>
            </div>
            <!-- 내용없을때 -->
          </div>
        </div>

        <div class="achieve_row box">
          <div class="title overseas">해외경험</div>
          <div class="achieve_wrap">
            <!-- 내용없을때 -->
            <div class="no_item">
              <p>등록된 정보가 없습니다</p>
            </div>
            <!-- 내용없을때 -->
          </div>
        </div>
      </div>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[7]">
    <template #title>자기소개서 등록</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(5)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(5)">저장</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(5)">임시저장</button>
    </template>
    <div class="tbl tbl_row tbl_addrow">
      <table>
        <caption>
          자기소개서 등록
        </caption>
        <colgroup>
          <col style="width: 24%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row" class="required2">자기소개서 제목</th>
          <td>
            <input type="text" class="form_style wd_p100" placeholder="제목을 입력해주세요." />
          </td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>
            <div class="sub_cnt_row">
              <div class="sub_cnt">
                <strong class="required2">소제목</strong>
                <input type="text" class="form_style wd_p100" placeholder="제목을 입력해주세요." />
              </div>
              <div class="sub_cnt">
                <strong class="required2">내용</strong>
                <textarea class="form_style wd_p100" rows="8" placeholder="내용을 입력해주세요."></textarea>
              </div>
              <button type="button" class="btn_icon icon_only btn_add_row">항목추가</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td>
            <div class="sub_cnt_row">
              <div class="sub_cnt">
                <strong class="required2">소제목</strong>
                <input type="text" class="form_style wd_p100" placeholder="제목을 입력해주세요." />
              </div>
              <div class="sub_cnt">
                <strong class="required2">내용</strong>
                <textarea class="form_style wd_p100" rows="8" placeholder="내용을 입력해주세요."></textarea>
              </div>
              <button type="button" class="btn_icon icon_only btn_del_row">항목삭제</button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[8]" class="small">
    <template #title>포트폴리오 공유하기</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(8)">닫기</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          QR & URL
        </caption>
        <colgroup>
          <col style="width: 25%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
        <tr>
          <th scope="row">QR</th>
          <td>
            <div class="qr_wrap">
              <img src="@/assets/images/common/img_qrcode.png" class="dp_block mg_b10" />
              <button type="button" class="btn_round btn_sm btn_white mg_5">PNG 다운로드</button>
              <button type="button" class="btn_round btn_sm btn_white mg_5">JPG 다운로드</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">URL</th>
          <td>
            <button type="button" class="btn_round btn_sm btn_white mg_5">URL 복사</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";
import PopupView from "@/components/common/PopupView.vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    VDateInput,
    Swiper,
    SwiperSlide,
    PopupView,
  },
  data: () => ({
    isPopups: [false],
    date: "",
    cl_item: "",
    radioValue1: "",
    radioValue2: "",
    modules: [Navigation, Pagination],
    swiperOptions: {
      navigation: true,
      pagination: true,
      breakpoints: {
        1279: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3.2,
          spaceBetween: 12,
        },
        600: {
          slidesPerView: 2.2,
          spaceBetween: 12,
        },
      },
      slidesPerView: 1.5,
      spaceBetween: 12,
    },
    swiperOptions2: {
      navigation: true,
      breakpoints: {
        1279: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2.4,
          spaceBetween: 8,
        },
        480: {
          slidesPerView: 1.8,
          spaceBetween: 8,
        },
      },
      slidesPerView: 1.2,
      spaceBetween: 12,
    },
  }),
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
  },
};
</script>
