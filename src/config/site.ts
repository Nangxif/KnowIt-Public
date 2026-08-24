export const siteConfig = {
  name: "KnowIt",
  version: "2.2.0",
  githubUrl: "https://github.com/Nangxif/KnowIt-Public",
  releasesUrl: "https://github.com/Nangxif/KnowIt-Public/releases",
  issuesUrl: "https://github.com/Nangxif/KnowIt-Public/issues",
  officialSiteUrl: "https://nangxif.github.io/KnowIt-Public/",
  afdianUrl:
    "https://ifdian.net/order/create?product_type=1&plan_id=bb5efc0a8f0c11f181ee52540025c377&sku=%5B%7B%22sku_id%22%3A%22bb66d6fa8f0c11f1bada52540025c377%22,%22count%22%3A1%7D%5D&viokrz_ex=0",
  contactEmails: ["575981390@qq.com", "nangxif@gmail.com"] as const,
  chromeWebStoreUrl:
    "https://chromewebstore.google.com/detail/knowit/jcdiikfdkjffieikiehgcffbclelinfa",
  edgeAddonsUrl:
    "https://microsoftedge.microsoft.com/addons/detail/knowit/enhdaccokoiadmddhlehmpkmeeaanlll",
};

export type InstallTargetId = "chrome" | "edge" | "github";

export type InstallTarget = {
  id: InstallTargetId;
  url: string;
};

export function getInstallTargets(): InstallTarget[] {
  return [
    { id: "chrome", url: siteConfig.chromeWebStoreUrl },
    { id: "edge", url: siteConfig.edgeAddonsUrl },
    { id: "github", url: siteConfig.githubUrl },
  ];
}

export function assetUrl(path: string) {
  const normalized = path.replace(/^\//, "");
  return `${import.meta.env.BASE_URL}${normalized}`;
}
