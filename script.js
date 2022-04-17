function check() {
    console.log("check")
    var flag = 0;
    // 設定開始()必須にする項目を設定してください
    if (document.form1.name.value == "") {
        flag = 1;
    } else if (document.form1.email.value == "") {
        flag = 1;
    } else if (document.form1.content.value == "") {
        flag = 1;
    }
    // 設定終了
    // if flagでゼロ以外のもの
    if (flag) {
        // エラーの場合ダイアログを表維持する
        window.alert("必須項目に未入力がありました");
        location.href = '#contact';

        return false;

    } else {
        return true;
    }
}
