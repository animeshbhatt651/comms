function searchJournalists() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        var journalistInfo = row.querySelector('.text-base').textContent.toLowerCase();
        if (journalistInfo.includes(input)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}