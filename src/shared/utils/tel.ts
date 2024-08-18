export function telFormat(input: string) {
  let str: string;
  str = input.match(/[+0-9]/g)?.join("") ?? "";

  if (str.startsWith("+7")) {
    str = str.match(/[0-9]/g)?.join("").substring(1, 11) ?? "";
  } else {
    str = str.match(/[0-9]/g)?.join("").substring(0, 11) ?? "";
    if (str.length >= 11 && str.startsWith("8")) str = str.substring(1);
    str = str.substring(0, 10);
  }

  const code = str.substring(0, 3);
  const firstGroup = str.substring(3, 6);
  const secondGroup = str.substring(6, 8);
  const thirdGroup = str.substring(8, 10);

  if (!code) return ``;
  if (!firstGroup) return `+7 (${code}`;
  if (!secondGroup) return `+7 (${code}) ${firstGroup}`;
  if (!thirdGroup) return `+7 (${code}) ${firstGroup} ${secondGroup}`;

  return `+7 (${code}) ${firstGroup} ${secondGroup}-${thirdGroup}`;
}

export function telParse(input: string) {
  const parsed = input.match(/[0-9]/g)?.join("") ?? "";
  return `+${parsed}`;
}
