/** UK-formatted editorial refresh date for trust strips and hero badges. */
export function editorialLastUpdatedLabel(): string {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

/** Month + year only — hero sublines. */
export function editorialRefreshPeriod(): string {
  return new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })
}
