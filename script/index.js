
    // Banco de preguntas (60+ preguntas)
    // Configuración
    const config = {
      totalQuestions: 10,
      passingScore: 7
    };

    // Estado
    const state = {
      currentQuestionIndex: 0,
      selectedQuestions: [],
      answers: [],
      correctAnswers: 0
    };

    // Elementos DOM
    const elements = {
      quizContainer: document.getElementById('quiz-container'),
      progressBar: document.getElementById('progress-bar'),
      currentQuestion: document.getElementById('current-question'),
      totalQuestions: document.getElementById('total-questions'),
      nextBtn: document.getElementById('next-btn'),
      prevBtn: document.getElementById('prev-btn'),
      feedback: document.getElementById('feedback'),
      feedbackMessage: document.getElementById('feedback-message'),
      resultsSection: document.getElementById('results-section'),
      answersReview: document.getElementById('answers-review'),
      correctAnswers: document.getElementById('correct-answers'),
      incorrectAnswers: document.getElementById('incorrect-answers'),
      score: document.getElementById('score'),
      restartBtn: document.getElementById('restart-btn')
    };

    // Inicializar
    function init() {
      state.selectedQuestions = shuffleArray(questions).slice(0, config.totalQuestions);
      elements.totalQuestions.textContent = config.totalQuestions;
      showQuestion();
      setupEventListeners();
    }

    // Barajar array
    function shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    // Mostrar pregunta
    function showQuestion() {
      const question = state.selectedQuestions[state.currentQuestionIndex];
      
      updateProgress();
      
      let optionsHTML = question.options.map((option, index) => `
        <div class="form-check">
          <input class="form-check-input option-input" type="radio" 
                 name="question" id="option-${index}" value="${option}">
          <label class="form-check-label option-label w-100" for="option-${index}">
            ${option}
          </label>
        </div>
      `).join('');
      
      elements.quizContainer.innerHTML = `
        <div class="card-body">
          <h4 class="card-title mb-4">${question.question}</h4>
          <div class="options-container">
            ${optionsHTML}
          </div>
        </div>
      `;
      
      // Marcar respuesta seleccionada si existe
      const currentAnswer = state.answers[state.currentQuestionIndex];
      if (currentAnswer) {
        document.querySelector(`input[value="${currentAnswer}"]`).checked = true;
      }
      
      updateNavButtons();
    }

    // Actualizar progreso
    function updateProgress() {
      const progress = ((state.currentQuestionIndex) / config.totalQuestions) * 100;
      elements.progressBar.style.width = `${progress}%`;
      elements.currentQuestion.textContent = state.currentQuestionIndex + 1;
    }

    // Configurar eventos
    function setupEventListeners() {
      // Botón siguiente
      elements.nextBtn.addEventListener('click', () => {
        const selectedOption = document.querySelector('input[name="question"]:checked');
        
        if (!selectedOption && state.answers[state.currentQuestionIndex] === undefined) {
          showFeedback('Por favor selecciona una respuesta');
          return;
        }
        
        // Guardar respuesta
        if (selectedOption) {
          state.answers[state.currentQuestionIndex] = selectedOption.value;
          hideFeedback();
        }
        
        // Navegación
        if (state.currentQuestionIndex < config.totalQuestions - 1) {
          state.currentQuestionIndex++;
          showQuestion();
        } else {
          finishExam();
        }
      });
      
      // Botón anterior
      elements.prevBtn.addEventListener('click', () => {
        state.currentQuestionIndex--;
        showQuestion();
      });
      
      // Botón reiniciar
      elements.restartBtn.addEventListener('click', () => {
        window.location.reload();
      });
      
      // Cerrar alerta de error
      document.querySelector('.alert .btn-close').addEventListener('click', hideFeedback);
    }

    // Mostrar feedback de error
    function showFeedback(message) {
      elements.feedbackMessage.textContent = message;
      elements.feedback.style.display = 'block';
      elements.feedback.classList.add('shake');
      setTimeout(() => elements.feedback.classList.remove('shake'), 500);
    }

    // Ocultar feedback
    function hideFeedback() {
      elements.feedback.style.display = 'none';
    }

    // Actualizar botones de navegación
    function updateNavButtons() {
      elements.prevBtn.disabled = state.currentQuestionIndex === 0;
      elements.nextBtn.innerHTML = state.currentQuestionIndex === config.totalQuestions - 1 ? 
        'Finalizar <i class="bi bi-check-circle"></i>' : 
        'Siguiente <i class="bi bi-arrow-right"></i>';
    }

    // Finalizar examen
    function finishExam() {
      calculateResults();
      showResults();
    }

    // Calcular resultados
    function calculateResults() {
      state.correctAnswers = 0;
      
      state.selectedQuestions.forEach((question, index) => {
        const userAnswer = state.answers[index];
        if (userAnswer === question.answer) {
          state.correctAnswers++;
        }
      });
    }

    // Mostrar resultados
    function showResults() {
      const score = Math.round((state.correctAnswers / config.totalQuestions) * 10);
      
      elements.correctAnswers.textContent = state.correctAnswers;
      elements.incorrectAnswers.textContent = config.totalQuestions - state.correctAnswers;
      elements.score.textContent = score;
      
      showAnswersReview();
      
      // Ocultar quiz y mostrar resultados
      document.querySelector('.container').style.display = 'none';
      elements.resultsSection.style.display = 'block';
      
      // Scroll suave al inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mostrar revisión de respuestas
    function showAnswersReview() {
      let reviewHTML = '';
      
      state.selectedQuestions.forEach((question, index) => {
        const userAnswer = state.answers[index];
        const isCorrect = userAnswer === question.answer;
        
        reviewHTML += `
          <div class="card result-card ${isCorrect ? 'correct' : 'incorrect'} mb-3">
            <div class="card-body">
              <h5 class="card-title">Pregunta ${index + 1}: ${question.question}</h5>
              <div class="mb-2">
                <span class="fw-bold">Tu respuesta:</span>
                <span class="${isCorrect ? 'text-success' : 'text-danger'}">
                  ${userAnswer || 'No respondida'}
                </span>
              </div>
              ${!isCorrect ? `
                <div class="mb-2">
                  <span class="fw-bold">Respuesta correcta:</span>
                  <span class="text-success">${question.answer}</span>
                </div>
              ` : ''}

            </div>
          </div>
        `;
      });
      
      elements.answersReview.innerHTML = reviewHTML;
    }

    // Iniciar cuando el DOM esté listo
    document.addEventListener('DOMContentLoaded', init);