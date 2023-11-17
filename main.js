

let mf = document.querySelector('math-field');

mf.mathVirtualKeyboardPolicy = "manual";


// mathVirtualKeyboard.show();

let arr = [];

for (let i = 0; i < 3; i++) {
  arr.push([]);

  for (let j = 0; j < 10; j++) {
    arr[i][j] = {
      label: "KPI" + ((j + 1) + i * 10),
      class: 'small'
    };
  }
}

mathVirtualKeyboard.layouts = [
  {
    label: 'Basic',
    rows: [
      [
        '[7]',
        '[8]',
        '[9]',
        '[+]',
        "[separator-5]",
        "\\sqrt{#0}"
      ],
      [
        '[4]',
        '[5]',
        '[6]',
        '[-]',
        "[separator-5]",
        "max", // { label: "max", class: 'small' }
      ],
      [
        '[1]',
        '[2]',
        '[3]',
        '*',
        "[separator-5]",
        "("
      ],
      [
        { label: '[0]', width: 2 },
        ",",
        '/',
        "[separator-5]",
        ")"
      ],
    ],
  },
  {
    label: 'KPI',
    rows: arr,
  }
];



mathVirtualKeyboard.layouts[1].rows = arr;