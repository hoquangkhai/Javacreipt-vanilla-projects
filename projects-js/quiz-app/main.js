let subjectData = [
  {
    subject: "Lý Luận Chính Trị",
    questionData: [
      {
        question:
          "Thuộc tính đặc trưng của vật chất theo quan niệm MácLênin là gì? ",
        answer_a: "Là một phạm trù triết học",
        answer_b:
          "Là thực tại khách quan tồn tại bên ngoài, không lệ thuộc vào cảm giác",
        answer_c: "Là toàn bộ thế giới hiện thực",
        answer_d:
          "Là tất cả những gì tác động vào giác quan ta gây lên cảm giác",
        correct: "B",
        core: 5,
      },
      {
        question: "Theo Ph.Ăngghen tính thống nhất thực sự của thế giới là ở:",
        answer_a: "Tính vật chất",
        answer_b: "Tính khách quan",
        answer_c: "Tính hiện thực",
        answer_d: "Sự tồn tại cả trong tự nhiên và cả xã hội",
        correct: "A",
        core: 5,
      },
      {
        question:
          "Sai lầm của các quan niệm quy vật trước Mác về vật chất là gì?",
        answer_a: "Đồng nhất vật chất với tồn tại",
        answer_b: "Quy vật chất về một dạng vật thể",
        answer_c: "Đồng nhất vật chất với hiện thực",
        answer_d: "Coi ý thức cũng là một dạng vật chất",
        correct: "B",
        core: 5,
      },
      {
        question:
          "Quan điểm: “vật chất và ý thức là hai nguyên thể đầu tiên cùng song song tồn tại” là quan điểm của trường phái triết học nào?",
        answer_a: "Duy vật biện chứng",
        answer_b: "Duy vật siêu hình",
        answer_c: "Duy tâm khách quan",
        answer_d: "Nhị nguyên",
        correct: "D",
        core: 5,
      },
      {
        question:
          'Quan điểm: "Bản chất của thế giới là ý thức" là quan điểm của trường phái triết học nào?',
        answer_a: "Duy vật",
        answer_b: "Duy tâm",
        answer_c: "Nhị nguyên",
        answer_d: "Tất cả đều sai",
        correct: "B",
        core: 5,
      },
    ],
  },
  {
    subject: "Pháp Luật Đại Cương",
    questionData: [
      {
        question:
          "Nhà nước do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình là quan điểm của học thuyết:",
        answer_a: "Mác – Lênin.",
        answer_b: "Thần học.",
        answer_c: "Gia trưởng.",
        answer_d: "Khế ước xã hội",
        correct: "A",
        core: 5,
      },
      {
        question: "Bản chất nhà nước là:",
        answer_a: "Tính giai cấp",
        answer_b: "Tính giai cấp và tính xã hội",
        answer_c: "Tính xã hội.",
        answer_d: "Không có thuộc tính nào.",
        correct: "B",
        core: 5,
      },
      {
        question: "Tổ chức có quyền lực công: ",
        answer_a: "Công ty.",
        answer_b: "Đoàn thanh niên Cộng sản Hồ Chí Minh",
        answer_c: "Các tổ chức xã hộ",
        answer_d: "Nhà nước.",
        correct: "D",
        core: 5,
      },
      {
        question:
          "Xã hội từ xưa đến nay đã trải qua bao nhiêu kiểu Nhà nước?  ",
        answer_a: "2 kiểu Nhà nước",
        answer_b: "3 kiểu Nhà nước",
        answer_c: "4 kiểu Nhà nước",
        answer_d: "5 kiểu Nhà nước",
        correct: "A",
        core: 5,
      },
    ],
  },
];

const optionElt = document.getElementById("subject-list");
const h2ELt = document.querySelector(".question-heading");
console.log(h2ELt);

let subArr = [];
subjectData.forEach(function (data) {
  subArr.push(data.subject);
});

function getsubject(subArr) {
  subArr.forEach(function (sub, index) {
    let test = `<option value='${index}'>${sub}</option>`;
    optionElt.innerHTML += test;
  });
}

getsubject(subArr);
