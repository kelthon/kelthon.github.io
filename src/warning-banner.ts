const warningBannerList = document.querySelectorAll<HTMLElement>(
  "aside.warning-banner"
)!;

warningBannerList.forEach((wb) => {
  const closeButton = wb.querySelector<HTMLButtonElement>(
    "footer.banner-control"
  )!;
  closeButton.addEventListener("click", () => (wb.style.display = "none"));
});
