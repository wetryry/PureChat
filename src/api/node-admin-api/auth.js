import http from "@/utils/http/index";

export const openAuthUrl = (params) => {
  return http({
    url: '/auth/github',
    method: "get",
    params: {
      // client,
      ...params
    },
  });
};

export const githubAuth = (params) => {
  return http({
    url: "/auth/github/callback",
    method: "get",
    params: {
      // code:'',
      // client,
      ...params,
    },
  });
};
