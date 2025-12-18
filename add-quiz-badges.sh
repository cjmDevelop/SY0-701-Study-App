#!/bin/bash

# Script to add quiz result badges to all quiz cards

# Domain 2 quizzes
sed -i '' 's|<!-- Quiz 2.1 -->|<!-- Quiz 2.1 -->|; /<!-- Quiz 2.1 -->/,/<div class="quiz-card">/{s|<div class="quiz-card">|<div class="quiz-card" data-quiz-domain="2.1">|; s|<div class="quiz-card" data-quiz-domain="2.1">|<div class="quiz-card" data-quiz-domain="2.1">\n                <div class="quiz-result-badge" id="result-2.1"></div>|; }' sub-menu-2.html

sed -i '' '/<!-- Quiz 2.2 -->/,/<div class="quiz-card">/{s|<div class="quiz-card">|<div class="quiz-card" data-quiz-domain="2.2">|; /quiz-card" data-quiz-domain/a\
                <div class="quiz-result-badge" id="result-2.2"></div>
}' sub-menu-2.html

sed -i '' '/<!-- Quiz 2.3 -->/,/<div class="quiz-card">/{s|<div class="quiz-card">|<div class="quiz-card" data-quiz-domain="2.3">|; /quiz-card" data-quiz-domain/a\
                <div class="quiz-result-badge" id="result-2.3"></div>
}' sub-menu-2.html

sed -i '' '/<!-- Quiz 2.4 -->/,/<div class="quiz-card">/{s|<div class="quiz-card">|<div class="quiz-card" data-quiz-domain="2.4">|; /quiz-card" data-quiz-domain/a\
                <div class="quiz-result-badge" id="result-2.4"></div>
}' sub-menu-2.html

sed -i '' '/<!-- Quiz 2.5 -->/,/<div class="quiz-card">/{s|<div class="quiz-card">|<div class="quiz-card" data-quiz-domain="2.5">|; /quiz-card" data-quiz-domain/a\
                <div class="quiz-result-badge" id="result-2.5"></div>
}' sub-menu-2.html

echo "Domain 2 badges added!"
