/**
 * Authentication Service
 * Handles all authentication API calls and token management
 */

// For local testing, use localhost. For production, use Render URL
// const API_BASE_URL = 'http://localhost:8080/api/auth';
const API_BASE_URL = 'https://auth-microservice-stuf.onrender.com/api/auth';

class AuthService {
    constructor() {
        this.accessToken = localStorage.getItem('accessToken');
        this.refreshToken = localStorage.getItem('refreshToken');
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * Register a new user
     */
    async register(email, password, firstName, lastName, phoneNumber = null) {
        try {
            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    phoneNumber,
                    appSource: 'SECPLUS_PREP'
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            // Check if tokens are returned (dev mode auto-verify)
            if (data.accessToken && data.refreshToken) {
                // DEV MODE: Tokens returned, save them and log user in
                this.setAuthData(data);
                localStorage.removeItem('pendingUser');
            } else {
                // PRODUCTION MODE: No tokens yet, need to verify email first
                localStorage.setItem('pendingUser', JSON.stringify(data.user));
            }

            return data;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    /**
     * Verify email with 6-digit code
     */
    async verifyEmail(email, code) {
        try {
            const response = await fetch(`${API_BASE_URL}/verify-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, code }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Verification failed');
            }

            // Store tokens and user info
            this.setAuthData(data);

            // Clear pending user
            localStorage.removeItem('pendingUser');

            return data;
        } catch (error) {
            console.error('Verification error:', error);
            throw error;
        }
    }

    /**
     * Resend verification email
     */
    async resendVerificationEmail(email) {
        try {
            const response = await fetch(`${API_BASE_URL}/resend-verification-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to resend verification email');
            }

            return data;
        } catch (error) {
            console.error('Resend verification error:', error);
            throw error;
        }
    }

    /**
     * Login user
     */
    async login(email, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Login failed');
            }

            // Store tokens and user info
            this.setAuthData(data);

            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    /**
     * Logout user
     */
    logout() {
        this.accessToken = null;
        this.refreshToken = null;
        this.user = null;
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        localStorage.removeItem('tokenExpiry');
    }

    /**
     * Refresh access token
     */
    async refreshAccessToken() {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                throw new Error('No refresh token available');
            }

            const response = await fetch(`${API_BASE_URL}/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Refresh token is invalid, logout user
                this.logout();
                throw new Error('Session expired. Please login again.');
            }

            // Update tokens
            this.setAuthData(data);

            return data;
        } catch (error) {
            console.error('Token refresh error:', error);
            throw error;
        }
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated() {
        // Always read from localStorage (source of truth)
        const accessToken = localStorage.getItem('accessToken');
        const user = localStorage.getItem('user');

        if (!accessToken || !user) {
            return false;
        }

        // Check if token is expired
        const expiry = localStorage.getItem('tokenExpiry');
        if (expiry && Date.now() > parseInt(expiry)) {
            // Token expired, try to refresh
            this.refreshAccessToken().catch(() => {
                return false;
            });
        }

        return true;
    }

    /**
     * Get current user
     */
    getUser() {
        // Always read from localStorage (source of truth)
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }

    /**
     * Get access token
     */
    getAccessToken() {
        // Always read from localStorage (source of truth)
        return localStorage.getItem('accessToken');
    }

    /**
     * Forgot password - send reset code
     */
    async forgotPassword(email) {
        try {
            const response = await fetch(`${API_BASE_URL}/forgot-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send reset code');
            }

            return data;
        } catch (error) {
            console.error('Forgot password error:', error);
            throw error;
        }
    }

    /**
     * Verify reset code
     */
    async verifyResetCode(email, code) {
        try {
            const response = await fetch(`${API_BASE_URL}/verify-reset-code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, code }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Invalid or expired code');
            }

            return data;
        } catch (error) {
            console.error('Verify reset code error:', error);
            throw error;
        }
    }

    /**
     * Reset password
     */
    async resetPassword(email, code, newPassword) {
        try {
            const response = await fetch(`${API_BASE_URL}/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, code, newPassword }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to reset password');
            }

            return data;
        } catch (error) {
            console.error('Reset password error:', error);
            throw error;
        }
    }

    /**
     * Resend reset code
     */
    async resendResetCode(email) {
        try {
            const response = await fetch(`${API_BASE_URL}/resend-reset-code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to resend reset code');
            }

            return data;
        } catch (error) {
            console.error('Resend reset code error:', error);
            throw error;
        }
    }

    /**
     * Delete account
     */
    async deleteAccount(email, password) {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(`${API_BASE_URL}/account`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to delete account');
            }

            // Logout after successful deletion
            this.logout();

            return data;
        } catch (error) {
            console.error('Delete account error:', error);
            throw error;
        }
    }

    /**
     * Store authentication data
     */
    setAuthData(data) {
        this.accessToken = data.accessToken;
        this.refreshToken = data.refreshToken;
        this.user = data.user;

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Store token expiry time (current time + expiresIn)
        const expiryTime = Date.now() + data.expiresIn;
        localStorage.setItem('tokenExpiry', expiryTime.toString());
    }

    /**
     * Make authenticated API request
     */
    async authenticatedRequest(url, options = {}) {
        try {
            // Check if token needs refresh
            const expiry = localStorage.getItem('tokenExpiry');
            if (expiry && Date.now() > parseInt(expiry) - 60000) { // Refresh 1 min before expiry
                await this.refreshAccessToken();
            }

            const accessToken = localStorage.getItem('accessToken');
            const response = await fetch(url, {
                ...options,
                headers: {
                    ...options.headers,
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (response.status === 401) {
                // Token invalid, try to refresh
                await this.refreshAccessToken();

                // Retry request with new token
                const newAccessToken = localStorage.getItem('accessToken');
                return await fetch(url, {
                    ...options,
                    headers: {
                        ...options.headers,
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${newAccessToken}`,
                    },
                });
            }

            return response;
        } catch (error) {
            console.error('Authenticated request error:', error);
            throw error;
        }
    }
}

// Create singleton instance
const authService = new AuthService();

// Export for use in other modules
export default authService;
