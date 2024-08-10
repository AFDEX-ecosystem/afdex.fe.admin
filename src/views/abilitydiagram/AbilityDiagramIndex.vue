<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">역량체계도 소개</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section_sm">
        <div class="radio_tab_md_wrap">
          <p class="radio_tab_md">
            <input type="radio" id="radio_md_1" v-model="radioTab" value="r1" />
            <label for="radio_md_1">핵심역량소개</label>
          </p>
          <p class="radio_tab_md">
            <input type="radio" id="radio_md_2" v-model="radioTab" value="r2" />
            <label for="radio_md_2">전공능력소개</label>
          </p>
        </div>
      </div>
      <div class="sub_section">
        <div v-if="radioTab === 'r1'">
          <!-- 핵심역량소개 -->
          <div class="core_ability_wrap">
            <div class="core_ability wisdom">
              <div class="title_box">
                <router-link to="/abilityDiagram/detail"> 자세히 보기</router-link>
                <p class="title">지혜로움<span>wisdom</span></p>
                <p class="info">
                  스스로의 가치에 대한 자아 정체성을 성립하고, 인간과 생명에 대한 성찰을 통해 인간의 본질을 탐구하며,
                  세상을 이롭게 하는 윤리적인 삶과 행복을 추구하는 역량
                </p>
              </div>
              <div class="info_box">
                <div class="info_item">
                  <p class="title">W-1 자아정체성</p>
                  <p class="info">
                    자신에 대한 자아인식과 탐색으로 스스로의 가치를 중요하게 생각하고 자아성찰을 통해 자신을 일관되게
                    믿고 신뢰하는 능력
                  </p>
                  <ul>
                    <li>자아인식</li>
                    <li>자아탐색</li>
                    <li>자아존중</li>
                    <li>자아성찰</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">W-2 인간본질탐구</p>
                  <p class="info">
                    인문학적 소양을 통해 다양한 삶과 생명 존중을 이해하고 인간 존엄적인 사고로 행복을 추구하는 능력
                  </p>
                  <ul>
                    <li>인문학적소양</li>
                    <li>생명존중</li>
                    <li>인간존엄적사고</li>
                    <li>행복추구</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">W-3 윤리적 실천</p>
                  <p class="info">
                    윤리와 시민의식을 바탕으로 민주시민의 역할과 사회적 책임을 다하고 행복을 추구하는 능력
                  </p>
                  <ul>
                    <li>윤리의식</li>
                    <li>시민의식</li>
                    <li>준법정신</li>
                    <li>행복나눔</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="core_ability interpersonal">
              <div class="title_box">
                <a href="javascript:void(0);">자세히 보기</a>
                <p class="title">공감<span>Interpersonal Skill</span></p>
                <p class="info">
                  타인에 대한 이해와 상호작용을 통해 공동체 구성원으로 명확한 의사소통과 원만한 관계를 형성하고,
                  세계시민으로서 다양한 글로벌 활동들을 영위하는 역량
                </p>
              </div>
              <div class="info_box">
                <div class="info_item">
                  <p class="title">I-1 의사소통능력</p>
                  <p class="info">
                    상대방의 생각이나 의견을 주의 깊게 경청하고 이해하며, 자신의 의사를 명확하게 전달하면서 의사소통
                    과정에서 발생하는 다양한 의견을 조정하여 최적의 의견을 이끌어내는 능력
                  </p>
                  <ul>
                    <li>타인경청</li>
                    <li>주제이행</li>
                    <li>의사표현</li>
                    <li>집단지성</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">I-2 대인관계능력</p>
                  <p class="info">
                    타인의 상황을 이해하고 배려하며 감사하는 마음가짐을 갖고 책임감을 통해 긍정적인 관계 형성은 물론
                    공동체 내에서 주도적인 역할까지 수행할 수 있는 능력
                  </p>
                  <ul>
                    <li>타인배려,감사</li>
                    <li>관계형성</li>
                    <li>갈등관리</li>
                    <li>리더십</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">I-3 글로벌능력</p>
                  <p class="info">
                    세계시민으로서 문화적 보편성과 다양성을 수용하고 세계인들과의 소통과 화합을 위한 커뮤니케이션을 할
                    수 있는 능력
                  </p>
                  <ul>
                    <li>글로벌 공동체 이해</li>
                    <li>글로벌 감수성</li>
                    <li>글로벌 활동</li>
                    <li>글로벌 언어 활용</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="core_ability selfpath">
              <div class="title_box">
                <a href="javascript:void(0);">자세히 보기</a>
                <p class="title">자기주도<span>Self-path building</span></p>
                <p class="info">
                  자신의 삶에 대한 책임감을 바탕으로 생애 목표를 설정하고, 주도적 학습과 진로 개척을 통해 스스로 꿈을
                  실현하며 지속적으로 성장해 나가는 역량
                </p>
              </div>
              <div class="info_box">
                <div class="info_item">
                  <p class="title">S-1 학습주도능력</p>
                  <p class="info">
                    자신의 학습요구를 파악하고 스스로 목표를 설정하여 책임감을 갖고 목표 달성을 위해 학습전략을 수립하고
                    실행하며 성찰하는 능력
                  </p>
                  <ul>
                    <li>학습요구 분석</li>
                    <li>학습목표 설계</li>
                    <li>학습실행</li>
                    <li>학습성찰</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">S-2 진로주도능력</p>
                  <p class="info">
                    자신의 진로를 탐색하고, 설계하며 실현될 수 있도록 생애 절반에 걸쳐 필요한 역량을 증진하고 마음과
                    생활을 관리하는 능력
                  </p>
                  <ul>
                    <li>진로탐색</li>
                    <li>진로설계</li>
                    <li>진로역량 개발</li>
                    <li>경력관리</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">S-3 변혁주도능력</p>
                  <p class="info">
                    사회변화에 관심을 갖고 디지털 신기술을 활용하여 미래사회의 변화에 탄력적으로 대응하고 변화와 혁신을
                    주도하는 능력
                  </p>
                  <ul>
                    <li>혁신수용</li>
                    <li>디지털활용</li>
                    <li>변화대응</li>
                    <li>혁신주도</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="core_ability entrepreneurship">
              <div class="title_box">
                <a href="javascript:void(0);">자세히 보기</a>
                <p class="title">융합실무<span>Entrepreneurship</span></p>
                <p class="info">
                  급변하는 환경에서 학문·신기술 융합을 통해 변화 요구에 탄력적으로 대응하고, 실무 현장에서 지역·산학을
                  연계하여 미래사회의 혁신적 융합인재로 도약해 나가는 역량
                </p>
              </div>
              <div class="info_box">
                <div class="info_item">
                  <p class="title">E-1 학문간 융합능력</p>
                  <p class="info">
                    자신에 대한 자아인식과 탐색으로 스스로의 가치를 중요하게 생각하고 자아성찰을 통해 자신을 일관되게
                    믿고 신뢰하는 능력
                  </p>
                  <ul>
                    <li>다문학적 소양</li>
                    <li>개방적 사고</li>
                    <li>융합적 사고</li>
                    <li>신기술 융합능력</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">E-2 실무문제해결 능력</p>
                  <p class="info">
                    통합적 문제분석을 통해 원인을 파악하고 문제해결에 적합한 지원을 활용하여 지역 및 현장의 문제를
                    해결하는 능력
                  </p>
                  <ul>
                    <li>문제이해 능력</li>
                    <li>정보활용 능력</li>
                    <li>현장적용 능력</li>
                    <li>지역연계 능력</li>
                  </ul>
                </div>
                <div class="info_item">
                  <p class="title">E-3 기업가 정신</p>
                  <p class="info">
                    미래의 불확실성과 높은 위험에도 불구하고 창업의지를 가지고 창의적 아이디어를 제시하며 창업역량개발을
                    통해 새로운 가치를 창조하는 정신
                  </p>
                  <ul>
                    <li>창업의지</li>
                    <li>창의적 아이디어</li>
                    <li>창업역량 개발</li>
                    <li>창업도전</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="radioTab === 'r2'">
          <!-- 전공능력소개 -->
          <div class="radio_text_sm_wrap">
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm1" v-model="abilityType" value="abil1" />
              <label for="radio_text_sm1">호텔관광대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm2" v-model="abilityType" value="abil2" />
              <label for="radio_text_sm2">Art&Technology대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm3" v-model="abilityType" value="abil3" />
              <label for="radio_text_sm3">창조인재대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm4" v-model="abilityType" value="abil4" />
              <label for="radio_text_sm4">스마트공과대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm5" v-model="abilityType" value="abil5" />
              <label for="radio_text_sm5">보건의료대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm6" v-model="abilityType" value="abil6" />
              <label for="radio_text_sm6">미래융합대학</label>
            </p>
            <p class="radio_text_sm">
              <input type="radio" id="radio_text_sm7" v-model="abilityType" value="abil7" />
              <label for="radio_text_sm7">성인학습자융합교육원</label>
            </p>
          </div>
          <div class="major_ability_wrap">
            <div class="hakgua_title">
              <p class="name">호텔관광대학 학과</p>
              <p class="info">학과를 선택하시면 전공능력 정의서가 표시됩니다.</p>
            </div>
            <div class="hakgua_tab_wrap">
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab1" v-model="hakguaTab" value="hakgua1" />
                <label for="hakgua_tab1">융합전공(마이스엘리트)</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab2" v-model="hakguaTab" value="hakgua2" />
                <label for="hakgua_tab2">호텔경영학과</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab3" v-model="hakguaTab" value="hakgua3" />
                <label for="hakgua_tab3">외식경영학과</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab4" v-model="hakguaTab" value="hakgua4" />
                <label for="hakgua_tab4">조리예술학부</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab5" v-model="hakguaTab" value="hakgua5" />
                <label for="hakgua_tab5">관광컨벤션학과</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab6" v-model="hakguaTab" value="hakgua6" />
                <label for="hakgua_tab6">호텔경영학과</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab7" v-model="hakguaTab" value="hakgua7" />
                <label for="hakgua_tab7">항공관광학과</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab8" v-model="hakguaTab" value="hakgua8" />
                <label for="hakgua_tab8">스포츠공무원학부</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab9" v-model="hakguaTab" value="hakgua9" />
                <label for="hakgua_tab9">서양조리전공</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab10" v-model="hakguaTab" value="hakgua10" />
                <label for="hakgua_tab10">융합전공(국제크루즈)</label>
              </p>
              <p class="hakgua_tab">
                <input type="radio" id="hakgua_tab11" v-model="hakguaTab" value="hakgua11" />
                <label for="hakgua_tab11">융합전공(국제크루즈)</label>
              </p>
            </div>
            <div class="major_ability_cnt">
              <div class="sub_section">
                <div class="section_tit_wrap">
                  <h4 class="section_tit_md">융합전공 (마이스엘리트융합전공)</h4>
                </div>
                <div class="box">
                  <div class="tbl tbl_col tbl_gray scrollx_tbl_lg">
                    <table>
                      <caption>
                        역량체계도 소개
                      </caption>
                      <colgroup>
                        <col style="width: 15%" />
                        <col style="width: 14%" />
                        <col style="width: 18%" />
                        <col style="width: 14%" />
                        <col style="width: 18%" />
                        <col style="width: auto" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th scope="row" rowspan="2">인재양성유형</th>
                          <th scope="row" colspan="2">전공능력</th>
                          <th scope="row" colspan="2">하위능력</th>
                          <th scope="row" rowspan="2">구성요소</th>
                        </tr>
                        <tr>
                          <th scope="row">능력</th>
                          <th scope="row">정의</th>
                          <th scope="row">능력</th>
                          <th scope="row">정의</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" rowspan="4" class="bd_b">
                            <p class="hakgua_name">
                              글로벌 관광<br />
                              전문가
                            </p>
                          </th>
                          <td rowspan="2">
                            <p>
                              글로벌 관광<br />
                              서비스 운영 관리
                            </p>
                          </td>
                          <td rowspan="2">
                            <p>글로벌 관광 서비스를 원활하게 제공하고 통합적 사고로 문제를 해결할 수 있는 능력</p>
                          </td>
                          <td>
                            <p>글로벌 관광 고객 서비스 지원 능력</p>
                          </td>
                          <td>
                            <p>글로벌 관광 고객 서비스 운영을 지원하는 능력</p>
                          </td>
                          <td rowspan="4" class="bd_b">
                            <ul>
                              <li>1. 관광 서비스 품질 관리</li>
                              <li>2. 관광 소비자 행동 분석</li>
                              <li>3. 재방문 고객 창출</li>
                              <li>4. 고객 정보 파악</li>
                              <li>5. 관광 마케팅</li>
                              <li>6. 관광 서비스</li>
                              <li>7. 관광 자원 관리</li>
                              <li>8. 외국어 소통 업무 능력</li>
                              <li>9. 관광 실무 영어</li>
                              <li>10. 글로벌 에티켓</li>
                              <li>11. 언어의 이해</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>글로벌 관광 전문 지식</p>
                          </td>
                          <td>
                            <p>
                              글로벌 관광 산업에 대한 기본 지식을 바탕으로 관광기획, 마케팅과 서비스 등 관광분야 전반을
                              기획하고 관리할 수 있는 능력
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" class="bd_b">
                            <p>
                              글로벌 고객<br />
                              관리 능력
                            </p>
                          </td>
                          <td>
                            <p>다문화에 대한 이해를 바탕으로 글로벌 고객을 이해하고 서비스를 지원하는 운영관리 능력</p>
                          </td>
                          <td>
                            <p>외국어 의사소통 능력</p>
                          </td>
                          <td>
                            <p>외국어를 기반으로 의사소통하여 업무를 처리할 수 있는 능력</p>
                          </td>
                        </tr>
                        <tr>
                          <td class="bd_b">
                            <p>글로벌 환경에 적응하고 언어적 (외국어), 문서적으로 원활히 의사소통하며 협업하는 능력</p>
                          </td>
                          <td class="bd_b"><p>다문화 이해 능력</p></td>
                          <td class="bd_b"><p>다국적 고개과 직원들의 문화 차이를 이해하고 존중하는 태도</p></td>
                        </tr>
                        <!--  -->

                        <tr>
                          <th scope="row" rowspan="4" class="bd_b">
                            <p class="hakgua_name">
                              글로벌 서비스<br />
                              전문가
                            </p>
                          </th>
                          <td rowspan="2">
                            <p>글로벌 호텔 전문 지식 및 상품 기획 능력</p>
                          </td>
                          <td rowspan="2">
                            <p>
                              객실 식음료, 글로벌 호텔 운영 시스템을 이해하고 실무 능력의 함양을 통해 실무에 적용할 수
                              있는 인재로서의 역량
                            </p>
                          </td>
                          <td>
                            <p>호텔 전문 지식 및 마케팅 전략 수립</p>
                          </td>
                          <td>
                            <p>
                              호텔 경영과 관련된 학문적 지식과 경영 능력을 갖춘 경영자가 호텔 경영 분야에 대한 관리 및
                              마케팅 전략을 수립하는 능력
                            </p>
                          </td>
                          <td rowspan="4" class="bd_b">
                            <ul>
                              <li>12. 호텔의 경영 형태와 체인화 이해</li>
                              <li>13. 호텔 경영 조직 및 호텔 용어 이해</li>
                              <li>14. 객실 시설 관리</li>
                              <li>15. 객실 운영 관리</li>
                              <li>16. 온라인 커뮤니케이션 관리</li>
                              <li>17. 경쟁사 동향 파악</li>
                              <li>18. 시장조사</li>
                              <li>19. 마케팅 환경 분석</li>
                              <li>20. 마케팅 전략 수립</li>
                              <li>21. 고객 기호 파악</li>
                              <li>22. 고객 욕구 파악</li>
                              <li>23. 상품 추천</li>
                              <li>24. 글로벌 식재료의 영양학적 이해</li>
                              <li>25. 식문화에 대한 이해</li>
                              <li>26. 외식 상품 개발 및 외식 산업의 이해</li>
                              <li>27. 아시아 식문화에 대한 이해</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>마케팅 전략 수립 및 기획</p>
                          </td>
                          <td>
                            <p>
                              매출을 극대화 하기 위해 마케팅 계획, 마케팅 활동, 마케팅 성과 분석을 원활하게 수행하는
                              능력
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td rowspan="2" class="bd_b">
                            <p>
                              글로벌 외식<br />
                              경영 능력
                            </p>
                          </td>
                          <td rowspan="2" class="bd_b">
                            <p>
                              소비자를 유치하고 고객 만족을 극대화 하기 위한 마케팅, 소비자 행동, 고객 서비스 및 외식
                              브랜드를 관리하는 능력
                            </p>
                          </td>
                          <td>
                            <p>글로벌 고객 관리 능력</p>
                          </td>
                          <td>
                            <p>
                              소비자를 유치하고 고객 만족을 극대화 하기 위한 마케팅, 소비자 행동, 고객 서비스 및 외식
                              브랜드를 관리하는 능력
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="bd_b">
                            <p>글로벌 식문화 이해 및 상품 개발 능력</p>
                          </td>
                          <td class="bd_b">
                            <p>다양한 글로벌 식문화를 이해하고, 외식 상품을 기획, 개발, 판촉할 수 있는 능력</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    radioTab: "r1",
    abilityType: "abil1",
    hakguaTab: "hakgua1",
  }),
};
</script>
