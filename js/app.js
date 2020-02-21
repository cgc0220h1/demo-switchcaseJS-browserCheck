function browserCheck() {
    let input = prompt("Enter the browser you are using");
    let browser = input.toLowerCase();
    switch (browser) {
        case "edge":
            alert("We got the Edge");
            break;
        case "chrome":
        case "firefox":
        case "safari":
        case "opera":
            alert("Okay we support these browsers too");
            break;
        default:
            alert("We hope that this page looks ok!");
    }
}