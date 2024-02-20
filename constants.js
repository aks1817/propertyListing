const API_URL = "https://www.vrbo.com/graphql";
const API_HEADERS = {
  authority: "www.vrbo.com",
  accept: "*/*",
  "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,no;q=0.7,de;q=0.6",
  "cache-control": "no-cache",
  "client-info": "shopping-pwa,unknown,unknown",
  "content-type": "application/json",
  origin: "https://www.vrbo.com",
  pragma: "no-cache",
  referer:
    "https://www.vrbo.com/search?adults=2&amenities=&children=&d1=2023-12-27&d2=2023-12-28&destination=73%20W%20Monroe%20St%2C%20Chicago%2C%20IL%2060603%2C%20USA&endDate=2024-03-05&latLong=&mapBounds=&pwaDialog=&regionId&semdtl=&sort=RECOMMENDED&startDate=2024-03-01&theme=&userIntent=",
  "sec-ch-ua":
    '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  "x-enable-apq": "true",
  "x-page-id": "page.Hotel-Search,H,20",
  Cookie:
    "DUAID=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; HMS=76a33820-7b73-44b4-9e79-b25be397d6b1; MC1=GUID=c0cb79039f0167a709ebb5375ee60b9a; ak_bmsc=F34B176F7EC65CB3B03CC4A508769354~000000000000000000000000000000~YAAQR4gsMeOl6q+NAQAA65WbxhYK/bUBXjkSZylhyPJcouLmiJWwvIZ1I/kX+8hA7/Izm4lcZemDciTb50CLVg1MztnvCxWzd5rslqJNIspVMBjU6PiLD1HGwQZ76bHYvMKbz1x7iye/rLYeMLyHhjA/uK6w+1zf1rU4w9wG2yM6QiKee98z35mPY7VEtgLjeFabJ75F85cF2el3hHjz0JBgPNOUuEZMyM8lYKD7Py0GNXi4XtcFLUBtvK2bC1kkZndgV4HgE/IrFh1ubdOV7SICxR3xqhYMJRuOrWqbLxUQrKM4oL9Oo1oiO1OxzRVefmoZqoOsCc482Lv5Hs2WbKZ7LXNxeVc/UTyL6yfl9MAGDworeIFW2zyJ0TMowr8GKw==; bm_sv=5A50475A03022FEDA478326593987F19~YAAQR4gsMTCm6q+NAQAA0rabxhbas1OSEGbsqDN9J0V62NdX3NNs5SM/8SSdkrwZ4m6crPcF57XqZmvYLyXtn4RVRs0NExCfekhApzhMytWyQ38zmguhqStsLxmgGm8Te6IVCx+q9qDIns+07+JyiQc4yPoU6/a1RopEofX9cY9gO6kE2SouGAOxFEgjdrWcCbEb7Z6H5sBAu6MC9ZnK62lnqjk+r2AK+qtIlGIHmfZzZO7ih9kXQN8NV8wCvA==~1; cesc=%7B%22marketingClick%22%3A%5B%22false%22%2C1708434110135%5D%2C%22hitNumber%22%3A%5B%225%22%2C1708434110135%5D%2C%22visitNumber%22%3A%5B%223%22%2C1708433517862%5D%2C%22entryPage%22%3A%5B%22page.Hotel-Search%22%2C1708434110135%5D%7D; hav=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; ha-device-id=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; has=7d87af75-579c-8ac5-83fd-bc65e5a039e7; hav=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; DUAID=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; HMS=76a33820-7b73-44b4-9e79-b25be397d6b1; MC1=GUID=c0cb79039f0167a709ebb5375ee60b9a; bm_sv=5A50475A03022FEDA478326593987F19~YAAQRK3OF2sM3F+NAQAAaHCfxhYdMYWobSvM0OC9CsYb3Cka4La2L+prl4QxS+U/sHsG32tEE16ZCW/KC4I7b9FTDlTXGR88n1a8Mc4I4ycnvYC6XFbSVJd+3pH+ckRlRvzH78nmkcNHV6nku0rxW7f8UXDuInPqd6O59PAkRfzLXA2HwhZFejWOWwxGZ65q83wPs5UlpjSvhZZ4zhd5FHvIjNTLCDJ5AoUQGcErAoqbmZCI459JGmq1Slc8Dg==~1; cesc=%7B%22marketingClick%22%3A%5B%22false%22%2C1708434354254%5D%2C%22hitNumber%22%3A%5B%226%22%2C1708434354254%5D%2C%22visitNumber%22%3A%5B%223%22%2C1708433517862%5D%2C%22entryPage%22%3A%5B%22page.Hotel-Search%22%2C1708434354254%5D%7D; hav=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; ha-device-id=c0cb7903-9f01-67a7-09eb-b5375ee60b9a; hav=c0cb7903-9f01-67a7-09eb-b5375ee60b9a",
};

const DEFAULT_DATE_RANGE = {
  checkInDate: { day: 1, month: 3, year: 2024 },
  checkOutDate: { day: 5, month: 3, year: 2024 },
};

module.exports = {
  API_URL,
  API_HEADERS,
  DEFAULT_DATE_RANGE,
};
