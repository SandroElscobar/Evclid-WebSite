document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.work__list__item__link').forEach (function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            console.log(path)
            document.querySelectorAll('.main__work__consultation').forEach(function(tabContent) {
                tabContent.classList.remove('tab-content-active');
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
        });
    });
});