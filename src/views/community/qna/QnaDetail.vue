<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">Q&A</h2>
      </div>
    </div>

    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_tit">Q&A 문의 상세보기</h3>
      </div>

      <!-- 문의내용상세 -->
      <div class="qna_wrapper">
        <h4>문의 내용</h4>
        <div class="tbl tbl_row tbl_orange">
          <table>
            <caption>
              Q&A 문의하기
            </caption>
            <colgroup>
              <col style="width: 18%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>문의 제목입니다. 문의드립니다!</td>
              </tr>
              <tr>
                <th scope="row">문의내용</th>
                <td>
                  <div class="min_td">문의 내용입니다.문의 내용입니다.문의 내용입니다.</div>
                </td>
              </tr>
              <tr>
                <th scope="row">첨부파일</th>
                <td>
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 답변달릴시 -->
      <div class="qna_wrapper">
        <h4>답변 내용</h4>
        <div class="tbl tbl_row tbl_orange">
          <table>
            <caption>
              Q&A 답변
            </caption>
            <colgroup>
              <col style="width: 18%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">답변내용</th>
                <td>
                  <div class="min_td">문의 내용입니다.문의 내용입니다.문의 내용입니다.</div>
                </td>
              </tr>
              <tr>
                <th scope="row">첨부파일</th>
                <td>
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">답변일</th>
                <td><span class="date">2024-07-14</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 추가문의시 -->

      <div class="qna_wrapper">
        <h4>추가 문의</h4>
        <div class="tbl tbl_row tbl_orange">
          <table>
            <caption>
              Q&A 문의하기
            </caption>
            <colgroup>
              <col style="width: 18%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>
                  <input type="text" class="form_style wd_p100" placeholder="제목을 입력해주세요." />
                </td>
              </tr>
              <tr>
                <th scope="row">문의내용</th>
                <td>
                  <textarea rows="6" class="form_style wd_p100" placeholder="내용을 입력해주세요."></textarea>
                </td>
              </tr>
              <tr>
                <th scope="row">첨부파일</th>
                <td>
                  <div class="attach_filewrap">
                    <label class="btn_round2 btn_white btn_sm">
                      파일 추가
                      <input type="file" class="hidden" />
                    </label>
                    <div class="attach_file_list">
                      <div class="file_row dp_inline">
                        <div class="file_name">
                          <p>알고리즘수정.hwp</p>
                          <i>145KB</i>
                          <button type="button" class="btn_icon icon_only download">다운로드</button>
                          <button type="button" class="btn_icon icon_only delete" @click="onclickDelete()">삭제</button>
                        </div>
                      </div>
                    </div>
                    <p class="attach_file_info">10mb 이하의 파일 한 개 등록 가능합니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="btn_area">
        <button class="btn_round2 btn_xl btn_white">목록</button>
        <!-- 화면에 따라 버튼 적용 -->
        <button class="btn_round2 btn_xl btn_primary" @click="onclickEdit()">수정</button>
        <button class="btn_round2 btn_xl btn_primary" @click="onclickAsk()">추가문의</button>
        <button class="btn_round2 btn_xl btn_primary" @click="onclickSave()">저장</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    onclickDelete() {
      const vm = this;
      vm.$confirm("첨부파일을 삭제 하겠습니까?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("삭제되었습니다");
        }
      });
    },
    onclickSave() {
      const vm = this;
      vm.$confirm("저장하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("저장되었습니다");
        }
      });
    },
    onclickAsk() {
      const vm = this;
      vm.$confirm("추가 문의 하시겠습니까?", "알림");
    },
    onclickEdit() {
      const vm = this;
      vm.$confirm("수정하시겠습니까?", "알림");
    },
  },
};
</script>
