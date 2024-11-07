const questions = [
    {
      question: "Souhaites-tu apprendre à utiliser une imprimante 3D ?",
      yes: ["Imprimer un petit objet personnalisé", "Créer un modèle 3D simple"],
      no: []
    },
    {
      question: "Veux-tu apprendre à faire de l'IOT ?",
      yes: ["Créer une lampe connectée", "Développer un capteur de température connecté"],
      no: []
    },
    {
      question: "Es-tu intéressé par la soudure ?",
      yes: ["Assembler un petit circuit", "Créer une boîte à sons"],
      no: []
    }
  ];
  
  let currentQuestionIndex = 0;
  let recommendations = [];
  
  function answer(userResponse) {
    const currentQuestion = questions[currentQuestionIndex];
    if (userResponse && currentQuestion.yes.length > 0) {
      recommendations.push(...currentQuestion.yes);
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      document.getElementById("question").innerText = questions[currentQuestionIndex].question;
    } else {
      showRecommendations();
    }
  }
  
  function showRecommendations() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("recommendation-container").style.display = "block";
  
    const list = document.getElementById("recommendations-list");
    list.innerHTML = ""; // clear previous recommendations
    recommendations.forEach(recommendation => {
      const listItem = document.createElement("li");
      listItem.textContent = recommendation;
      list.appendChild(listItem);
    });
  }
  
  function restart() {
    currentQuestionIndex = 0;
    recommendations = [];
    document.getElementById("question").innerText = questions[0].question;
    document.getElementById("question-container").style.display = "block";
    document.getElementById("recommendation-container").style.display = "none";
  }
  