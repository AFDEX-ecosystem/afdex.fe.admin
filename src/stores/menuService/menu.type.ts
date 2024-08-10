export type MenuResponseModel = {
  rowNumber: string;
  id: string;
  siteType: string;
  name: string;
  route: string;
  parentId: string;
  displayOrder: string;
  deleteFlag: string;
  vnName: string;
  regId: string;
  regDate: string;
};

export type MenuRequestModel = {
    id: string;
    siteType: string;
    name: string;
    route: string;
    parentId: string;
    vnName: string;
  };

export type MenuSearchModel = {
  name: string;
  route: string;
  vnName: string;
};
