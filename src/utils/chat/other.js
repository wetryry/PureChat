// import ScreenShot from "js-web-screen-shot";

export function checkTextNotEmpty(arr) {
  return arr.some((obj) => {
    return obj.children.some((child) => {
      return child.text !== "";
    });
  });
}

export function transformData(data) {
  return data
    .filter((item) => !item.isTimeDivider && !item.isDeleted && !item.isRevoked)
    .map((data) => {
      return {
        role: data.flow === "in" ? "assistant" : "user",
        content: data.payload.text,
      };
    })
    .reverse();
}

/**
 * 渲染文件图标
 * @param {string} fileType - 文件类型
 * @returns {string} - 图标路径
 */
export const renderFileIcon = (fileType = "") => {
  let type = "default";
  if (fileType == "xlsx" || fileType == "xls") {
    type = "form";
  } else if (fileType == "doc" || fileType == "docx") {
    type = "document";
  } else if (fileType == "pptx" || fileType == "ppt") {
    type = "ppt";
  } else if (fileType == "rar" || fileType == "zip") {
    type = "zip";
  } else if (fileType == "txt" || fileType == "log") {
    type = "txt";
  } else if (fileType == "pdf") {
    type = "pdf";
  } else if (["png", "jpg", "gif", "jpeg", "webp", "svg"].includes(fileType)) {
    type = "picture";
  } else if (fileType == "mp4") {
    type = "video";
  } else if (fileType == "mp3") {
    type = "audio";
  } else if (fileType == "exe") {
    type = "exe";
  } else if (fileType == "json") {
    type = "json";
  } else if (fileType == "js") {
    type = "js";
  }
  return new URL(`../../assets/message/${type}.png`, import.meta.url).href;
};

export function screenshot(fn) {
  // new ScreenShot({
  //   enableWebRtc: true,
  //   level: 999,
  //   completeCallback: fn,
  //   closeCallback: fn,
  // });
}
