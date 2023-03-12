const loader = document.querySelector('.loader');
const displayLoading = () => {
    loader.style.display = 'flex';
    document.getElementsByTagName("p")[0].style.display="none"
};

const hideLoading = () => {
    loader.style.display = 'none';
};
const fetchAdvice = async () => {
    
    displayLoading();
    const res = await fetch("https://api.adviceslip.com/advice")
    if(res){
        document.getElementsByTagName("p")[0].style.display="block"
        hideLoading();
    }

    const data = await res.json()
  

  
    document.getElementsByTagName('h1')[0].innerHTML = `Advice #${data.slip.id}`
    document.getElementsByTagName('p')[0].innerHTML = `"${data.slip.advice}"`
  }
  
  fetchAdvice()

