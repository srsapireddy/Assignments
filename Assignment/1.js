function validate(){
    console.log(`in Validate`)
    const sen = document.getElementById("sentence").value;

    const fw = document.getElementById("first_word").value;

    const sw = document.getElementById("second_word").value;
    const new_sen = sen.replaceAll(fw, sw);
    alert(new_sen);

}
