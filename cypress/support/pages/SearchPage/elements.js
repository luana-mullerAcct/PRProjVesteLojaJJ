export const ELEMENTS = {
  SEARCH_RESULT: {
    fnSrcResult: (product) =>
      `#gallery-layout-container img[alt~='${product}']`,
    resultEmpty:
        '.mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol > :nth-child(3) > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy'
      },
}
