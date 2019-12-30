export const toPersianNum = (num, comma = true) => {
  num = num.toString().trim();
  if (comma) num = addCommas(num);
  let i,
    len = num.length,
    res = "",
    pos,
    persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  for (i = 0; i < len; i++) {
    if ((pos = persianNumbers[num.charAt(i)])) res += pos;
    else res += num.charAt(i);
  }
  return res;
};

const addCommas = nStr => {
  nStr += "";
  let x = nStr.split(".");
  let x1 = x[0];
  let x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, `$1,$2`);
  }
  return x1 + x2;
};
