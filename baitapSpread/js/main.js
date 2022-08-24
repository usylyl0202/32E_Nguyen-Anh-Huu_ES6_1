const themHieuUng = () => {
    let headingContent = document.querySelector('.heading').innerHTML;
    const arr = [...headingContent]
    for (const index in arr) {
        if (arr[index] === ' ') {
            arr.splice(index, 1);
        }
    }
    let html = '';
    for (const value of arr) {
        html += `<span>${value}</span>`
    }
    document.querySelector('.heading').innerHTML = html;
}

window.onload = () => {
    themHieuUng()
}
