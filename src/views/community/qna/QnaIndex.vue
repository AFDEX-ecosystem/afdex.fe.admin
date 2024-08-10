<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">Q&A</h2>
      </div>
    </div>

    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_tit">Q&A 목록</h3>
      </div>
      <div class="search_box">
        <div class="search_section">
          <div class="search_toggle lg center flip">
            <div class="left">
              <p class="total_count">총 <strong>103</strong>개의 게시물이 있습니다.</p>
            </div>
            <div class="right">
              <div class="search_row">
                <input type="search" class="form_style wd_p100" placeholder="제목 및 내용을 검색하세요" />
                <button type="button" class="btn_search btn_icon icon_only">검색</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub_section">
        <!-- 내용없을때 -->
        <!-- <div class="no_list">
          <div>
            <p>Q&A가 없습니다.</p>
          </div>
        </div> -->
        <!-- 내용없을때 -->
        <div class="box">
          <div class="toggle_wrap">
            <div class="left"></div>
            <div class="right">
              <router-link to="/qna/ask" class="btn_round2 btn_md btn_primary">문의하기</router-link>
            </div>
          </div>
          <div class="tbl tbl_col scrollx_tbl_xxs">
            <table>
              <caption>
                Q&A
              </caption>
              <colgroup>
                <col style="width: 12%" />
                <col style="width: auto" />
                <col style="width: 12%" />
                <col style="width: 18%" />
                <col style="width: 10%" />
                <col style="width: 12%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="row">번호</th>
                  <th scope="row">제목</th>
                  <th scope="row">작성자</th>
                  <th scope="row">등록일</th>
                  <th scope="row">조회수</th>
                  <th scope="row">처리현황</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10</th>
                  <td>
                    <div class="title_row">
                      <router-link to="/qna/detail">
                        <p>
                          질문에 대한 제목입니다 질문에 대한 제목입니다 질문에 대한 제목입니다 질문에 대한 제목입니다
                        </p>
                        <span class="locked">아이콘</span>
                      </router-link>
                    </div>
                  </td>
                  <td>내가쓴글</td>
                  <td>2024-07-12</td>
                  <td>5,111</td>
                  <td>미답변</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>
                    <div class="title_row">
                      <router-link to="/qna/detail">
                        <p>
                          질문에 대한 제목입니다 질문에 대한 제목입니다 질문에 대한 제목입니다 질문에 대한 제목입니다
                        </p>
                        <span class="locked">아이콘</span>
                      </router-link>
                    </div>
                  </td>
                  <td>내가쓴글</td>
                  <td>2024-07-12</td>
                  <td>5,111</td>
                  <td>답변완료</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>
                    <div class="title_row">
                      <a href="javascript:void(0);">
                        <p>질문에 대한 제목입니다</p>
                      </a>
                    </div>
                  </td>
                  <td>홍길동</td>
                  <td>2024-07-12</td>
                  <td>5,111</td>
                  <td>미답변</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>
                    <div class="title_row">
                      <a href="javascript:void(0);">
                        <p>질문에 대한 제목입니다</p>
                      </a>
                    </div>
                  </td>
                  <td>홍길동</td>
                  <td>2024-07-12</td>
                  <td>5,111</td>
                  <td>추가문의</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PaginationUi />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    PaginationUi,
  },
};
</script>
