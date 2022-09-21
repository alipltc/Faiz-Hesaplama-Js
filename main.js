function krediHesapla(){
    let gelen_tutar,vade
    let aylik_taksit,faizli_tutar

    gelen_tutar = document.getElementById("textKredi").value
    liste = document.getElementById("vadeList")
    vade = liste.options[liste.selectedIndex].value

    faizli_tutar = Number((gelen_tutar*1.1).toFixed(2))
    aylik_taksit = Number((faizli_tutar/vade).toFixed(2))

    document.querySelector("#sonuc").innerHTML = "Geri Ödenecek Tutar </br>"+ faizli_tutar +" TL</br>"+
    "Aylık Taksit"+"</br>"+aylik_taksit+" TL"
}