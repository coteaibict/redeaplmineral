# APLMineral #

Ansible faz a instalação do projeto APLMineral

Ele foi inspirado em [https://github.com/hashbangcode/vlad](https://github.com/hashbangcode/vlad) e [Laravel Homestead](http://laravel.com/docs/4.2/homestead).

## O que irá instalar ##

* Ubuntu 16.04 64-bit
* Nginx
* PHP7-FPM
* MySQL
* Codeception + PhantomJS + Selenium + Chrome
* NodeJS + Grunt + Bower + Gulp
* Composer
* Drush
* Git, Vim, Midnight Commander, etc.

## Prerequisitos ##

1. Linux, Mac ou Windows
2. Vagrant ([latest version](https://www.vagrantup.com/downloads.html))
3. Ansible ([installation instructions](http://docs.ansible.com/intro_installation.html))
4. Virtual Box ([download](https://www.virtualbox.org/wiki/Downloads))
5. NFS

    `sudo apt-get install nfs-kernel-server nfs-common portmap`

6. vagrant-triggers plugin

    `vagrant plugin install vagrant-triggers`

## Passos para instalação ##

1. Copie `example.settings.yml` para `settings.yml`

    `cp example.settings.yml settings.yml`

2. Abra `settings.yml` com seu editor de preferência.

  * Adicione os detalhes do seu git.
  * Altere o path em vhosts para o caminho completo do projeto
  * Mude o endereço de IP do box (se necessário).
  * Na seção `Virtual hosts` altere o `path` com o caminho raiz do projeto.
  * Altere as outras configurações se desejar, as configurações padrões já serão suficientes.

3. Rode `vagrant up`.
4. Rode `vagrant ssh` para acessar o seu box. Todos os sites estão dentro do diretório `~/sites`.

## Acessando a aplicação ##

Abra seu navegador e vá em `http://aplmineral.local/`. 

Usuários e senhas padrões:

```
Usuário: apl-admin
Senha: aplapl
```

## Atualizando manualmente a aplicação em stage e produção #
Ideal que sempre faça um backup do projeto antes de iniciar esse processo.

1- Acesse a pasta do projeto que contém o Drupal.

2- Execute `git pull origin stage` para o ambiente de dev/stage e `git pull origin master` para produção

3- Atualize o banco de dados com `drush updb -y`.

4- Reverta as features `drush fra -y`.

5- Atualize as dependências via composer: `composer update`.

6- Acesse a pasta do tema `themes/custom/aplmineral/`.

7- Atualize o estilo do tema: `gulp styles`.

8- Limpe o cache: `drush cr`

Pronto!