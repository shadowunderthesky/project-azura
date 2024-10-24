document.addEventListener('DOMContentLoaded', function() {
    // Asetetaan ajastimet tekstianimaatioiden valmistumiselle
    setTimeout(function() {
        document.querySelector('.typewriter').classList.add('done');
    }, 5000); // 5 sekuntia otsikolle

    setTimeout(function() {
        document.querySelector('.typewriter-p').classList.add('done');
    }, 7000); // 7 sekuntia kappaleelle
});
