
$(document).ready(function () {
    appendData();
    var tempData = data;

    //On keyup input
    $('#search').on('keyup', function (e) {
        var searchVal = e.target.value;

        data = tempData.filter(item => {
            return item.name.toLowerCase().includes(searchVal.toLowerCase()) || item.elo == (searchVal) || (searchVal.toLowerCase() == 'leader' && item.leader);
        })

        appendData();
    })
});

function appendData() {
    var tbody = $('tbody');
    tbody.empty();

    data.map((item, index) => {
        const tr = document.createElement('tr');

        if (item.leader) {
            tr.classList = 'leader'; // Set the content for each <td>
        }

        $.each(item, function (key, value) {
            if (key !== 'leader') {
                const td = document.createElement('td');
                td.textContent = value; // Set the content for each <td>
                tr.appendChild(td); // Append <td> to <tr>
            }
        });
        tbody.append(tr);
    });
}

data = [
    {
        "number": 1,
        "name": "Khánh Chi",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 2,
        "name": "Loan Thi",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 3,
        "name": "Ngọc Thuận",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 4,
        "name": "Thảo Linh",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 5,
        "name": "Lan Anh",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 6,
        "name": "Thuý Nga",
        "elo": 3.5,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 7, "name": "Vân", "elo": 3.5, "gender": "Nữ", "leader": false },
    { "number": 8, "name": "Khánh", "elo": 3.5, "gender": "Nữ", "leader": false },
    {
        "number": 9,
        "name": "Kh.Huyền",
        "elo": 4,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 10, "name": "Như Ý", "elo": 4, "gender": "Nữ", "leader": false },
    {
        "number": 11,
        "name": "Ng.Huyền",
        "elo": 4,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 12,
        "name": "K.Xuyến",
        "elo": 4,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 13,
        "name": "Đồng Hiếu",
        "elo": 4,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 14,
        "name": "Cẩm Bình",
        "elo": 4,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 15,
        "name": "Xuân Trường",
        "elo": 4,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 16,
        "name": "Đức Phong",
        "elo": 4,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 17,
        "name": "Ng.Khánh",
        "elo": 4,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 18,
        "name": "Tuấn Vũ",
        "elo": 4,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 19,
        "name": "Hưng Phạm",
        "elo": 4,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 20,
        "name": "Phước Trường",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 21,
        "name": "Đắc Mạnh",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 22,
        "name": "Duy Vũ",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 23,
        "name": "Đức Hải",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 24,
        "name": "Minh Quốc",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 25,
        "name": "Văn Hưng",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    { "number": 26, "name": "Tín", "elo": 4.5, "gender": "Nam", "leader": false },
    {
        "number": 27,
        "name": "Thanh Khoa",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 28,
        "name": "Ph.Hưng",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 29,
        "name": "Đình Sỹ",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 30,
        "name": "Nhơn Lương",
        "elo": 4.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 31,
        "name": "Thanh Thanh",
        "elo": 4.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 32,
        "name": "Ng. Xuyến",
        "elo": 4.5,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 33, "name": "Nga", "elo": 4.5, "gender": "Nữ", "leader": false },
    {
        "number": 34,
        "name": "Huy Võ",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 35,
        "name": "Thanh Công",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 36,
        "name": "Sỹ Luận",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 37,
        "name": "Đình Chiến",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 38,
        "name": "Ng. Bình",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 39,
        "name": "Từ Huy",
        "elo": 5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 40,
        "name": "Tr. Huyền",
        "elo": 5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 41,
        "name": "Tú Uyên",
        "elo": 5,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 42, "name": "Ngân", "elo": 5, "gender": "Nữ", "leader": false },
    { "number": 43, "name": "Thu Hà", "elo": 5, "gender": "Nữ", "leader": false },
    {
        "number": 44,
        "name": "Ng.Thảo",
        "elo": 5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 45,
        "name": "Diễm Linh",
        "elo": 5.25,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 46,
        "name": "Thanh Trà",
        "elo": 5.25,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 47,
        "name": "Phan Kiều",
        "elo": 5.25,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 48,
        "name": "Dung",
        "elo": 5.25,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 49,
        "name": "Tiến Quốc",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 50,
        "name": "Khoa Bùi",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 51,
        "name": "Hoàng Tuấn",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 52,
        "name": "Khoa CL",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 53,
        "name": "Anh Đức",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 54,
        "name": "Mr Đức",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 55,
        "name": "HM Thành",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 56,
        "name": "Đức Hải",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 57,
        "name": "Bảo Huy",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 58,
        "name": "Bảo Việt",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 59,
        "name": "M. Vương",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 60,
        "name": "Ngọc Tâm",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 61,
        "name": "Trọng Đạt",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 62,
        "name": "Văn Thơ",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 63,
        "name": "Ng. Khanh",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 64,
        "name": "Công Tài",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 65,
        "name": "Đại Nam",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 66,
        "name": "Nguyễn Mót",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 67,
        "name": "Ngọc Tú",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 68,
        "name": "H. Vương",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 69,
        "name": "Quang Vinh",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 70,
        "name": "Đức Hoàng",
        "elo": 5.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 71,
        "name": "Bảo Lam",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 72,
        "name": "Dũng Bùi",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 73,
        "name": "Nhật Thanh",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 74,
        "name": "Diệm Hoàng",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 75,
        "name": "Đ. Nguyên",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 76,
        "name": "Lê Huy",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 77,
        "name": "Thành Đạt",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 78,
        "name": "Sanh Sơn",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 79,
        "name": "Hữu Nhật",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 80,
        "name": "Anh Kiệt",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 81,
        "name": "Thanh Mẫn",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 82,
        "name": "Văn Duẩn",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 83,
        "name": "Hùng VNB",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 84,
        "name": "Xuân Quang",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 85,
        "name": "A Phước",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 86,
        "name": "Tuấn Art",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 87,
        "name": "Trần Lịch",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 88,
        "name": "Xuân Quyết",
        "elo": 5.5,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 89,
        "name": "Minh Châu",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 90,
        "name": "Minh Hương",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 91,
        "name": "Huyền Trân",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 92,
        "name": "Huỳnh Thư",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 93,
        "name": "Ng. Trinh",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 94,
        "name": "Kim Anh",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 95,
        "name": "Hương",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 96, "name": "Nhi", "elo": 5.5, "gender": "Nữ", "leader": false },
    { "number": 97, "name": "Lai", "elo": 5.5, "gender": "Nữ", "leader": false },
    {
        "number": 98,
        "name": "Hà Nhi",
        "elo": 5.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 99,
        "name": "Mai Quế",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 100,
        "name": "Thu Trang",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 101,
        "name": "Trần Oanh",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 102,
        "name": "Hoàng Yến",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 103,
        "name": "Hồng Trần",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 104,
        "name": "Hạ Hồng",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 105,
        "name": "Cúc Hoạ Mi",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 106,
        "name": "Ng. Phương",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 107,
        "name": "Vân Giang",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 108,
        "name": "Bùi Hiền",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 109,
        "name": "Hà Hạnh",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 110,
        "name": "Mỹ Lệ",
        "elo": 5.75,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 111,
        "name": "Tiền Giang",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 112,
        "name": "Văn Tuấn",
        "elo": 5.75,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 113,
        "name": "Huy Hoàng",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 114,
        "name": "Ng. Khánh",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 115,
        "name": "Lục Phong",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 116,
        "name": "M. Hoàng",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 117,
        "name": "Thế Anh",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 118,
        "name": "Bảo Phúc",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 119,
        "name": "Phan Danh",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 120,
        "name": "Võ Thành",
        "elo": 5.75,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 121,
        "name": "Văn Vượng",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 122,
        "name": "Văn Thọ",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 123,
        "name": "Văn Thông",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 124,
        "name": "Ph. Nghinh",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 125,
        "name": "Đông Vũ",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 126,
        "name": "Văn Lin",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 127,
        "name": "Hồ Huy",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 128,
        "name": "Quang Phúc",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 129,
        "name": "Hoàng Lê",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 130,
        "name": "Nhật Quân",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 131,
        "name": "Hoàng Minh",
        "elo": 6,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 132,
        "name": "Chị Hoà",
        "elo": 6,
        "gender": "Nữ",
        "leader": false
    },
    { "number": 133, "name": "Thảo", "elo": 6, "gender": "Nữ", "leader": false },
    {
        "number": 134,
        "name": "Chị Thuỷ",
        "elo": 6,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 135,
        "name": "Kim Tiền",
        "elo": 6,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 136,
        "name": "Tuấn Hứa",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 137,
        "name": "Thế Hiệu",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 138,
        "name": "Sỹ Tuấn",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 139,
        "name": "Tr. Khánh",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 140,
        "name": "Dương Long",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 141,
        "name": "Bình Yake",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 142,
        "name": "Văn Khoa",
        "elo": 6.25,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 143,
        "name": "Trần Triều",
        "elo": 6.25,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 144,
        "name": "Quang Huy",
        "elo": 6.25,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 145,
        "name": "Tân Cảnh",
        "elo": 6.25,
        "gender": "Nam",
        "leader": false
    },
    {
        "number": 146,
        "name": "Trịnh Minh",
        "elo": 6.5,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 147,
        "name": "Mạnh Tuấn",
        "elo": 6.5,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 148,
        "name": "Phạm Thuận",
        "elo": 6.5,
        "gender": "Nam",
        "leader": true
    },
    {
        "number": 149,
        "name": "Viên",
        "elo": 6.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 150,
        "name": "Thuỷ",
        "elo": 6.5,
        "gender": "Nữ",
        "leader": false
    },
    {
        "number": 151,
        "name": "Phú Lê",
        "elo": 6.7,
        "gender": "Nam",
        "leader": true
    }
]

