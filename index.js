const MODULE_NAME = 'st-mobile-edit-buttons';

let floatingBar = null;

function isEditing() {

    return (
        document.querySelector('.mes_edit_done') ||
        document.querySelector('.mes_edit_cancel')
    );
}

function saveEdit() {

    const saveButton =
        document.querySelector('.mes_edit_done');

    if (saveButton) {
        saveButton.click();
    }
}

function cancelEdit() {

    const cancelButton =
        document.querySelector('.mes_edit_cancel');

    if (cancelButton) {
        cancelButton.click();
    }
}

function createFloatingButtons() {

    if (floatingBar) return;

    floatingBar = document.createElement('div');
    floatingBar.className = 'stme-floating-buttons';

    floatingBar.innerHTML = `
        <button
            class="stme-btn stme-save"
            title="Salvar edição"
        >
            ✓
        </button>

        <button
            class="stme-btn stme-cancel"
            title="Cancelar edição"
        >
            ✕
        </button>
    `;

    floatingBar
        .querySelector('.stme-save')
        .addEventListener('click', saveEdit);

    floatingBar
        .querySelector('.stme-cancel')
        .addEventListener('click', cancelEdit);

    document.body.appendChild(floatingBar);
}

function updateVisibility() {

    if (!floatingBar) return;

    if (isEditing()) {
        floatingBar.classList.add('stme-visible');
    } else {
        floatingBar.classList.remove('stme-visible');
    }
}

function init() {

    createFloatingButtons();

    setInterval(updateVisibility, 300);

    console.log(
        '[Mobile Edit Buttons] carregada.'
    );
}

if (document.readyState === 'loading') {

    document.addEventListener(
        'DOMContentLoaded',
        init,
        { once: true }
    );

} else {

    init();

}
