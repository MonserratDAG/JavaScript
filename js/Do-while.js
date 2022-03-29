function dowhile() {
    let result = '';
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);

    alert(result);
    // expected result: "12345"
}