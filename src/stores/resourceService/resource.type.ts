export type ResourceResponseModel = {
  rowNumber: string;
  rsId: string;
  url: string;
  httpMethod: string;
  rsNm: string;
  rsType: string;
  regDate: string;
};

export type ResourceRequestModel = {
  rsId: string;
  url: string;
  httpMethod: string;
  rsNm: string;
  rsType: string;
};

export type ResourceSearchModel = {
  url: string;
  method: string;
  name: string;
  type: string;
  startDate: string;
  endDate: string;
};

export type ResourceRoleResponseModel = {
  rlId: string;
  rsId: string;
  rrId: string;
};

export type ResourceRoleRequestModel = {
  roleId: string;
  listInsert: Array<string>;
  listDelete: Array<string>;
};
