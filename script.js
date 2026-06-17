function reviewStatus() {

    let checkedItems = document.querySelectorAll(
        '.checklist input[type="checkbox"]:checked'
    ).length;

    let result = document.getElementById("result");

    if (checkedItems === 5) {
        result.innerHTML =
            "✅ Secure Coding Review Completed Successfully!";
        result.style.color = "green";
    } else {
        result.innerHTML =
            "⚠ Please complete all security review checks.";
        result.style.color = "red";
    }
}