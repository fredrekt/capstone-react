class Auth {
  constructor() {
    this.authenticated = false;  
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout() {
   this.authenticated = false;
  }

  isAuthenticated() {
    if(this.authenticated){
      localStorage.setItem('logined', true);
    }else{
      localStorage.removeItem('logined');
    }
  return this.authenticated;
  }
}

export default new Auth();