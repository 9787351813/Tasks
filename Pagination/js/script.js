document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll('#table-body tr');
    const rowsPerPage = 10;
    let currentPage = 1;
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    function showPage(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        rows.forEach((row, index) => {
            if (index >= start && index < end) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function updatePaginationButtons() {
        document.getElementById('first-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('prev-page').classList.toggle('disabled', currentPage === 1);
        document.getElementById('next-page').classList.toggle('disabled', currentPage === totalPages);
        document.getElementById('last-page').classList.toggle('disabled', currentPage === totalPages);
    }

    document.getElementById('first-page').addEventListener('click', function() {
        if (currentPage !== 1) {
            currentPage = 1;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    document.getElementById('prev-page').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    document.getElementById('next-page').addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    document.getElementById('last-page').addEventListener('click', function() {
        if (currentPage !== totalPages) {
            currentPage = totalPages;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    // Initial render
    showPage(currentPage);
    updatePaginationButtons();
});
