// Tạo hàm domID:
function domID(id) {
    return document.querySelector(id);
}

// Tạo đối tượng dsnv:
var dsnv = new DSNV;

// Lấy dữ liệu từ Local Stora lên giao diện:
getLocalStorage();

// Tạo hàm lấy thông tin nhân viên từ user, và tạo ra đối tượng nhân viên:
function getThongTinNV(isEdit) {
    // Dom đến id:
    var taiKhoan = domID('#tknv').value;
    var hoTen = domID('#name').value;
    var email = domID('#email').value;
    var matKhau = domID('#password').value;
    var ngayLam = domID('#datepicker').value;
    var luongCoBan = domID('#luongCB').value;
    var chucVu = domID('#chucvu').value;
    var gioLam = domID('#gioLam').value;

    // Tạo đối tượng nhân viên:
    var nhanVien = new NhanVien(
        taiKhoan,
        hoTen,
        email,
        matKhau,
        ngayLam,
        luongCoBan,
        chucVu,
        gioLam
    )

    // =============== Validation =================
    var isValid = true;

    // Kiểm tra Tài khoản (không trống, 4-6 ký tự, không trùng)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.taiKhoan,
            1,
            undefined,
            '#tbTKNV',
            'Tài khoản không được để trống')
        && kiemTraChieuDaiChuoi(
            nhanVien.taiKhoan,
            4,
            6,
            '#tbTKNV',
            'Tài khoản phải từ 4 đến 6 ký tự')
        && kiemTraTaiKhoan(
            nhanVien.taiKhoan,
            dsnv.arrNV,
            isEdit,
            '#tbTKNV',
            'Tài khoản đã tồn tại');

    // Kiểm tra Tên nhân viên (không trống, phải là chữ)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.hoTen,
            1,
            undefined,
            '#tbTen',
            'Họ và tên không được để trống')
        && kiemTraDinhDangChuoi(
            nhanVien.hoTen,
            /^[a-zA-Z _ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/,
            '#tbTen',
            'Họ và tên phải là chữ');

    // Kiểm tra Email (không trống, đúng định dạng)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.email,
            1,
            undefined,
            '#tbEmail',
            'Email không được để trống')
        && kiemTraDinhDangChuoi(
            nhanVien.email,
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            '#tbEmail',
            'Email không đúng định dạng');

    // Kiểm tra Mật khẩu (không trống, 6 đến 10 ký tự, chứa 1 số + 1 chữ in hoa + 1 ký tự đặc biệt)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.matKhau,
            1,
            undefined,
            '#tbMatKhau',
            'Mật khẩu không được để trống')
        && kiemTraChieuDaiChuoi (
            nhanVien.matKhau,
            6,
            10,
            '#tbMatKhau',
            'Mật khẩu phải từ 6 đến 10 ký tự')
        && kiemTraDinhDangChuoi(
            nhanVien.matKhau,
            /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
            '#tbMatKhau',
            'Mật khẩu phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt');

    // Kiểm tra Ngày làm (không trống, mm/dd/yyyy)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.ngayLam,
            1,
            undefined,
            '#tbNgay',
            'Ngày làm không được để trống')
        && kiemTraDinhDangChuoi(
            nhanVien.ngayLam,
            /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/,
            '#tbNgay',
            'Ngày làm phải định dạng mm/dd/yyyy');      

    // Kiểm tra Lương cơ bản (không trống, từ 1tr đến 20tr)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.luongCoBan,
            1,
            undefined,
            '#tbLuongCB',
            'Lương cơ bản không được để trống')
        && kiemTraGiaTri(
            nhanVien.luongCoBan,
            1000000,
            20000000,
            '#tbLuongCB',
            'Lương cơ bản phải từ 1,000,000 đến 20,000,000');

    // Kiểm tra Chức vụ (Phải chọn chức vụ hợp lệ)
    isValid &= kiemTraChucVu (
            nhanVien.chucVu,
            '#tbChucVu',
            'Chức vụ không hợp lệ'
    );

    // Kiểm tra giờ làm (không trống, từ 80 đến 200 giờ)
    isValid &= kiemTraChieuDaiChuoi(
            nhanVien.gioLam,
            1,
            undefined,
            '#tbGiolam',
            'Giờ làm không được để trống')
        && kiemTraGiaTri(
            nhanVien.gioLam,
            80,
            200,
            '#tbGiolam',
            'Giờ làm phải từ 80 đến 200 giờ');

    return isValid ? nhanVien : undefined;
}

// Tạo hàm thêm Nhân Viên:
domID('#btnThemNV').onclick = function () {
    // Tạo đối tượng nhân viên từ thông tin lấy từ user:
    var nhanVien = getThongTinNV(false);

    if (nhanVien) {
        // Thêm sinh viên vào mảng arrNV:
        dsnv.themNV(nhanVien);

        // Render dsnv ra giao diện:
        renderDSNV();

        // Đưa data vào Local Storage:
        setLocalStorage();

        // Reset ô input sau thêm:
        domID('#resetInput').reset();
    }
}

// Render dsnv ra giao diện:
function renderDSNV(arrNV = dsnv.arrNV) {
    var content = '';
    for (var i = 0; i < arrNV.length; i++) {
        var nv = arrNV[i];
        content += `<tr>
                    <td>${nv.taiKhoan}</td>
                    <td>${nv.hoTen}</td>
                    <td>${nv.email}</td>
                    <td>${nv.ngayLam}</td>
                    <td>${nv.chucVu}</td>
                    <td>${new Intl.NumberFormat('vn-VN').format(nv.tongLuong())}</td>
                    <td>${nv.xepLoai()}</td>
                    <td>
                        <button class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick = "updateNV('${nv.taiKhoan}')">Edit</button>
                    </td>
                    <td>
                        <button class="btn btn-danger" onclick = "deleteNV('${nv.taiKhoan}')" >Delete</button>
                    </td>
                    </tr>`
    }
    // Thêm vào btn để bật Login khi Edit: data-toggle="modal" data-target="#myModal"
    domID('#tableDanhSach').innerHTML = content;
}

// Lưu data vào Local storage:
function setLocalStorage() {
    localStorage.setItem('DSNV', JSON.stringify(dsnv.arrNV));
}

// Lấy data từ Local storage lên lại giao diện:
function getLocalStorage() {
    // Lấy data:
    var data = localStorage.getItem('DSNV');

    if (data) {
        // Chuyển JSON về Array:
        var parse = JSON.parse(data);

        // Vì LocalStorage không lưu được phương thức, tạo lại đối tượng mới lấy từ LocalStorage:
        var arr = [];
        for (var i = 0; i < parse.length; i++) {
            var nv = parse[i];
            var nhanVien = new NhanVien(
                nv.taiKhoan,
                nv.hoTen,
                nv.email,
                nv.matKhau,
                nv.ngayLam,
                nv.luongCoBan,
                nv.chucVu,
                nv.gioLam
            )
            arr.push(nhanVien)
        }

        // Gán mảng mới lấy về vào dssv.arrNV:
        dsnv.arrNV = arr;

        // Render DSNV ra giao diện:
        renderDSNV();
    }
}

// Tạo hàm xóa nhân viên:

function deleteNV(taiKhoan) {
    // Xóa nhân viên ra khỏi dsnv:
    dsnv.xoaNV(taiKhoan);

    // Render ra giao diện:
    renderDSNV();

    // Lưu vào Local Storage:
    setLocalStorage();
}

// Tạo hàm update nhân viên:
function updateNV(taiKhoan) {

    // Xác định index của đối tượng nhân viên cần cập nhật:
    var index = dsnv.timNV(taiKhoan);

    // Lấy ra mảng của index cần cập nhật:
    var nv = dsnv.arrNV[index];

    // Đưa dữ liệu của đối tượng lên lại ô input:
    domID('#tknv').value = nv.taiKhoan;
    domID('#name').value = nv.hoTen;
    domID('#email').value = nv.email;
    domID('#password').value = nv.matKhau;
    domID('#datepicker').value = nv.ngayLam;
    domID('#luongCB').value = nv.luongCoBan;
    domID('#chucvu').value = nv.chucVu;
    domID('#gioLam').value = nv.gioLam;

    // Ẩn btn thêm nv, display btn cập nhật:
    domID('#btnThemNV').style.display = 'none';
    domID('#btnCapNhat').style.display = 'inline-block';
    
}

// Tạo chức năng update nhân viên:
domID('#btnCapNhat').onclick = function () {

    // Tạo đối tượng nhân viên mới sau khi chỉnh sửa:
    var nhanVien = getThongTinNV(true);

    // Thay thế cho đối tượng nhân viên cũ:
    dsnv.capNhatNV(nhanVien);

    // Render ra giao diện:
    renderDSNV();

    // Cập nhật vào Local Storage:
    setLocalStorage();

    // Reset ô input sau cập nhật:
    domID('#resetInput').reset();

    // Note: id cần reset phải nằm trong form
}

// Tạo chức năng tìm loại nhân viên:

domID('#searchName').addEventListener('keyup', function () {
    var valueSearch = domID('#searchName').value.toLowerCase();
    var arrSearch = [];

    for (var i = 0; i < dsnv.arrNV.length; i++) {
        var xepLoai = dsnv.arrNV[i].xepLoai().toLowerCase();
        if (xepLoai.indexOf(valueSearch) !== -1) {
            arrSearch.push(dsnv.arrNV[i]);
        }
    }

    renderDSNV(arrSearch);
})

// Tạo chức năng khi đóng, sẽ reset ô input luôn:
domID('#btnDong').onclick = function () {
    // Reset ô input:
    domID('#resetInput').reset();
    
    // Reset ô thông báo:
    domID('#tbTKNV').innerHTML = '';
    domID('#tbTen').innerHTML = '';
    domID('#tbEmail').innerHTML = '';
    domID('#tbMatKhau').innerHTML = '';
    domID('#tbNgay').innerHTML = '';
    domID('#tbLuongCB').innerHTML = '';
    domID('#tbChucVu').innerHTML = '';
    domID('#tbGiolam').innerHTML = '';
}

// Ẩn btn cập nhật, display btn thêm nv:
domID('#btnThem').onclick = function () {
    domID('#btnThemNV').style.display = 'inline-block';
    domID('#btnCapNhat').style.display = 'none';
}


