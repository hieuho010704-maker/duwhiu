import { showToast } from './utils/dom.js';
import { getUsers, saveUsers, setCurrentUser, getCurrentUser } from './utils/storage.js';
import { DEMO_USER } from './utils/constants.js';

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\d\s+\-()]{9,15}$/.test(phone);
}

function initLoginForm() {
    const form = document.getElementById('loginForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            showToast('Please enter email and password', 'error');
            return;
        }

        if (email === DEMO_USER.email && password === DEMO_USER.password) {
            setCurrentUser({ fullName: DEMO_USER.fullName, email: DEMO_USER.email });
            showToast('Welcome back!', 'success');
            setTimeout(() => { window.location.href = 'index.html'; }, 1000);
            return;
        }

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            setCurrentUser({ fullName: user.fullName, email: user.email });
            showToast('Welcome back!', 'success');
            setTimeout(() => { window.location.href = 'index.html'; }, 1000);
        } else {
            showToast('Invalid email or password', 'error');
        }
    });
}

function initRegisterForm() {
    const form = document.getElementById('registerForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fullName = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const password = document.getElementById('regPassword').value;
        const confirm = document.getElementById('regConfirm').value;

        if (!fullName || !email || !phone || !password) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }
        if (!isValidPhone(phone)) {
            showToast('Please enter a valid phone number', 'error');
            return;
        }
        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }
        if (password !== confirm) {
            showToast('Passwords do not match', 'error');
            return;
        }

        const users = getUsers();
        if (users.find(u => u.email === email)) {
            showToast('Email already registered', 'error');
            return;
        }

        users.push({ fullName, email, phone, password });
        saveUsers(users);
        setCurrentUser({ fullName, email });
        showToast('Registration successful! Welcome!', 'success');
        setTimeout(() => { window.location.href = 'index.html'; }, 1200);
    });
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !message) {
            showToast('Please fill in all fields', 'error');
            return;
        }
        if (!isValidEmail(email)) {
            showToast('Please enter a valid email', 'error');
            return;
        }

        showToast('Message sent! We will reply within 24 hours.', 'success');
        form.reset();
    });
}

function initLogout() {
    const user = getCurrentUser();
    if (user && window.location.pathname.includes('login.html')) {
        const hint = document.createElement('p');
        hint.className = 'auth-hint mt-3';
        hint.innerHTML = `Logged in as <strong>${user.fullName}</strong>. <a href="#" id="logoutLink">Logout</a>`;
        document.querySelector('.auth-card')?.appendChild(hint);
        document.getElementById('logoutLink')?.addEventListener('click', (e) => {
            e.preventDefault();
            setCurrentUser(null);
            showToast('Logged out', 'info');
            setTimeout(() => { window.location.href = 'index.html'; }, 800);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initLoginForm();
    initRegisterForm();
    initContactForm();
    initLogout();
});
