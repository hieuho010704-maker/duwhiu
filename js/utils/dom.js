export function getUrlParam(paramName) {
    return new URLSearchParams(window.location.search).get(paramName);
}

export function qs(selector, parent = document) {
    return parent.querySelector(selector);
}

export function qsa(selector, parent = document) {
    return parent.querySelectorAll(selector);
}

const TOAST_ICONS = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
};

function hideToast(toast) {
    toast.classList.remove('show');
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
}

export function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast-message ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${TOAST_ICONS[type] || TOAST_ICONS.success}</span>
        <span class="toast-text">${message}</span>
        <button class="toast-close" aria-label="Close">&times;</button>
    `;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const timeout = setTimeout(() => hideToast(toast), 3500);
    toast.querySelector('.toast-close')?.addEventListener('click', (e) => {
        e.stopPropagation();
        clearTimeout(timeout);
        hideToast(toast);
    });
    toast.addEventListener('click', () => {
        clearTimeout(timeout);
        hideToast(toast);
    });
}
