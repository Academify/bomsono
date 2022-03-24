import api from '../services/api';
class LoginController{
  static async login(email, password){

    if(email === 'email@email.com' && password === '12345'){
      console.log({email, password});
      sessionStorage.setItem("login", true);
      return true;
      /* const response = await api.get('/login', {email, password});
      if(response.data){
        sessionStorage.setItem("login", true);
        window.location('/');
      }else{
        alert('Email ou senha incorretos!');
      } */
    }else{
      alert('Email ou senha incorretos!');
    }
  }

  static logout(){
    sessionStorage.clear();
  }
}

export default LoginController;