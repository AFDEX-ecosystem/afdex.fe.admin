import authMiddleware from "@/middleware/auth";

const cmmnRoute = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    meta: {
      title: 'Layout',
      middleware: [authMiddleware],
    },
    children: [
      /** UI 가이드 */
      {
        path: "/guide",
        component: () => import("@/views/guide/ClientGuideIndex.vue"),
      },
      /** 포트폴리오 */
      {
        path: "/portfolio",
        component: () => import("@/views/portfolio/PortfolioIndex.vue"),
      },
      /** 역량체계도 소개 */
      {
        path: "/abilityDiagram",
        component: () => import("@/views/abilitydiagram/AbilityDiagramIndex.vue"),
      },
      {
        path: "/abilityDiagram/detail",
        component: () => import("@/views/abilitydiagram/AbilityDiagramDetail.vue"),
      },
      /** 진단 */
      {
        path: "/diag",
        redirect: "/diag/coreAbility",
      },
      {
        path: "/diag/coreAbility",
        component: () => import("@/views/diag/coreAbilDiag/CoreAbilityDiagIndex.vue"),
      },
      {
        path: "/diag/coreAbility/do",
        component: () => import("@/views/diag/coreAbilDiag/CoreAbilityDiagDo.vue"),
      },
      {
        path: "/diag/coreAbility/result",
        component: () => import("@/views/diag/coreAbilDiag/CoreAbilityDiagResult.vue"),
      },
      {
        path: "/diag/majorAbility",
        component: () => import("@/views/diag/majorAbilDiag/MajorAbilityDiagIndex.vue"),
      },
      {
        path: "/diag/majorAbility/do",
        component: () => import("@/views/diag/majorAbilDiag/MajorAbilityDiagDo.vue"),
      },
      {
        path: "/diag/majorAbility/result",
        component: () => import("@/views/diag/majorAbilDiag/MajorAbilityDiagResult.vue"),
      },
      {
        path: "/diag/learnAbility",
        component: () => import("@/views/diag/learnAbilDiag/LearnAbilityDiagIndex.vue"),
      },
      {
        path: "/diag/learnAbility/do",
        component: () => import("@/views/diag/learnAbilDiag/LearnAbilityDiagDo.vue"),
      },
      {
        path: "/diag/learnAbility/result",
        component: () => import("@/views/diag/learnAbilDiag/LearnAbilityDiagResult.vue"),
      },
      {
        path: "/diag/basicAbility",
        component: () => import("@/views/diag/basicAbilDiag/BasicAbilityDiagIndex.vue"),
      },
      {
        path: "/diag/basicAbility/do",
        component: () => import("@/views/diag/basicAbilDiag/BasicAbilityDiagDo.vue"),
      },
      {
        path: "/diag/basicAbility/result",
        component: () => import("@/views/diag/basicAbilDiag/BasicAbilityDiagResult.vue"),
      },
      {
        path: "/diag/sltTest",
        component: () => import("@/views/diag/sltTest/SltTestIndex.vue"),
      },
      {
        path: "/diag/catTest",
        component: () => import("@/views/diag/catTest/CatTestIndex.vue"),
      },
      {
        path: "/diag/satisRsch",
        component: () => import("@/views/diag/satisRsch/SatisRschIndex.vue"),
      },
      {
        path: "/diag/satisRsch/do",
        component: () => import("@/views/diag/satisRsch/SatisRschDo.vue"),
      },
      {
        path: "/diag/satisRsch/result",
        component: () => import("@/views/diag/satisRsch/SatisRschResult.vue"),
      },

      /** 역량개발 */
      {
        path: "/abilityDevelop",
        redirect: "/learnTutoring",
      },
      {
        path: "/learnTutoring",
        component: () => import("@/views/abilitydevelop/learnTutoring/LearnTutoringIndex.vue"),
      },
      {
        path: "/learnTutoring/detail",
        component: () => import("@/views/abilitydevelop/learnTutoring/LearnTutoringApply.vue"),
      },
      {
        path: "/learnSdl",
        component: () => import("@/views/abilitydevelop/learnSdl/LearnSdlIndex.vue"),
      },
      {
        path: "/learnSdl/detail",
        component: () => import("@/views/abilitydevelop/learnSdl/LearnSdlApply.vue"),
      },
      {
        path: "/volunteerApply",
        component: () => import("@/views/abilitydevelop/volunteerApply/VolunteerApplyIndex.vue"),
      },
      {
        path: "/volunteerApply/detail",
        component: () => import("@/views/abilitydevelop/volunteerApply/VolunteerApplyDetail.vue"),
      },
      {
        path: "/individualVolunteer",
        component: () => import("@/views/abilitydevelop/individualVolunteer/IndividualVolunteerIndex.vue"),
      },
      /** 커뮤니티 */
      {
        path: "/community",
        redirect: "/notice",
      },
      {
        path: "/notice",
        component: () => import("@/views/community/notice/NoticeIndex.vue"),
      },
      {
        path: "/notice/detail",
        component: () => import("@/views/community/notice/NoticeDetail.vue"),
      },
      {
        path: "/qna",
        component: () => import("@/views/community/qna/QnaIndex.vue"),
      },
      {
        path: "/qna/detail",
        component: () => import("@/views/community/qna/QnaDetail.vue"),
      },
      {
        path: "/qna/ask",
        component: () => import("@/views/community/qna/QnaAsk.vue"),
      },
      {
        path: "/alarmTalk",
        component: () => import("@/views/community/alarmtalk/AlarmTalkIndex.vue"),
      },
      {
        path: "/alarmTalk/detail",
        component: () => import("@/views/community/alarmtalk/AlarmTalkDetail.vue"),
      },
      /** 나의 인증 현황 */
      {
        path: "/mycertistate",
        redirect: "/coreState",
      },
      {
        path: "/coreState",
        component: () => import("@/views/mycertistate/coreState/CoreStateIndex.vue"),
      },
      {
        path: "/majorState",
        component: () => import("@/views/mycertistate/majorState/MajorStateIndex.vue"),
      },
      {
        path: "/majorState/detail",
        component: () => import("@/views/mycertistate/majorState/MajorStateDetail.vue"),
      },
      /** 트랙교육과정 이수 현황 */
      {
        path: "/trackEdu",
        component: () => import("@/views/trackedu/TrackEduIndex.vue"),
      },
      /** 로그인 */
      /** 인트로 */
    ]
  },
  {
    path: "/intro",
    component: () => import("@/views/common/IntroPage.vue"),
  },
  /** 공통 라우터 */
  {
    path: "/:catchAll(.*)", // 모든 경로에 일치
    name: "NotFound",
    component: () => import("@/views/common/ErrorPage.vue"),
    meta: {
      title: "영산대학교",
      auth: false,
    },
  },
];

export default cmmnRoute;
