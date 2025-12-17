/**
 * Navigation Utility
 * Updates navigation based on authentication status
 */

import authService from './auth.js';

// Update navigation to show login/signup or user profile
export function updateNavigation() {
    const nav = document.querySelector('header nav');

    if (!nav) return;

    if (authService.isAuthenticated()) {
        const user = authService.getUser();

        // Remove existing auth links if any
        const existingAuthLinks = nav.querySelectorAll('.auth-link, .profile-link');
        existingAuthLinks.forEach(link => link.remove());

        // Add user profile dropdown or link
        const profileLink = document.createElement('div');
        profileLink.className = 'profile-link';
        profileLink.style.cssText = 'position: relative; cursor: pointer;';
        profileLink.innerHTML = `
            <a href="#" onclick="toggleProfileMenu(event)" style="display: flex; align-items: center; gap: 0.5rem;">
                <span>${user.firstName}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                </svg>
            </a>
            <div id="profileMenu" class="profile-menu" style="display: none; position: absolute; right: 0; top: 100%; margin-top: 0.5rem; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); min-width: 150px; z-index: 1001;">
                <a href="profile.html" style="display: block; padding: 0.8rem 1rem; color: #333; text-decoration: none; border-bottom: 1px solid #eee;">Profile</a>
                <a href="#" onclick="logout(event)" style="display: block; padding: 0.8rem 1rem; color: #c62828; text-decoration: none;">Logout</a>
            </div>
        `;

        nav.appendChild(profileLink);

        // Add global functions for profile menu
        window.toggleProfileMenu = function(e) {
            e.preventDefault();
            const menu = document.getElementById('profileMenu');
            menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
        };

        window.logout = function(e) {
            e.preventDefault();
            authService.logout();
            window.location.href = 'index.html';
        };

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const profileLink = document.querySelector('.profile-link');
            const menu = document.getElementById('profileMenu');
            if (profileLink && menu && !profileLink.contains(e.target)) {
                menu.style.display = 'none';
            }
        });

    } else {
        // Remove existing auth links if any
        const existingAuthLinks = nav.querySelectorAll('.auth-link, .profile-link');
        existingAuthLinks.forEach(link => link.remove());

        // Add login and signup links
        const loginLink = document.createElement('a');
        loginLink.href = 'login.html';
        loginLink.textContent = 'Login';
        loginLink.className = 'auth-link';

        const signupLink = document.createElement('a');
        signupLink.href = 'signup.html';
        signupLink.textContent = 'Sign Up';
        signupLink.className = 'auth-link';
        signupLink.style.cssText = 'background: #8e2de2; color: white; border: 1.5px solid #8e2de2;';

        nav.appendChild(loginLink);
        nav.appendChild(signupLink);
    }
}

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});
