module.exports = {
  apps : [{
    script: "npm start"
  }],

  deploy : {
    production : {
      key : "facade-rsa.pem",
      user : 'ubuntu',
      host : '13.58.36.105',
      ref  : 'origin/main',
      repo : 'git@github.com:pwang1997/facade-client-next.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options' : 'ForwardAgent=yes'
    }
  }
};
