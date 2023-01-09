function Settings() {
    this.category = document.querySelector('#category');
    this.tags = document.querySelector('#tags');
    this.numberOfQuestions = document.querySelector('#questions');
    this.difficulty =[document.querySelector('#easy'),
    document.querySelector('#medium'),
    document.querySelector('#hard')]
    this.quiz = {};
  }
  /** 
   * code JavaScript, Laravel ,PHP,HTML
   * Linux BASH ,Linux ,Kubernetes
   * DevOps Kubernetes  DevOps
  */
  document.getElementById('category').addEventListener('change', function() {
    var selectedValue = this.value;
    if (selectedValue == 'Linux') {
      document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="BASH">BASH</option>
      <option value="Linux">Linux</option>
      <option value="Kubernetes">Kubernetes</option>`;
    } else if (selectedValue == 'code') {
      document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="php">php</option>
      <option value="javascript">javascript</option>
      <option value="HTML">HTML</option>
      <option value="Laravel">Laravel</option>`;
    } else if (selectedValue == 'DevOps'){
      document.getElementById('tag').style.display = 'block';
      document.getElementById('tags').innerHTML = 
      `
      <option value="Kubernetes">Kubernetes</option>
      <option value="DevOps">DevOps</option>`;
    }
  });
  
  Settings.prototype.geturl = async function() {
    try {
      const limit = this.getAmount();
      const category = this.category.value;
      const tags = this.tags.value;
      const difficulty = this.getCurrentDifficulty();
      console.log("ok")
      const url = `https://quizapi.io/api/v1/questions?category=${category}&difficulty=${difficulty}&limit=${limit}&tags=${tags}&apiKey=uHwxfvQjSD6C5xhF5A8zDby70UoisYksXQwLzL5T`
      console.log(url)
      return url;
    } catch (error) {
      alert(error);
    }
  }
  
  
  Settings.prototype.getCurrentDifficulty = function() {
    const checkedDifficulty = this.difficulty.filter(element => element.checked);
    console.log(checkedDifficulty)
    if (checkedDifficulty.length === 1) {
      return checkedDifficulty[0].id;
    } else {
      throw new Error('Please select a difficulty!');
    }
    
  }
  
  Settings.prototype.getAmount = function() {
    const amount = this.numberOfQuestions.value;
    // Not negative, not 0 and not over 50
    if (amount > 0 && amount < 21) {
      return amount;
    }
    throw new Error('Please enter a number of questions between 1 and 20!');
  } 
  var any=new Settings()
x.addEventListener("click",any.geturl.bind(any))
console.log(any) 
// export default Settings;
  // export default Settings;