<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">학습 SDL</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section">
        <div class="sub_section_sm">
          <div class="radio_tab_md_wrap">
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_1" v-model="radioTab" value="r1" />
              <label for="radio_md_1">참여신청서</label>
            </p>
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_2" v-model="radioTab" value="r2" />
              <label for="radio_md_2">활동계획서</label>
            </p>
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_3" v-model="radioTab" value="r3" />
              <label for="radio_md_3">학습보고서</label>
            </p>
          </div>
        </div>
        <div v-if="radioTab === 'r1'">
          <div class="sub_section_sm">
            <div class="box">
              <div class="section_tit_wrap">
                <h4 class="section_tit_xxs">팀 정보</h4>
              </div>
              <div class="tbl tbl_row tbl_orange">
                <table>
                  <caption>
                    팀 정보
                  </caption>
                  <colgroup>
                    <col style="width: 18%" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">팀명</th>
                      <td><input type="text" class="form_style wd_p100" placeholder="팀명을 입력해주세요." /></td>
                    </tr>
                    <tr>
                      <th scope="row">캠퍼스</th>
                      <td>
                        <div class="select_row lg">
                          <vue-select class="select_box md"></vue-select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="sub_section_sm">
            <div class="box">
              <div class="section_tit_wrap">
                <h4 class="section_tit_xxs">멘토 정보</h4>
                <p class="mg_t5 font_orange font_13">※ 학생정보는 학사시스템 정보로 연동되어 자동입력됩니다.</p>
              </div>
              <div class="tbl tbl_row tbl_orange scrollx_tbl_xs">
                <table>
                  <caption>
                    멘토 정보
                  </caption>
                  <colgroup>
                    <col style="width: 18%" />
                    <col style="width: 32%" />
                    <col style="width: 18%" />
                    <col style="width: 32%" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">멘토이름</th>
                      <td>권용현</td>
                      <th scope="row">학번</th>
                      <td>2015123456</td>
                    </tr>
                    <tr>
                      <th scope="row">직전학기 평균평점</th>
                      <td>-</td>
                      <th scope="row">학년</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">소속 단과대학</th>
                      <td>-</td>
                      <th scope="row">소속 학과</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">연락처(휴대폰)</th>
                      <td>-</td>
                      <th scope="row">예금주</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">은행명</th>
                      <td>-</td>
                      <th scope="row">계좌번호</th>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">직전학기 교수학습 프로그램 참여 여부</th>
                      <td>
                        <p class="radio_row">
                          <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" />
                          <label for="radio1">참여</label>
                        </p>
                        <p class="radio_row">
                          <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                          <label for="radio2">미참여</label>
                        </p>
                      </td>
                      <th scope="row">참여한 프로그램명</th>
                      <td>
                        <input type="text" class="form_style wd_p100" placeholder="프로그램명을 입력해주세요." />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">통장사본 첨부</th>
                      <td>
                        <div class="attach_filewrap">
                          <label class="btn_round2 btn_white btn_sm">
                            파일 선택 <input type="file" class="hidden"
                          /></label>
                          <div class="attach_file_list">
                            <div class="file_row dp_inline">
                              <div class="file_name">
                                <p>알고리즘수정.hwp</p>
                                <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                ><button type="button" class="btn_icon icon_only delete">삭제</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="attach_file_info mg_t5">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                      </td>
                      <th scope="row">성적표 첨부</th>
                      <td>
                        <div class="attach_filewrap">
                          <label class="btn_round2 btn_white btn_sm">
                            파일 선택 <input type="file" class="hidden"
                          /></label>
                          <div class="attach_file_list">
                            <div class="file_row dp_inline">
                              <div class="file_name">
                                <p>알고리즘수정.hwp</p>
                                <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                ><button type="button" class="btn_icon icon_only delete">삭제</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="sub_section_sm">
            <div class="box">
              <div class="section_tit_wrap">
                <div class="toggle_wrap">
                  <div class="left">
                    <h4 class="section_tit_xxs">멘티 정보</h4>
                  </div>
                  <div class="right">
                    <button type="button" class="btn_round btn_md btn_secondary mg_l5">멘티 추가하기</button>
                  </div>
                </div>
                <p class="mg_t5 font_orange font_13">※ 학생정보는 학사시스템 정보로 연동되어 자동입력됩니다.</p>
                <p class="font_orange font_13">※ 학습SDL은 멘토1명, 멘티 3명 이상으로 구성할 수 있습니다.</p>
              </div>
              <div class="sub_section_md">
                <div class="tbl tbl_row tbl_orange scrollx_tbl_xs">
                  <table>
                    <caption>
                      멘티 정보
                    </caption>
                    <colgroup>
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">멘티1 이름</th>
                        <td>
                          <span class="dp_inline pd_5">멘티를 선택해주세요.</span>
                          <button type="button" class="btn_round btn_sm btn_bo_primary mg_l5" @click="popupShow(0)">
                            멘티 선택
                          </button>
                        </td>
                        <th scope="row">학번</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 평균평점</th>
                        <td></td>
                        <th scope="row">학년</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">소속 단과대학</th>
                        <td></td>
                        <th scope="row">소속 학과</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">연락처(휴대폰)</th>
                        <td></td>
                        <th scope="row">예금주</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">은행명</th>
                        <td></td>
                        <th scope="row">계좌번호</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 교수학습 프로그램 참여 여부</th>
                        <td>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" />
                            <label for="radio1">참여</label>
                          </p>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                            <label for="radio2">미참여</label>
                          </p>
                        </td>
                        <th scope="row">참여한 프로그램명</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="프로그램명을 입력해주세요." />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">통장사본 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                        <th scope="row">성적표 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="sub_section_md">
                <div class="tbl tbl_row tbl_orange scrollx_tbl_xs">
                  <table>
                    <caption>
                      멘티 정보
                    </caption>
                    <colgroup>
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">멘티2 이름</th>
                        <td>
                          <span class="dp_inline pd_5">멘티를 선택해주세요.</span>
                          <button type="button" class="btn_round btn_sm btn_bo_primary mg_l5" @click="popupShow(0)">
                            멘티 선택
                          </button>
                        </td>
                        <th scope="row">학번</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 평균평점</th>
                        <td></td>
                        <th scope="row">학년</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">소속 단과대학</th>
                        <td></td>
                        <th scope="row">소속 학과</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">연락처(휴대폰)</th>
                        <td></td>
                        <th scope="row">예금주</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">은행명</th>
                        <td></td>
                        <th scope="row">계좌번호</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 교수학습 프로그램 참여 여부</th>
                        <td>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" />
                            <label for="radio1">참여</label>
                          </p>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                            <label for="radio2">미참여</label>
                          </p>
                        </td>
                        <th scope="row">참여한 프로그램명</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="프로그램명을 입력해주세요." />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">통장사본 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                        <th scope="row">성적표 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="sub_section_md">
                <div class="tbl tbl_row tbl_orange scrollx_tbl_xs">
                  <table>
                    <caption>
                      멘티 정보
                    </caption>
                    <colgroup>
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                      <col style="width: 18%" />
                      <col style="width: 32%" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">멘티3 이름</th>
                        <td>
                          <span class="dp_inline pd_5">멘티를 선택해주세요.</span>
                          <button type="button" class="btn_round btn_sm btn_bo_primary mg_l5" @click="popupShow(0)">
                            멘티 선택
                          </button>
                        </td>
                        <th scope="row">학번</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 평균평점</th>
                        <td></td>
                        <th scope="row">학년</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">소속 단과대학</th>
                        <td></td>
                        <th scope="row">소속 학과</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">연락처(휴대폰)</th>
                        <td></td>
                        <th scope="row">예금주</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">은행명</th>
                        <td></td>
                        <th scope="row">계좌번호</th>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row">직전학기 교수학습 프로그램 참여 여부</th>
                        <td>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" />
                            <label for="radio1">참여</label>
                          </p>
                          <p class="radio_row">
                            <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                            <label for="radio2">미참여</label>
                          </p>
                        </td>
                        <th scope="row">참여한 프로그램명</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="프로그램명을 입력해주세요." />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">통장사본 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                        <th scope="row">성적표 첨부</th>
                        <td>
                          <div class="attach_filewrap">
                            <label class="btn_round2 btn_white btn_sm">
                              파일 선택 <input type="file" class="hidden"
                            /></label>
                            <div class="attach_file_list">
                              <div class="file_row dp_inline">
                                <div class="file_name">
                                  <p>알고리즘수정.hwp</p>
                                  <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                                  ><button type="button" class="btn_icon icon_only delete">삭제</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="btn_area">
            <button type="button" class="btn_xl btn_round2 btn_white">신청 취소</button>
            <button type="button" class="btn_xl btn_round2 btn_primary" @click="onclickSave()">
              저장 및 활동계획서 작성
            </button>
          </div>
        </div>
        <div v-if="radioTab === 'r2'">
          <div class="sub_section_sm">
            <div class="box">
              <div class="section_tit_wrap">
                <h4 class="section_tit_xxs">활동계획서</h4>
              </div>
              <div class="tbl tbl_row tbl_orange scrollx_tbl_xxs">
                <table>
                  <caption>
                    활동계획서
                  </caption>
                  <colgroup>
                    <col style="width: 16%" />
                    <col style="width: 14%" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th scope="row">팀 소개</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">학습교과목명</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">활동 주체 및 학습목표</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" rowspan="6">
                        주차별 활동계획
                        <p class="font_14 mg_t5 font_orange">※ 1주~5주 작성은 필수</p>
                      </th>
                      <th scope="row" class="ta_c">주차</th>
                      <th scope="row" class="ta_c">내용</th>
                    </tr>
                    <tr>
                      <td class="ta_c">1주차</td>
                      <td>
                        <textarea rows="2" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td class="ta_c">2주차</td>
                      <td>
                        <textarea rows="2" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td class="ta_c">3주차</td>
                      <td>
                        <textarea rows="2" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td class="ta_c">4주차</td>
                      <td>
                        <textarea rows="2" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td class="ta_c">5주차</td>
                      <td>
                        <textarea rows="2" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">추가 활동 주체 및 학습 목표(선택입력)</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">학습방법</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">참고도서</th>
                      <td colspan="2">
                        <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="btn_area">
            <button type="button" class="btn_xl btn_round2 btn_white">신청 취소</button>
            <button type="button" class="btn_xl btn_round2 btn_primary" @click="onclickSave2()">학습 SDL 신청</button>
          </div>
        </div>
        <div v-if="radioTab === 'r3'" class="report_wrap">
          <div class="accordion">
            <p class="acd_tit">1주차 학습보고서</p>
            <div class="acd_cnt">
              <div class="acd_inner">
                <div class="tbl tbl_row tbl_orange scrollx_tbl_xs">
                  <table>
                    <caption>
                      학습보고서
                    </caption>
                    <colgroup>
                      <col style="width: 16%" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                      <tr>
                        <th scope="row">교과목</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">이번 주 학습목표</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">학습장소</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">학습활동 진행내용</th>
                        <td>
                          <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">느낀점 · 배운점 감사 나누기</th>
                        <td>
                          <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">다음 주 활동 계획<br />(선택입력)</th>
                        <td>
                          <input type="text" class="form_style wd_p100" placeholder="" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">학습수행 증거 사진</th>
                        <td>
                          <div class="add_ci">
                            <!-- <img src="@/assets/images/common/img_ex1.png" alt="예시이미지" /> -->
                            <label class="btn_add_ci">
                              <p>이미지를<br />등록해주세요</p>
                              <input type="file" class="hidden" />
                            </label>
                            <button type="button" class="btn_delete"></button>
                          </div>
                          <p class="attach_file_info">※ 10mb 이하의 이미지(jpg, png) 파일 등록 가능합니다.</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="btn_area">
                  <button type="button" class="btn_xl btn_round2 btn_primary" @click="onclickSave3()">저장</button>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion">
            <p class="acd_tit">2주차 학습보고서</p>
            <div class="acd_cnt">
              <div class="acd_inner"></div>
            </div>
          </div>
          <div class="accordion">
            <p class="acd_tit">3주차 학습보고서</p>
            <div class="acd_cnt">
              <div class="acd_inner"></div>
            </div>
          </div>
          <div class="accordion">
            <p class="acd_tit">4주차 학습보고서</p>
            <div class="acd_cnt">
              <div class="acd_inner"></div>
            </div>
          </div>
          <div class="accordion">
            <p class="acd_tit">5주차 학습보고서</p>
            <div class="acd_cnt">
              <div class="acd_inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PopupView v-model="isPopups[0]" class="large">
    <template #title>멘티 선택</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(0)">닫기</button>
    </template>
    <div class="sub_section_sm">
      <div class="section_tit_wrap">
        <h4 class="section_tit_xs">검색</h4>
      </div>
      <div class="search_row mg_0 wd_p100">
        <input
          type="search"
          class="form_style wd_p100"
          placeholder="이름, 학번, 전화번호 뒤 4자리를 활용하여 검색해주세요."
        />
        <button type="button" class="btn_search btn_icon icon_only">검색</button>
      </div>
    </div>
    <div class="sub_section_xs">
      <div class="section_tit_wrap">
        <h4 class="section_tit_xs">목록</h4>
      </div>
      <div class="tbl tbl_col">
        <table>
          <caption>
            멘티목록
          </caption>
          <colgroup>
            <col style="width: 20%" />
            <col style="width: auto" />
            <col style="width: 18%" />
            <col style="width: 14%" />
            <col style="width: 14%" />
            <col style="width: 14%" />
          </colgroup>
          <thead>
            <tr>
              <th scope="row">단과대학</th>
              <th scope="row">학과</th>
              <th scope="row">학생이름</th>
              <th scope="row">학번</th>
              <th scope="row">전화번호</th>
              <th scope="row">선택</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" colspan="6">
                <p class="medium font_gray min_td">※ 검색을 통해 멘티를 선택해주세요.</p>
              </th>
            </tr>
            <tr>
              <th scope="row">호텔관광대학</th>
              <td>호텔경영학과</td>
              <td>권용현</td>
              <td>123456789</td>
              <td>010-****-1234</td>
              <td><button type="button" class="font_orange" @click="onclickSelect()">[선택]</button></td>
            </tr>
            <tr>
              <th scope="row">호텔관광대학</th>
              <td>호텔경영학과</td>
              <td>김시원</td>
              <td>123456789</td>
              <td>010-****-1234</td>
              <td><button type="button" class="font_orange">[선택]</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import { accordion } from "@/assets/js/common";
import PopupView from "@/components/common/PopupView.vue";
export default {
  components: {
    PopupView,
  },
  data: () => ({
    radioTab: "r1",
    radioValue1: "",
    isPopups: [false],
  }),
  watch: {
    radioTab() {
      this.$nextTick(() => {
        accordion();
      });
    },
  },
  mounted() {
    this.$nextTick(() => {
      accordion();
    });
  },
  methods: {
    onclickSave() {
      const vm = this;
      vm.$confirm("저장하시겠습니까?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("저장되었습니다.<br /> 활동계획서 작성 화면으로 이동합니다.");
        }
      });
    },
    onclickSave2() {
      const vm = this;
      vm.$confirm("학습 SDL을 신청하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("신청되었습니다.<br /> 담당자 승인 여부는 목록에서 확인 가능합니다.");
        }
      });
    },
    onclickSave3() {
      const vm = this;
      vm.$confirm("저장하시겠습니까?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("저장되었습니다.");
        }
      });
    },
    onclickSelect() {
      const vm = this;
      vm.$confirm("권용현 학생을 선택하시겠어요?", "알림");
    },
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
