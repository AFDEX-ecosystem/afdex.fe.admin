<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">사회봉사 신청</h2>
      </div>
      <div class="qna_wrapper">
        <h4>상세 내용</h4>
        <div class="tbl tbl_row tbl_orange">
          <table>
            <caption>
              사회봉사 신청 상세내용
            </caption>
            <colgroup>
              <col style="width: 18%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">봉사유형</th>
                <td>교내외</td>
              </tr>
              <tr>
                <th scope="row">봉사제목</th>
                <td>제목이 표시됩니다.</td>
              </tr>
              <tr>
                <th scope="row">봉사내용</th>
                <td>
                  <div class="min_td medium">입력한 내용이 표시됩니다.</div>
                </td>
              </tr>
              <tr>
                <th scope="row">인정봉사시간</th>
                <td>4시간</td>
              </tr>
              <tr>
                <th scope="row">봉사기간</th>
                <td>2024-09-09 ~ 2024-09-10</td>
              </tr>
              <tr>
                <th scope="row">활동시간 및 요일</th>
                <td>수 [09시 ]:[30분 ]</td>
              </tr>
              <tr>
                <th scope="row">모집기간</th>
                <td>2024-07-01 ~ 2024-07-30</td>
              </tr>
              <tr>
                <th scope="row">모집인원</th>
                <td>100명</td>
              </tr>
              <tr>
                <th scope="row">봉사대상</th>
                <td>아동/청소년</td>
              </tr>
              <tr>
                <th scope="row">봉사분야</th>
                <td>주거환경, 상담</td>
              </tr>
              <tr>
                <th scope="row">봉사장소</th>
                <td>관리자에서 입력한 내용이 표시됩니다.</td>
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
                <th scope="row">URL</th>
                <td>
                  <p class="title_row">
                    <a href="https://www.ysu.ac.kr/kor/Main.do">https://www.ysu.ac.kr/kor/Main.do</a>
                  </p>
                </td>
              </tr>
              <tr>
                <th scope="row">담당자 성명</th>
                <td>홍길동</td>
              </tr>
              <tr>
                <th scope="row">담당자 연락처</th>
                <td>02-1234-1234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="btn_area">
        <button class="btn_round2 btn_xl btn_white">목록</button>
        <button class="btn_round2 btn_xl btn_primary" @click="onclickCancel()">신청 취소</button>
        <button class="btn_round2 btn_xl btn_primary" @click="onclickApply()">사회봉사 신청</button>
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
    onclickApply() {
      const vm = this;
      vm.$confirm("사회봉사 신청하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("신청 됐습니다.");
        }
      });
    },
    onclickCancel() {
      const vm = this;
      vm.$confirm("신청을 취소하시겠어요?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("신청 취소됐습니다.");
        }
      });
    },
  },
};
</script>
