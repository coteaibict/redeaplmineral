# APLMineral #

Ansible faz a instalação do projeto APLMineral

Ele foi inspirado em [https://github.com/hashbangcode/vlad](https://github.com/hashbangcode/vlad) and [Laravel Homestead](http://laravel.com/docs/4.2/homestead).

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

1. Copie `example.settings.yml` to `settings.yml`

    `cp example.settings.yml settings.yml`

2. Abra `settings.yml` com seu editor de preferência.

  * Adicione os detalhes do seu git.
  * Mude o endereço de IP do box (se necessário).
  * Altere as outras configurações se desejar, as configurações padrões já serão suficientes.

3. Rode `vagrant up`.
4. Rode `vagrant ssh` para acessar o seu box. Todos os sites estão dentro do diretório `~/sites`.

## Acessando a aplicação ##

Abra seu navegador e vá em `aplmineral.local/`. Pronto!