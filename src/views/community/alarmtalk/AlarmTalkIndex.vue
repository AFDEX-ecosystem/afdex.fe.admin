<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">알림톡</h2>
      </div>
    </div>

    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_tit">알림톡 목록</h3>
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
            <p>알림톡이 없습니다.</p>
          </div>
        </div> -->
        <!-- 내용없을때 -->
        <div class="box">
          <div class="tbl tbl_col">
            <table>
              <caption>
                알림톡
              </caption>
              <colgroup>
                <col style="width: 12%" />
                <col style="width: auto" />
                <col style="width: 20%" />
                <col style="width: 15%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="row">번호</th>
                  <th scope="row">제목</th>
                  <th scope="row">수신일</th>
                  <th scope="row">수신상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10</th>
                  <td>
                    <div class="title_row">
                      <router-link to="/alarmTalk/detail">
                        <p>
                          알림톡 제목입니다 알림톡 제목입니다 알림톡 제목입니다 알림톡 제목입니다 알림톡 제목입니다
                          알림톡 제목입니다 알림톡 제목입니다
                        </p>
                      </router-link>
                    </div>
                  </td>
                  <td>2024-07-12</td>
                  <td class="font_orange">안읽음</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>
                    <div class="title_row">
                      <a href="javascript:void(0);">
                        <p>알림톡 제목입니다</p>
                      </a>
                    </div>
                  </td>
                  <td>2024-07-12</td>
                  <td class="font_orange">안읽음</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>
                    <div class="title_row">
                      <a href="javascript:void(0);">
                        <p>알림톡 제목입니다</p>
                      </a>
                    </div>
                  </td>
                  <td>2024-07-12</td>
                  <td>읽음</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>
                    <div class="title_row">
                      <a href="javascript:void(0);">
                        <p>알림톡 제목입니다</p>
                      </a>
                    </div>
                  </td>
                  <td>2024-07-12</td>
                  <td>읽음</td>
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
