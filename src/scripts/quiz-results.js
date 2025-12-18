/**
 * Quiz Results Module
 * Fetches and displays quiz results on quiz menu pages
 */

const API_BASE_URL = 'https://auth-microservice-stuf.onrender.com/api';

/**
 * Fetch user's quiz results from backend or localStorage
 */
async function fetchQuizResults() {
    const accessToken = localStorage.getItem('accessToken');

    // If authenticated, fetch from backend
    if (accessToken) {
        try {
            const response = await fetch(`${API_BASE_URL}/quiz-results`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Quiz results fetched from backend');
                return data.results;
            } else {
                console.error('Failed to fetch quiz results:', response.status);
                return null;
            }
        } catch (error) {
            console.error('Error fetching quiz results:', error);
            return null;
        }
    } else {
        // Not authenticated, fetch from localStorage
        const localResults = JSON.parse(localStorage.getItem('localQuizResults') || '[]');
        console.log('Quiz results fetched from localStorage:', localResults);
        return localResults;
    }
}

/**
 * Get the best result for a specific quiz domain
 */
function getBestResultForDomain(results, domain) {
    if (!results || results.length === 0) return null;

    const domainResults = results.filter(r => r.quizDomain === domain);
    if (domainResults.length === 0) return null;

    // Return the result with highest percentage
    return domainResults.reduce((best, current) =>
        current.percentage > best.percentage ? current : best
    );
}

/**
 * Display quiz result badge on a quiz card
 */
function displayResultBadge(domain, result) {
    const badgeElement = document.getElementById(`result-${domain}`);
    if (!badgeElement) return;

    if (!result) {
        badgeElement.style.display = 'none';
        return;
    }

    const passed = result.passed;
    const percentage = Math.round(result.percentage);

    badgeElement.className = `quiz-result-badge ${passed ? 'passed' : 'failed'}`;
    badgeElement.textContent = passed ?
        `✓ Passed ${percentage}%` :
        `✗ Failed ${percentage}%`;
    badgeElement.style.display = 'block';
}

/**
 * Load and display quiz results for all quiz cards on the page
 */
async function loadQuizResultsForPage() {
    const results = await fetchQuizResults();
    if (!results) return;

    // Find all quiz cards with data-quiz-domain attribute
    const quizCards = document.querySelectorAll('[data-quiz-domain]');

    quizCards.forEach(card => {
        const domain = card.getAttribute('data-quiz-domain');
        const bestResult = getBestResultForDomain(results, domain);
        displayResultBadge(domain, bestResult);
    });
}

// Auto-load results when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadQuizResultsForPage);
} else {
    loadQuizResultsForPage();
}

export { fetchQuizResults, loadQuizResultsForPage };
