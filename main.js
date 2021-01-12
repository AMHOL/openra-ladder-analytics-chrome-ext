const hostname = window.location.hostname;
const baseUrl = "https://dragunoff.github.io/OpenRA-replay-analytics/#";
let slug = "oraladder";

if (hostname === "ragl.org") {
  slug = "ragl";
}

document.querySelectorAll("td a[href^='/replay/'").forEach(el => {
  const link = document.createElement("a");
  const hash = el.href.split("/").pop();

  link.href = [baseUrl, slug, hash].join("/");
  link.text = "👁️";
  link.target = "_blank";
  link.style = "display: inline-block; margin-left: 5px;"

  el.parentElement.insertBefore(link, el.nextSibling);
});
