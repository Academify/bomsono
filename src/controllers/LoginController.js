import api from '../services/api';
class LoginController{
  static async login(email, password){

    if(email && password){
      const response = await api.get('/login', {email, password});
      if(response.data){
        sessionStorage.setItem("login", true);
        window.location('/');
      }else{
        alert('Email ou senha incorretos!');
      }
    }
  }

  static logout(){
    sessionStorage.clear();
  }
}

export default LoginController;