// ==== Hàm kiểm tra CHIỀU DÀI CHUỖI nhập vào ====

function kiemTraChieuDaiChuoi (value, minLength, maxLength, selector, messErr) {
    if (value.trim().length < minLength || value.trim().length > Number(maxLength)) {
        domID(selector).innerHTML = messErr;
        return false;
    } else {
        domID(selector).innerHTML = '';
        return true;
    }
}


// ==== Hàm kiểm tra ĐỊNH DẠNG CHUỖI nhập vào ====

function kiemTraDinhDangChuoi (value, pattern, selector, messErr) {
    if(!pattern.test(value)) {
        domID(selector).innerHTML = messErr;
        return false;
    } else {
        domID(selector).innerHTML = '';
        return true;
    }
}


// ==== Hàm kiểm tra TÀI KHOẢN TRÙNG NHAU ====

function kiemTraTaiKhoan (taiKhoan, arrNV, isEdit, selector, messErr) {
    if (isEdit) return true;

    var isFlag = true;
    for (var i=0; i < arrNV.length; i++) {
        if (taiKhoan === arrNV[i].taiKhoan) {
            isFlag = false;
            break;
        }
    }

    if (isFlag) {
        domID(selector).innerHTML = '';
        return true;
    } else {
        domID(selector).innerHTML = messErr;
        return false;
    }
}


// ======= Hàm kiểm tra giá trị chuỗi ========

function kiemTraGiaTri (value, min, max, selector, messErr) {
    if (Number(value) < min || Number(value) > max) {
        domID(selector).innerHTML = messErr;
        return false;
    } else {
        domID(selector).innerHTML = '';
        return true;
    }
}


// ======= Hàm kiểm tra chức vụ =======
function kiemTraChucVu (value, selector, messErr) {
    if (value === 'Chọn chức vụ') {
        domID(selector).innerHTML = messErr;
        return false;
    } else {
        domID(selector).innerHTML = '';
        return true;
    }
}